import React from 'react';
import {Grid, makeStyles, TextField} from "@material-ui/core";
import {countries} from "country-data";
import {FormSelect} from "../AccountElements";
import ApiService from "../ApiService";
import Button from "@material-ui/core/Button";


class AccountDetails extends React.Component {
    constructor(props) {
        super(props);
        // this.state = props;
        this.state = {
            isLoaded: false,
            first_name: props.account.first_name,
            last_name: props.account.last_name,
            email: props.account.email,
            password: props.account.password,
            phone_number: props.account.phone_number,
            country:        props.account.country,
            message: "Please enter to change fields",
        }
        console.log("testing", this.state.email)
    }

    handleFirstChange = (event) => {
        this.setState({first_name: event.target.value});
    }
    handleLastChange = (event) => {
        this.setState({last_name: event.target.value});
    }
    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }
    handlePhoneChange = (event) => {
        this.setState({phone_number: event.target.value});
    }
    handleCountryChange = (event) => {
        this.setState({country: event.target.value});
    }


    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target[5].value === this.state.password)
        if (event.target[5].value === this.state.password) {
            const newUser = {
                // no password because you have to update with forgot password method
                first_name: event.target[0].value,
                last_name: event.target[1].value,
                email: event.target[2].value,
                phone_number: event.target[3].value,
                // country: event.target[4].value,
                password: event.target[5].value
            }
            console.log(newUser)

            ApiService.editUser(newUser).then(response => {
                if (response.status === 200) {
                    console.log('details updated');
                    this.message = "Details Updated";
                } else {
                    this.message = "Error updating"
                    //todo add this
                }
                console.log(response);
                console.log(response.data);
            });
        } else {
            this.message = "Bad password"
        }
    }

    render() {
        const classes = makeStyles((theme) => ({
            root: {
                minWidth: '75%',
                backgroundColor: "white",
                '& .MuiTextField-root': {
                    margin: theme.spacing(3),
                    width: '25ch',
                    padding: theme.spacing(3),
                },
            },
            inputs: {
                margin: theme.spacing(3)
            },
            selects: {
                margin: theme.spacing(1)
            },
        }));

        return (
            <>
                <div className={classes.root}>
                    <form onSubmit={this.handleSubmit}>
                        <Grid
                            container
                            direction="row"
                            justify="space-evenly"
                            alignItems="center"
                        >
                            <TextField className={classes.inputs} id="standard-first" label="First Name" name="first"
                                       onChange={this.handleFirstChange} defaultValue={this.state.first_name}
                                       required/>
                            <TextField className={classes.inputs} id="standard-last" label="Last Name" name="last"
                                       onChange={this.handleLastChange} defaultValue={this.state.last_name}
                                       required/>
                            <TextField className={classes.inputs} id="standard-email" label="Email" name="email"
                                       onChange={this.handleEmailChange} defaultValue={this.state.email} required/>
                            <TextField className={classes.inputs} id="standard-phone" type="text" name="phone"
                                       onChange={this.handlePhoneChange} label="Phone Number"
                                       defaultValue={this.state.phone_number} required/>
                            <FormSelect className={classes.inputs} name="country" onChange={this.handleCountryChange}
                                        defaultValue={this.state.country}
                                        required>
                                <option>{this.state.country}</option>
                                {countries.all.map((country, key) => (
                                    <option key={key} value={country.alpha2}>
                                        {country.name}
                                    </option>
                                ))}
                            </FormSelect>
                            {/*<FormSelect className={classes.selects} name='Currency' defualtValue={user.country} required>*/}
                            {/*    <option>Select Currency</option>*/}
                            {/*    {currencies.all.map((currencies, key) => (*/}
                            {/*        <option key={key} value={currencies.code}>*/}
                            {/*            {currencies.code}*/}
                            {/*        </option>*/}
                            {/*    ))}*/}
                            {/*</FormSelect>*/}
                            <TextField className={classes.inputs} id="standard-helperText" name="password"
                                       label="Password" type="password"
                                       helperText={this.message} required/>
                            <Button className={classes.inputs} variant="outlined" color="primary" type="submit"
                                    onSubmit={this.handleSubmit}>
                                Submit
                            </Button>
                        </Grid>
                    </form>
                </div>
            </>
        );
    }


}

export default AccountDetails;