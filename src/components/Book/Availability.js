import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { FormContent, FormH1, FormInput } from './BookElements';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Availability = (props) => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const classes = useStyles();

  function dateHandleChange(ranges) {
    setDateRange(ranges);
    props.setBooking((prevState) => ({
      ...prevState,
      dateFrom: ranges[0].startDate,
      dateTo: ranges[0].endDate,
    }));
  }

  return (
    <>
      <FormContent>
        <FormH1>AVAILABILITY</FormH1>
        <DateRange
          onChange={(item) => dateHandleChange([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={dateRange}
          minDate={new Date()}
          direction='horizontal'
        />
        <FormControl className={classes.formControl}>
          <InputLabel shrink id='demo-simple-select-placeholder-label-label'>
            Guests
          </InputLabel>
          <Select
            labelId='demo-simple-select-placeholder-label-label'
            id='demo-simple-select-placeholder-label'
            name='guests'
            value={props.booking.guests}
            onChange={props.handleChange}
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
          </Select>
          <br />
          <TextField
            id='standard-secondary'
            label='Promotion / Group Code'
            color='secondary'
          />
        </FormControl>
      </FormContent>
    </>
  );
};

export default Availability;
