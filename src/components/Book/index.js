import React, { useState } from 'react';
import axios from 'axios';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
  Container,
  FormWrap,
  Icon,
  Form,
  // BookTab,
  // BookTabs,
  // BookTabList,
  // BookTabPanel,
} from './BookElements';
import Rooms from '../Rooms';
import Availability from './Availability';
import Rental from './Rental';
import GuestDetails from './GuestDetails';
import Payment from './Payment';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    // height: 'auto',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
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
  const [value, setValue] = useState(0);

  const tabHandleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(booking);

  return (
    <>
      <Container>
        <Icon to='/'>Bakkatown Belize</Icon>
        <FormWrap>
          <Form onSubmit={handleSubmit}>
            <div className={classes.root}>
              <Tabs
                orientation='vertical'
                variant='scrollable'
                value={value}
                onChange={tabHandleChange}
                aria-label='Vertical tabs example'
                className={classes.tabs}
              >
                <Tab label='Availability' {...a11yProps(0)} />
                <Tab label='Rental' {...a11yProps(1)} />
                <Tab label='Guest Details' {...a11yProps(2)} />
                <Tab label='Payment' {...a11yProps(3)} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <Availability
                  booking={booking}
                  setBooking={setBooking}
                  handleChange={handleChange}
                />
              </TabPanel>
              <TabPanel value={value} index={1}>
                {/* <Rental handleChange={handleChange} /> */}
                <Rooms handleChange={handleChange} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <GuestDetails booking={booking} handleChange={handleChange} />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Payment handleChange={handleChange} />
              </TabPanel>
            </div>
          </Form>
        </FormWrap>
      </Container>
    </>
  );
};

export default Book;
