import React, {useContext, useState} from 'react';
import {toast} from "react-toastify";
import './confirm.css'
import axios from "axios";
import {makeStyles, Paper, TextField} from "@material-ui/core";
import {UserContext} from "../../../UserContext";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

toast.configure();

const Confirm = () => {
    const [password, setPassword] = useState(null);
    const {user, setUser} = useContext(UserContext);
    let tok = window.location.hash;
    let auth = window.location.hash;
    tok = tok.split('?')[1]
    auth = auth.split('&')[1]

    let token = tok.split('=')[1].split('&')[0]
    let authToken = auth.split('=')[1].split('&')[0]

    if (token == null && authToken == null) {
        document.location.href = 'http://localhost:8080/#/'
    }
    const useStyles = makeStyles((theme) => ({
        input: {
            margin: theme.spacing(2),
        },
        button: {
            margin: theme.spacing(2),
        },
    }));
    const classes = useStyles();

    function handleSubmit(event) {
        event.preventDefault();
        console.log(password, token, authToken)
        axios.post('http://localhost:8080/api/account/bookingconfirm', {
            password: password,
            token: token,
            auth_token: authToken
        }).then(response => {
            if (response.status === 200) {
                toast('Success! Password Set', {type: 'success'});
                // password is actually auth_token but i got lazy
                const {password, firstName, lastName, email} = response.data;
                localStorage.setItem('token', password);
                localStorage.setItem('firstName', firstName);
                localStorage.setItem('lastName', lastName);
                localStorage.setItem('email', email);
                setUser({
                    token: password,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                });
            }
            setTimeout(function () {
                document.location.href = 'http://localhost:8080/#/account';
            }, 2500);
        }).catch(e => {
            console.log("error: ", e);
            toast('Whoops! Something went wrong', {type: 'error'});
            // setTimeout(function () {
            //     document.location.href = 'http://localhost:8080/#/';
            // }, 2500);
        });
    }

    const handleChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <>
            <div className="fixer">
                <Paper variant={"outlined"} elevation={5}>
                    <div className="centered-container w-container">
                        <h2>Add Your Password to Secure your Account</h2>
                        <p>This password will be used to change any details in your account
                            and reservation in the future. You will always have access through your email to your
                            Reservations regardless.</p>
                        <form onSubmit={handleSubmit}>
                            <TextField id="outlined-basic" label="Password" variant="outlined" className={classes.input}
                                       placeholder="Your Password Goes Here" onChange={handleChange}/>

                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                onClick={handleSubmit}
                                className={classes.button}
                                startIcon={<SaveIcon/>}
                            >
                                Save
                            </Button>
                        </form>
                    </div>
                </Paper>
            </div>
        </>
    )
};

export default Confirm;
