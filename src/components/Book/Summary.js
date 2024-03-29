import React, { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { toast } from 'react-toastify';
import formatCurrency from '../../util';
import {
  FormContent,
  SummaryWrapper,
  FormH1,
  SummaryDetailWrapper,
  SummaryPolicyWrapper,
  AppliedPromoCodeWrapper,
  AppliedPromoCode,
  RemovePromoCode,
  ApplyPromo,
} from './BookElements';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import 'react-toastify/dist/ReactToastify.css';

const taxRate = 0.09;
toast.configure();

const Summary = (props) => {
  const [userPromoCode, setUserPromoCode] = useState('');
  const [discountRate, setDiscountRate] = useState(0);
  const [roomPrice, setRoomPrice] = useState({
    day: '',
    days: '',
    tax: '',
    total: '',
    discount: '',
    afterDiscountTotal: '',
  });
  const {
    dateFrom,
    dateTo,
    roomId,
    roomType,
    guests,
    promoCode,
  } = props.booking;
  const night = props.night;

  useEffect(() => {
    const _roomPrice = roomType.roomCost;
    _roomPrice &&
      setRoomPrice({
        day: formatCurrency(_roomPrice),
        days: formatCurrency(_roomPrice * night),
        tax: formatCurrency(_roomPrice * night * taxRate),
        total: formatCurrency(_roomPrice * night * (1 + taxRate)),
        discount: formatCurrency(
          _roomPrice * night * (1 + taxRate) * discountRate * 0.01
        ),
        afterDiscountTotal: formatCurrency(
          (_roomPrice * night * (1 + taxRate) * (100 - discountRate)) / 100
        ),
      });
  }, [roomType, night, discountRate]);

  const applyPromo = async () => {
    await axios
      .get('/api/promo', {
        params: {
          promoCode: userPromoCode,
        },
      })
      .then((res) => {
        console.log(res.data);
        props.setBooking((prevState) => ({
          ...prevState,
          promoCode: res.data.promoCode,
        }));
        toast('The code applied successfully.', { type: 'success' });
        setUserPromoCode('');
        setDiscountRate(res.data.discountRate);
        console.log(props.booking);
      })
      .catch(() => {
        toast('Invalid Promotion Code.', { type: 'error' });
      });
  };

  const removePromo = () => {
    props.setBooking((prevState) => ({
      ...prevState,
      promoCode: '',
    }));
    setUserPromoCode('');
    setDiscountRate(0);
  };

  async function handleToken(token) {
    await axios
      .post(`/api/charge`, {
        token,
        booking: props.booking,
        roomId: roomId,
        totalAmount: roomType.roomCost * night * (1 + taxRate),
      })
      .then((res) => {
        console.log(res.data);
        props.setReservationId(res.data.reservationId);
      })
      .catch(() => {
        toast('Something went wrong.', { type: 'error' });
      });
  }

  return (
    <FormContent>
      <SummaryWrapper>
        <FormH1>SUMMARY</FormH1>
        <br />
        {dateFrom && dateTo && (
          <div>
            <br />
            <SummaryDetailWrapper>
              <p>Date</p>
              {props.changeDateFormat(dateFrom, dateTo)}
            </SummaryDetailWrapper>
            <Divider />
            <SummaryDetailWrapper>
              <p>Guests</p>
              {guests}
            </SummaryDetailWrapper>
          </div>
        )}
        {roomType && dateFrom && (
          <div>
            <Divider />
            <SummaryDetailWrapper>
              <h4>{roomType.roomTitle}</h4>
              <h4>{roomPrice.day}</h4>
            </SummaryDetailWrapper>
            <SummaryDetailWrapper>
              <h4>Night(s)</h4>
              <h4>{night}</h4>
            </SummaryDetailWrapper>
            <SummaryDetailWrapper>
              <p>Rental price</p>
              {roomPrice.days}
            </SummaryDetailWrapper>
            <SummaryDetailWrapper>
              <p>BTB Hotel Tax</p>
              {roomPrice.tax}
            </SummaryDetailWrapper>
            <SummaryDetailWrapper>
              <h4>SUBTOTAL</h4>
              <h4>{roomPrice.total}</h4>
            </SummaryDetailWrapper>
            <Divider />

            {promoCode ? (
              <>
                <SummaryDetailWrapper>
                  <p>Instant Savings</p>-{roomPrice.discount}
                </SummaryDetailWrapper>
                <SummaryDetailWrapper>
                  <h3>Total</h3>
                  <h3>{roomPrice.afterDiscountTotal}</h3>
                </SummaryDetailWrapper>
                <SummaryDetailWrapper>
                  <p>Property's currency</p>
                  {roomPrice.afterDiscountTotal}
                </SummaryDetailWrapper>
                <Divider />
                <AppliedPromoCodeWrapper>
                  <p>Code applied:</p>
                  <div>
                    <AppliedPromoCode>
                      {promoCode} (-
                      {discountRate}%)
                    </AppliedPromoCode>
                    <RemovePromoCode onClick={removePromo}>x</RemovePromoCode>
                  </div>
                </AppliedPromoCodeWrapper>
              </>
            ) : (
              <>
                <SummaryDetailWrapper>
                  <h3>Total</h3>
                  <h3>{roomPrice.total}</h3>
                </SummaryDetailWrapper>
                <SummaryDetailWrapper>
                  <p>Property's currency</p>
                  {roomPrice.total}
                </SummaryDetailWrapper>
              </>
            )}
            <SummaryDetailWrapper>
              <TextField
                id='standard-secondary'
                label='Promotion Code'
                color='secondary'
                name='promoCode'
                fullWidth={true}
                value={userPromoCode}
                onChange={(e) => setUserPromoCode(e.target.value.toUpperCase())}
              />
              <ApplyPromo onClick={applyPromo}>APPLY</ApplyPromo>
            </SummaryDetailWrapper>
          </div>
        )}
        {/* <Divider /> */}
        <SummaryPolicyWrapper>
          <h4>Cancellation Policy:</h4>
          <p>All paid prepayments are non-refundable.</p>
          <h4>Damage Protection Policy:</h4>
          <p>No damage deposit is due.</p>
        </SummaryPolicyWrapper>
        <br />
        {/* {props.confirm && <ButtonPay to='./payment'>Compete Booking</ButtonPay>} */}
        {props.confirm && (
          <StripeCheckout
            stripeKey={process.env.REACT_APP_STRIPE_API_KEY}
            token={handleToken}
            name={roomType.roomTitle}
            billingAddress
            amount={
              roomType.roomCost * night * (1 + taxRate) * (100 - discountRate)
            }
          />
        )}
      </SummaryWrapper>
    </FormContent>
  );
};

export default Summary;
