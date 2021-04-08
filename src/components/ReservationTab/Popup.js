import React, {useRef, useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {FormControlLabel, InputAdornment, ListSubheader, Radio, RadioGroup, TextField} from "@material-ui/core";
import {toast} from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import {reservationPopup} from "../Styles";
import {countries} from "country-data";

const prices = {
    T: 100,
    K: 55,
    Q: 50,
    H: 15
}

const roomId = {
    K1: 1,
    K9: 2,
    Q2: 3,
    Q3: 4,
    Q4: 5,
    Q5: 6,
    Q6: 7,
    Q7: 8,
    Q8: 9,
    T1: 10,
    H1: 11,
    H2: 12,
    H3: 13,
    H4: 14,
    H5: 15,
    H6: 16,
    H7: 17
}

const initialBook = {
    dateFrom: '',
    dateTo: '',
    guests: 0,
    promoCode: 'ADMIN',
    roomId: 0,
    roomType: 0,
    roomNumber: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    comments: '',
};

const initValues = {
    payment: 'stripe',
    room: 'default',
}

const Popup = () => {
    const classes = reservationPopup();
    const date = new Date().toJSON().split('T')[0];
    const dateFrom = useRef(date);
    const dateTo = useRef(date);
    const amount = useRef(0);
    const [open, setOpen] = useState(false); // button open or close
    const [booking, setBooking] = useState(initialBook); // booking object
    const [dates, setDates] = useState({
        dateFrom: new Date,
        dateTo: new Date
    }); // holds date variables
    const [values, setValues] = useState(initValues); // holds other details that don't fit well
    const [total, setTotal] = useState(0);
    const taxRate = 1.09;


    function handleChange(event) {
        const {name, value} = event.target;
        setBooking((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        const change = event.target.name;
        if (change === 'guests' || change === 'dateFrom' || change === 'dateTo') calcValue();
    }

    function handleValues(event) {
        const {name, value} = event.target;
        setValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        if (event.target.name === 'room') {
            parseRoomId(event);
            calcValue();
        }
    }

    function handlePopup() {
        setOpen(!open);
        setBooking(initialBook);
        setValues(initValues);
        setTotal(0);
    }

    function addZero(n) {
        if (n <= 9) return "0" + n;
        return n;
    }

    function parseRoomId(event) {
        const letter = event.target.value.charAt(0);
        const num = event.target.value.charAt(1);
        switch (letter) {
            case 'T':
                booking.roomType = 3;
                booking.roomNumber = num;
                booking.roomId = 10;
                break;
            case 'K':
                booking.roomType = 1;
                booking.roomNumber = num;
                booking.roomId = num === '1' ? roomId.K1 : roomId.K9
                break;
            case 'Q':
                booking.roomType = 2;
                booking.roomNumber = num;
                switch (num) {
                    case '2':
                        booking.roomId = roomId.Q2;
                        break;
                    case '3':
                        booking.roomId = roomId.Q3;
                        break;
                    case '4':
                        booking.roomId = roomId.Q4;
                        break;
                    case '5':
                        booking.roomId = roomId.Q5;
                        break;
                    case '6':
                        booking.roomId = roomId.Q6;
                        break;
                    case '7':
                        booking.roomId = roomId.Q7;
                        break;
                    case '8':
                        booking.roomId = roomId.Q8;
                        break;
                }
                break;
            case 'H':
                booking.roomType = 4;
                booking.roomNumber = num;
                switch (num) {
                    case '1':
                        booking.roomId = roomId.H1;
                        break;
                    case '2':
                        booking.roomId = roomId.H2;
                        break;
                    case '3':
                        booking.roomId = roomId.H3;
                        break;
                    case '4':
                        booking.roomId = roomId.H4;
                        break;
                    case '5':
                        booking.roomId = roomId.H5;
                        break;
                    case '6':
                        booking.roomId = roomId.H6;
                        break;
                    case '7':
                        booking.roomId = roomId.H7;
                        break;
                }
                break;
            default:
                break;
        }
    }

    function handleDates(event) {
        const tempDate = new Date(event.target.value);
        if (event.target.name === 'dateFrom') {
            if (tempDate.getTime() >= new Date().getTime()) {
                dates.dateFrom = tempDate;
                booking.dateFrom = tempDate.getFullYear() + '-' + addZero(tempDate.getMonth()) + '-' + addZero(tempDate.getDate());
            } else {
                event.target.value = date;
                toast.error("Sign-in date cannot be in the past");
            }
        } else {
            if (tempDate.getTime() > dates.dateFrom.getTime()) {
                dates.dateTo = tempDate;
                booking.dateTo = tempDate.getFullYear() + '-' + addZero(tempDate.getMonth()) + '-' + addZero(tempDate.getDate());
            } else {
                event.target.value = date;
                toast.error("Sign-out date has to be passed Sign-in Date");
            }
        }
    }

    function calcValue() {
        const days = Math.ceil(Math.abs(dates.dateFrom - dates.dateTo) / (1000 * 60 * 60 * 24));
        let total = 0;
        switch (booking.roomType) {
            case 3:
                total = (prices.T * days * taxRate).toFixed(2);
                break;
            case 1:
                total = (prices.K * days * taxRate).toFixed(2);
                break;
            case 2:
                total = (prices.Q * days * taxRate).toFixed(2);
                break;
            case 4:
                total = (prices.H * days * taxRate).toFixed(2);
                break;
        }
        setTotal(total);
        console.log(days)
        console.log(total)
    }

    function handleTotal(event) {
        setTotal(event.target.value)
    }

    function handleSubmit() {
        // validate + send
        console.log(booking)
        console.log(values)
        console.log(total)
    }

    // todo fix this
    function validate(stage) {
        switch (stage) {
            case 'details':
                return booking.dateFrom !== '' &&
                    booking.dateTo !== '' &&
                    booking.guests > 0 &&
                    booking.roomNumber !== 0 &&
                    booking.roomType !== 0 &&
                    booking.email !== '' &&
                    booking.firstName !== '' &&
                    booking.lastName !== '' &&
                    booking.phone !== '';
            case 'price':
                return (values.guests > 0 && values.room !== '' && booking.dateFrom !== '' && booking.dateTo !== '')
            default:
                break;
        }

    }

    // todo not working because idk what's actually being transferred.
    async function handleToken(token) {
        console.log('post start');
        const response = await axios.post(`/api/charge`, {
            token,
            booking: booking,
            roomId: booking.roomId,
            totalAmount: parseFloat(total)
        });
        const {status} = response.data;
        console.log('Response:', response.data);
        if (status === 'success') {
            toast('Success! Check email for details', {type: 'success'});
        } else {
            toast('Something went wrong', {type: 'error'});
        }
    }

    return (
        <div>
            <Button onClick={handlePopup}>Create Booking</Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handlePopup}>
                <DialogTitle>Fill the form</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <div className={classes.formControl}>
                            <TextField
                                label="First Name"
                                name='firstName'
                                variant="outlined"
                                color="primary"
                                type="text"
                                required
                                className={classes.textField}
                                onChange={handleChange}/>
                            <TextField
                                label="Last Name"
                                name='lastName'
                                variant="outlined"
                                color="primary"
                                type="text"
                                required
                                className={classes.textField}
                                onChange={handleChange}/>
                            <TextField
                                label="Email"
                                name='email'
                                variant="outlined"
                                color="primary"
                                type="email"
                                required
                                className={classes.textField}
                                onChange={handleChange}
                            />
                            <TextField
                                label='Phone'
                                color='primary'
                                name='phone'
                                variant='outlined'
                                required
                                className={classes.textField}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Sign in"
                                type="date"
                                name='dateFrom'
                                required
                                ref={dateFrom}
                                defaultValue={date}
                                onChange={handleDates}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}/>
                            <TextField
                                label="Sign out"
                                type="date"
                                name='dateTo'
                                required
                                ref={dateTo}
                                defaultValue={date}
                                onChange={handleDates}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}/>
                            <Select
                                labelId='simple-select-placeholder-label-label'
                                name='country'
                                value={booking.country}
                                onChange={handleChange}
                                displayEmpty
                                className={classes.selectEmpty}
                            >
                                <MenuItem>Select Country</MenuItem>
                                {countries.all.map((country, key) => (
                                    <MenuItem key={key} value={country.alpha2}>
                                        {country.name}
                                    </MenuItem>
                                ))}
                            </Select>
                            <Select
                                name='guests'
                                value={booking.guests}
                                onChange={handleChange}
                                className={classes.textField}>
                                <MenuItem value={0} disabled>Guests</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                            </Select>
                            <Select
                                name='room'
                                onChange={handleValues}
                                value={values.room}
                                required
                                className={classes.textField}
                                inputProps={{'aria-label': 'Without label'}}>
                                <MenuItem value="default" disabled>Room</MenuItem>
                                <MenuItem value={'T1'}>Tralapa</MenuItem>
                                <ListSubheader>King Studio</ListSubheader>
                                <MenuItem value={'K1'}>K1</MenuItem>
                                <MenuItem value={'K9'}>K9</MenuItem>
                                <ListSubheader>Queen Studio</ListSubheader>
                                <MenuItem value={'Q2'}>Q2</MenuItem>
                                <MenuItem value={'Q3'}>Q3</MenuItem>
                                <MenuItem value={'Q4'}>Q4</MenuItem>
                                <MenuItem value={'Q5'}>Q5</MenuItem>
                                <MenuItem value={'Q6'}>Q6</MenuItem>
                                <MenuItem value={'Q7'}>Q7</MenuItem>
                                <MenuItem value={'Q8'}>Q8</MenuItem>
                                <ListSubheader>Hostel Studio</ListSubheader>
                                <MenuItem value={'H1'}>H1</MenuItem>
                                <MenuItem value={'H2'}>H2</MenuItem>
                                <MenuItem value={'H3'}>H3</MenuItem>
                                <MenuItem value={'H4'}>H4</MenuItem>
                                <MenuItem value={'H5'}>H5</MenuItem>
                                <MenuItem value={'H6'}>H6</MenuItem>
                                <MenuItem value={'H7'}>H7</MenuItem>
                            </Select>
                            <TextField
                                label='Total'
                                name='total'
                                value={total}
                                onChange={handleTotal}
                                className={classes.textField}
                                variant="outlined"
                                InputProps={{
                                    shrink: true,
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>
                                }}
                            />
                            <RadioGroup name="payment" className={classes.center}>
                                <FormControlLabel value='stripe' onChange={handleValues} control={<Radio/>} label="Stripe Payment"/>
                                <FormControlLabel value='cash' onChange={handleValues} control={<Radio/>} label="Cash"/>
                            </RadioGroup>

                        </div>
                    </form>
                    <div className={classes.center}>
                        {values.payment === 'stripe' ?
                            (<StripeCheckout
                                stripeKey={process.env.REACT_APP_STRIPE_API_KEY}
                                token={handleToken}
                                name='Admin Transaction'
                                billingAddress
                                amount={parseFloat(total)}
                            />) :
                            (<Button type={"submit"} onClick={handleSubmit} color="primary">Submit</Button>
                            )}
                    </div>
                </DialogContent>
                <DialogActions className={classes.center}>
                    <Button onClick={handlePopup} color="primary">
                        Cancel
                    </Button>
                    <Button type={"submit"} onClick={handleSubmit} color="primary">
                        see console
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default Popup;