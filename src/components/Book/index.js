import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Moment from 'react-moment';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  FormWrap,
  AccordionRoot,
  ButtonHome,
  Form,
} from './BookElements';
import Availability from './Availability';
import Rental from './Rental';
import GuestDetails from './GuestDetails';
import Summary from './Summary';

toast.configure();

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  details: {
    justifyContent: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
}));

const initialBook = {
  dateFrom: '',
  dateTo: '',
  guests: 2,
  promoCode: '',
  roomId: '',
  roomType: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  country: '',
  comments: '',
};

const Book = () => {
  const [booking, setBooking] = useState(initialBook);
  const [roomLists, setRoomLists] = useState([]);
  const [stage, setStage] = useState([true, false, false]);
  const [night, setNight] = useState(0);
  const [confirm, setConfirm] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBooking((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const accordionHandleChange = (_stage) => {
    let tempStage = [false, false, false];
    tempStage[_stage] = true;
    setStage(tempStage);
    setConfirm(false);
    window.scrollTo(0, 0);
  };

  const validate = async (_stage) => {
    switch (_stage) {
      case 0: //availability
        if (!booking.dateFrom || !booking.dateTo) {
          toast('Booking date cannot be empty.', { type: 'error' });
        } else if (!night) {
          toast('Check-in and out date cannot be the same.', { type: 'error' });
        } else {
          await fetchRoomData();
          accordionHandleChange(_stage + 1);
        }
        break;
      case 1: //rental
        if (!booking.roomId) {
          roomLists.length
            ? toast('Please select a room.', { type: 'error' })
            : toast('Please go back and select another dates.', {
                type: 'error',
              });
        } else {
          accordionHandleChange(_stage + 1);
        }
        break;
      case 2: //guest details
        if (!booking.firstName) {
          toast('First name cannot be empty.', { type: 'error' });
        } else if (!booking.lastName) {
          toast('Last name cannot be empty.', { type: 'error' });
        } else if (!booking.email) {
          toast('Email cannot be empty.', { type: 'error' });
        } else if (!booking.phone) {
          toast('Phone number cannot be empty.', { type: 'error' });
        } else if (!booking.country) {
          toast('Country cannot be empty.', { type: 'error' });
        } else {
          setConfirm(true);
          setStage(false, false, false);
        }
        break;
      default:
    }
  };

  async function fetchRoomData() {
    await axios
      .get('http://localhost:8080/room/available', {
        params: {
          dateFrom: booking.dateFrom,
          dateTo: booking.dateTo,
          guests: booking.guests,
        },
      })
      .then((res) => {
        console.log(res.data);
        setRoomLists(res.data);
      })
      .catch(() => {
        toast('Something went wrong. Please try it later.', { type: 'error' });
      });
  }

  const changeDateFormat = (_startDate, _endDate) => {
    return (
      <div>
        <Moment date={_startDate} format='ddd, DD MMM YY' /> {' - '}
        <Moment date={_endDate} format='ddd, DD MMM YY' />
      </div>
    );
  };

  const classes = useStyles();

  return (
    <>
      <Container>
        <ButtonHome to='/'>Bakkatown Belize</ButtonHome>
        <FormWrap>
          <Form>
            <AccordionRoot>
              <Accordion expanded={stage[0]}>
                <AccordionSummary
                  aria-controls='panel1c-content'
                  id='panel1c-header'
                  onClick={() => accordionHandleChange(0)}
                >
                  <div className={classes.column}>
                    <Typography className={classes.heading}>
                      Availability
                    </Typography>
                  </div>
                  <div className={classes.column}>
                    <Typography
                      className={classes.secondaryHeading}
                      noWrap={true}
                      component={'span'}
                    >
                      {booking.dateFrom &&
                        booking.dateTo &&
                        changeDateFormat(booking.dateFrom, booking.dateTo)}
                    </Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                  <Availability
                    booking={booking}
                    setBooking={setBooking}
                    setNight={setNight}
                    handleChange={handleChange}
                  />
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                  <Button
                    size='small'
                    color='primary'
                    // onClick={() => accordionHandleChange(1)}
                    onClick={() => validate(0)}
                  >
                    Next
                  </Button>
                </AccordionActions>
              </Accordion>
              <Accordion expanded={stage[1]}>
                <AccordionSummary
                  aria-controls='panel1c-content'
                  id='panel1c-header'
                  onClick={() => !stage[0] && accordionHandleChange(1)}
                >
                  <div className={classes.column}>
                    <Typography className={classes.heading}>Rental</Typography>
                  </div>
                  <div className={classes.column}>
                    <Typography
                      className={classes.secondaryHeading}
                      noWrap={true}
                    >
                      {booking.roomType.roomTitle}
                    </Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                  <Rental
                    booking={booking}
                    roomLists={roomLists}
                    setBooking={setBooking}
                    handleChange={handleChange}
                  />
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                  <Button size='small' onClick={() => accordionHandleChange(0)}>
                    Previous
                  </Button>
                  <Button
                    size='small'
                    color='primary'
                    onClick={() => validate(1)}
                  >
                    Next
                  </Button>
                </AccordionActions>
              </Accordion>
              <Accordion expanded={stage[2]}>
                <AccordionSummary
                  aria-controls='panel1c-content'
                  id='panel1c-header'
                  onClick={() => confirm && accordionHandleChange(2)}
                >
                  <div className={classes.column}>
                    <Typography className={classes.heading}>
                      Guest Details
                    </Typography>
                  </div>
                  <div className={classes.column}>
                    <Typography
                      className={classes.secondaryHeading}
                      component={'span'}
                      noWrap={true}
                    >
                      {booking.firstName && booking.lastName && (
                        <div style={{ textTransform: 'uppercase' }}>
                          {booking.firstName + ' ' + booking.lastName}
                        </div>
                      )}
                    </Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                  <GuestDetails booking={booking} handleChange={handleChange} />
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                  <Button size='small' onClick={() => accordionHandleChange(1)}>
                    Previous
                  </Button>
                  <Button
                    size='small'
                    color='primary'
                    onClick={() => validate(2)}
                  >
                    Confirm
                  </Button>
                </AccordionActions>
              </Accordion>
            </AccordionRoot>
          </Form>
          <Summary
            booking={booking}
            changeDateFormat={changeDateFormat}
            confirm={confirm}
            night={night}
          />
        </FormWrap>
      </Container>
    </>
  );
};

export default Book;
