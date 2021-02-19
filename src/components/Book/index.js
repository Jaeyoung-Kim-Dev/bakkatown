import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Container, FormWrap, Icon, Form } from './BookElements';
import Availability from './Availability';
import Rental from './Rental';
import GuestDetails from './GuestDetails';
// import Payment from './Payment';
import Summary from './Summary';
import Moment from 'react-moment';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '750px',
    minWidth: '350px',
    width: '90vw',
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
  };

  const [booking, setBooking] = useState(initialBook);
  const [stage, setStage] = useState([true, false, false]);

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

  function accordionHandleChange(_stage) {
    let tempStage = [false, false, false];
    tempStage[_stage] = true;
    setStage(tempStage);
  }

  const classes = useStyles();

  function changeDateFormat(_startDate, _endDate) {
    return (
      <div>
        <Moment date={_startDate} format='ddd, DD MMM YY' /> {' - '}
        <Moment date={_endDate} format='ddd, DD MMM YY' />
        {' ('}
        <Moment diff={_startDate} unit='days'>
          {_endDate}
        </Moment>
        Night)
      </div>
    );
  }

  // console.log(stage);
  console.log(booking);
  console.log(booking.roomType);
  // console.log(stage.stage2);
  return (
    <>
      <Container>
        <Icon to='/'>Bakkatown Belize</Icon>
        <FormWrap>
          <Form onSubmit={handleSubmit}>
            <div className={classes.root}>
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
                      {booking.dateFrom !== '' && booking.dateTo !== ''
                        ? changeDateFormat(booking.dateFrom, booking.dateTo)
                        : ''}
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
                  <Button
                    size='small'
                    color='primary'
                    onClick={() => accordionHandleChange(1)}
                  >
                    Next
                  </Button>
                </AccordionActions>
              </Accordion>

              <Accordion
                expanded={stage[1]}
                // onClick={() => accordionHandleChange(1)}
              >
                {/* <Accordion expanded={stage.stage2}> */}
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1c-content'
                  id='panel1c-header'
                  onClick={() => (!stage[0] ? accordionHandleChange(1) : '')}
                >
                  <div className={classes.column}>
                    <Typography className={classes.heading}>Rental</Typography>
                  </div>
                  <div className={classes.column}>
                    <Typography className={classes.secondaryHeading}>
                      {booking.roomType.name}
                    </Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                  <Rental
                    booking={booking}
                    setBooking={setBooking}
                    handleChange={handleChange}
                  />
                  {/* <Rooms handleChange={handleChange} /> */}
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                  <Button size='small' onClick={() => accordionHandleChange(0)}>
                    Previous
                  </Button>
                  <Button
                    size='small'
                    color='primary'
                    onClick={() => accordionHandleChange(2)}
                  >
                    Next
                  </Button>
                </AccordionActions>
              </Accordion>
              <Accordion
                expanded={stage[2]}
                // onClick={() => accordionHandleChange(2)}
              >
                {/* <Accordion expanded={stage.stage3}> */}
                <AccordionSummary
                  // expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1c-content'
                  id='panel1c-header'
                  // onClick={() => (stage[3] ? accordionHandleChange(2) : '')}
                >
                  <div className={classes.column}>
                    <Typography className={classes.heading}>
                      Guest Details
                    </Typography>
                  </div>
                  <div className={classes.column}>
                    <Typography className={classes.secondaryHeading}>
                      {booking.firstName !== '' || booking.lastName !== '' ? (
                        <div style={{ textTransform: 'uppercase' }}>
                          {booking.firstName + ' ' + booking.lastName}
                        </div>
                      ) : (
                        ''
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
                    // onClick={() => accordionHandleChange(3)}
                  >
                    Review
                  </Button>
                </AccordionActions>
              </Accordion>
            </div>
          </Form>
          <Summary booking={booking} changeDateFormat={changeDateFormat} />
        </FormWrap>
      </Container>
    </>
  );
};

export default Book;
