import React, {useState} from 'react';
import {
    Container,
    Icon,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text, A,
} from '../AccountElements';
import {makeStyles} from "@material-ui/core/styles";
import ApiService from "../ApiService";
import axios from "axios";


const Login = () => {


    const blankSignIn = {
        email: '',
        password: '',
    }

    const [signIn, setSignup] = useState(blankSignIn);

    async function loginRequest(data) {
        try {
            console.log(data)
            return await axios.post('http://localhost:8080/api/v1/login', {
                email: data.email,
                password: data.password
            })
        } catch (error) {
            console.log(error);
        }
    }


    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);

        const newSignIn = {

            email: signIn.email,
            password: signIn.password,
        };


        loginRequest({newSignIn}).then(response => {
            console.log(response.status)
            console.log(response.data)

            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('email', response.data.email);

            }
        }).catch(error => {
            console.log(error)
        });
    };


    //     ApiService.awaitLoginRequest({newSignIn}).then(response => {
    //         console.log(response.status)
    //         console.log(response.data)
    //
    //         if (response.status === 200) {
    //             localStorage.setItem('token', response.data.token);
    //             localStorage.setItem('email', response.data.email);
    //             // todo hash these later example below
    //             window.axios.defaults.headers.common['Authorization'] = response.data.token;
    //         }
    //     }).then(response => {
    //         ApiService.sendLoginRequest(newSignIn).then(response => {
    //             document.location.href = 'http://localhost:3000/account'
    //         });
    //     }).catch(error => {
    //         // document.location.href = 'http://localhost:3000/account' // testing
    //         console.log(error.message)
    //     });
    // }

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
            display: "grid",
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
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <FormInput name='email' id='email' onChange={handleChange} required/>

                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <FormInput name='password' type='password' id='password' onChange={handleChange} required/>

                        <FormButton onSubmit={handleSubmit}>Continue</FormButton>
                        <Text>Don't have an account? Make one <A to='/signup'>here</A></Text>
                        <Text><A to='/forgot'>Forgot password</A></Text>
                    </form>
                </div>
            </Container>
        </>
    );
};

export default Login;
