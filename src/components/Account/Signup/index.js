import React, {useState} from 'react';
import {
    A, Container, FormButton, FormH1, FormInput, FormLabel, Icon, Text,
} from '../AccountElements';
import ApiService from "../ApiService";
import {countries} from "country-data";
import {makeStyles} from "@material-ui/core/styles";



const SignUp = () => {

    const blankSignup = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        // country: '',
    }

    const [signup, setSignup] = useState(blankSignup);

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);

        let newSignup = {
            firstname: signup.firstname,
            lastname: signup.lastname,
            email: signup.email,
            password: signup.password,
            // country: signup.country,
        };

        console.log("before sent")
        console.log(newSignup)

        ApiService.registerUser(newSignup.firstname, newSignup.lastname, newSignup.email, newSignup.password).then(response => {
            console.log(response.status)
            console.log(response.data.token)
            // nope need to hit email first
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('email', newSignup.email);
                // todo hash these later example below
                window.axios.defaults.headers.common['Authorization'] = response.data.token;
                document.location.href = 'http://localhost:3000/account'
            } else {
                console.log("bad signup");
                document.location.href = 'http://localhost:3000/signup'
            }
        }).catch(error => {
            console.log("error : ", error)
        });
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setSignup((prevState => ({
            ...prevState,
            [name]: value,
        })));
    };

    const useStyles = makeStyles((theme) => ({
        container: {
            position: "relative",
            width: "auto",
            height: "auto"
        },
        root: {
            position: "absolute",
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            flexGrow: 1,
            backgroundColor: "black",
            width: '50%',
            padding: 50,
            alignContent: "center",
            textAlign: "center",
            boxSizing: 'content-box',
            borderRadius: '10%',
        },
        icon: {
            position: "absolute",
            top: '3%',
            left: '15%',
            transform: 'translate(-50%, -50%)',
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
        },
        form: {
            maxWidth: 400,
            height: 'auto',
            width: '100%',
            display:"grid",
            margin: '0 auto',
            padding: '80px 32px',

        },
    }));


    const classes = useStyles();
    return (

        <>
            <Container className={classes.container}>
                <Icon className={classes.icon}>Bakkatown Belize</Icon>
                <div className={classes.root}>
                    <form onSubmit={handleSubmit} className={classes.form}>
                            <FormH1>Sign up for a new account</FormH1>

                            <FormLabel htmlFor='firstname'>First Name</FormLabel>
                            <FormInput name='firstname' id='firstname' onChange={handleChange} required/>

                            <FormLabel htmlFor='lastname'>Last Name</FormLabel>
                            <FormInput name='lastname' id='lastname' onChange={handleChange} required/>

                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <FormInput name='email' id='email' onChange={handleChange} required/>

                            <FormLabel htmlFor='password'>Password</FormLabel>
                            <FormInput name='password' type='password' id='password' onChange={handleChange}
                                       required/>

                            {/*<FormLabel htmlFor='country'>Country</FormLabel>*/}
                            {/*<FormSelect name='country' onChange={handleChange} required>*/}
                            {/*    <option>Select Country</option>*/}
                            {/*    {countries.all.map((country, key) => (*/}
                            {/*        <option key={key} value={country.alpha2}>*/}
                            {/*            {country.name}*/}
                            {/*        </option>*/}
                            {/*    ))}*/}
                            {/*</FormSelect>*/}
                            <FormButton onSubmit={handleSubmit}>Continue</FormButton>
                            <Text><A to='/forgot'>Forgot password</A></Text>
                    </form>
                </div>
            </Container>
        </>
    );
}

export default SignUp;