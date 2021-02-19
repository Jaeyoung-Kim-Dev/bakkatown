import React from 'react';
import { countries } from 'country-data';
// import PropTypes from 'prop-types';
// import MaskedInput from 'react-text-mask';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { GuestDetailWrapper } from './BookElements';

const useStyles = makeStyles((theme) => ({
  selectEmpty: {
    marginTop: theme.spacing(4),
  },
  formField: {
    marginTop: theme.spacing(2),
  },
}));

const GuestDetails = (props) => {
  const classes = useStyles();

  return (
    <>
      <FormControl className={classes.formControl}>
        <GuestDetailWrapper>
          <TextField
            id='standard-secondary'
            label='First Name'
            color='secondary'
            name='firstName'
            onChange={props.handleChange}
            className={classes.formField}
            required
          />
          <TextField
            id='standard-secondary'
            label='Last Name'
            color='secondary'
            name='lastName'
            onChange={props.handleChange}
            className={classes.formField}
            required
          />
          <TextField
            id='standard-secondary'
            label='Email'
            color='secondary'
            name='email'
            onChange={props.handleChange}
            className={classes.formField}
            required
          />
          <TextField
            id='standard-secondary'
            label='Phone'
            color='secondary'
            name='phone'
            onChange={props.handleChange}
            className={classes.formField}
            required
          />
          <Select
            labelId='demo-simple-select-placeholder-label-label'
            id='demo-simple-select-placeholder-label'
            name='country'
            // value={props.booking.country}
            onChange={props.handleChange}
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
          <TextField
            id='standard-multiline-flexible'
            name='comments'
            label='Comments'
            multiline
            rowsMax={4}
            value={props.booking.comments}
            className={classes.formField}
            onChange={props.handleChange}
          />
        </GuestDetailWrapper>
      </FormControl>
    </>
  );
};

export default GuestDetails;
