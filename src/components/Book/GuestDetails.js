import React from 'react';
import { countries } from 'country-data';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormContent,
  FormH1,
  FormInput,
  FormSelect,
  FormTextArea,
} from './BookElements';

const useStyles = makeStyles((theme) => ({
  selectEmpty: {
    marginTop: theme.spacing(4),
  },
  formField: {
    marginTop: theme.spacing(2),
  },
}));

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        '(',
        /[1-9]/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

const GuestDetails = (props) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    textmask: '(   )    -    ',
    numberformat: '1320',
  });

  const phoneHandleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    props.handleChange();
  };

  return (
    <>
      <FormContent>
        <FormControl className={classes.formControl}>
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
          <FormControl className={classes.formField}>
            <InputLabel htmlFor='formatted-text-mask-input'>Phone</InputLabel>
            <Input
              value={values.textmask}
              onChange={phoneHandleChange}
              name='textmask'
              id='formatted-text-mask-input'
              inputComponent={TextMaskCustom}
            />
          </FormControl>
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
          {/* <FormInput
          type='text'
          name='firstName'
          placeholder='First Name'
          onChange={props.handleChange}
          required
        /> */}
          {/* <FormInput
          type='text'
          name='lastName'
          placeholder='Last Name'
          onChange={props.handleChange}
          required
        /> */}
          {/* <FormInput
          type='email'
          name='email'
          placeholder='Email'
          onChange={props.handleChange}
          required
        /> */}
          {/* <FormInput
          type='phone'
          name='phone'
          placeholder='Phone Number'
          onChange={props.handleChange}
          required
        /> */}
          {/* <FormSelect name='country' onChange={props.handleChange} required>
          <option>Select Country</option>
          {countries.all.map((country, key) => (
            <option key={key} value={country.alpha2}>
              {country.name}
            </option>
          ))}
        </FormSelect> */}
          {/* <FormTextArea
          name='comments'
          placeholder='Comments'
          onChange={props.handleChange}
        /> */}
        </FormControl>
      </FormContent>
    </>
  );
};

export default GuestDetails;
