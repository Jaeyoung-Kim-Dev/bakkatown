import React, {useState} from 'react';
import {
    Container,
    Icon,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text, A
} from '../AccountElements';
import {makeStyles} from "@material-ui/core/styles";
import ApiService from "../ApiService";


const Forgot = () => {


    const blankForgot = {
        email: '',
    }

    const [forgot, setForgot] = useState(blankForgot);

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);

        const newForgot = {
            email: forgot.email
        };

        ApiService.sendForgotRequest(newForgot.email).then(response => {
            console.log(response.status)
            console.log(response.data)
            if (response.status === 200) {
                if (localStorage.getItem('token') !== null) {
                    localStorage.clear();
                }
            }
        }).then(() =>
            // alert("A email link will be sent");
            document.location.href = 'http://localhost:3000/signin'
        ).catch(error => {
            console.log(error.message)
        });
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setForgot((prevState => ({
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
                            <FormH1>Please provide your account email</FormH1>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <FormInput name='email' id='email' onChange={handleChange} required/>

                    <FormButton onSubmit={handleSubmit}>Continue</FormButton>
                            <Text><A to='/signin'>Sign in</A></Text>
                </form>
            </div>
        </Container>
        </>
    );
};

export default Forgot;