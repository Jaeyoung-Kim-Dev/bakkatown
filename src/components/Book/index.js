import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Container, FormWrap, Icon, Form } from './BookElements';
// import Rooms from '../Rooms';
import Availability from './Availability';
import Rental from './Rental';
import GuestDetails from './GuestDetails';
import Payment from './Payment';
import Summary from './Summary';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '750px',
    // display: 'flex',
    // flexDirection: 'column',
    // marginTop: '100px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    justifyContent: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
}));

const Book = () => {
  const initialBook = {
    dateFrom: '',
    dateTo: '',
    guests: 2,
    promoCode: '',
    roomType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    comments: '',
    ccNumber: '',
    ccMonth: '',
    ccYear: '',
    cvc: '',
    ccName: '',
    ccAddress1: '',
    ccAddress2: '',
    ccZip: '',
  };

  const [booking, setBooking] = useState(initialBook);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBook = {
      dateFrom: booking.dateFrom,
      dateTo: booking.dateTo,
      guests: booking.guests,
      promoCode: booking.promoCode,
      roomType: booking.roomType,
      firstName: booking.firstName,
      lastName: booking.lastName,
      email: booking.email,
      phone: booking.phone,
      country: booking.country,
      comments: booking.comments,
      ccNumber: booking.ccNumber,
      ccMonth: booking.ccMonth,
      ccYear: booking.ccYear,
      cvc: booking.cvc,
      ccName: booking.ccName,
      ccAddress1: booking.ccAddress1,
      ccAddress2: booking.ccAddress2,
      ccZip: booking.ccZip,
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { newBook })
      // .post(`https://localhost:8080/`, { newBook })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBooking((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const classes = useStyles();

  console.log(booking);

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Bakkatown Belize</Icon>
          <Form onSubmit={handleSubmit}>
            <div className={classes.root}>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1c-content'
                  id='panel1c-header'
                >
                  <div className={classes.column}>
                    <Typography className={classes.heading}>
                      Availability
                    </Typography>
                  </div>
                  <div className={classes.column}>
                    <Typography className={classes.secondaryHeading}>
                      date and guests
                    </Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                  <Availability
                    booking={booking}
                    setBooking={setBooking}
                    handleChange={handleChange}
                  />
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                  <Button size='small'>Cancel</Button>
                  <Button size='small' color='primary'>
                    Save
                  </Button>
                </AccordionActions>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1c-content'
                  id='panel1c-header'
                >
                  <div className={classes.column}>
                    <Typography className={classes.heading}>Rental</Typography>
                  </div>
                  <div className={classes.column}>
                    <Typography className={classes.secondaryHeading}>
                      which room?
                    </Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                  <Rental handleChange={handleChange} />
                  {/* <Rooms handleChange={handleChange} /> */}
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                  <Button size='small'>Cancel</Button>
                  <Button size='small' color='primary'>
                    Save
                  </Button>
                </AccordionActions>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1c-content'
                  id='panel1c-header'
                >
                  <div className={classes.column}>
                    <Typography className={classes.heading}>
                      Guest Details
                    </Typography>
                  </div>
                  <div className={classes.column}>
                    <Typography className={classes.secondaryHeading}>
                      Guest Details
                    </Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                  <GuestDetails booking={booking} handleChange={handleChange} />
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                  <Button size='small'>Cancel</Button>
                  <Button size='small' color='primary'>
                    Save
                  </Button>
                </AccordionActions>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1c-content'
                  id='panel1c-header'
                >
                  <div className={classes.column}>
                    <Typography className={classes.heading}>Payment</Typography>
                  </div>
                  <div className={classes.column}>
                    <Typography className={classes.secondaryHeading}>
                      Payment
                    </Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                  <Payment handleChange={handleChange} />
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                  <Button size='small'>Cancel</Button>
                  <Button size='small' color='primary'>
                    Save
                  </Button>
                </AccordionActions>
              </Accordion>
            </div>
            <Summary />
          </Form>
        </FormWrap>
      </Container>
    </>
  );
};

export default Book;
