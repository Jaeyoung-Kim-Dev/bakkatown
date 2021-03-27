import React, {useState} from 'react';
import ApiService from "../ApiService";
import {toast} from "react-toastify";
import './test.css'

toast.configure();

const Confirm = () => {

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const authToken = urlParams.get('auth_token');

    if (token == null && authToken == null) {
        document.location.href = 'http://localhost:3000/'
    }

    const blankConfirm = {
        password: '',
    }

    const [newConfirm, setConfirm] = useState(blankConfirm);

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(event);

        let sendConfirm = {
            password: newConfirm.password,
        }

        let response = ApiService.confirmToken(sendConfirm.password, token, authToken).then(response => {
            if (response.status === 200) {
                localStorage.setItem('token', authToken);
                toast('Success! Password Set', {type: 'success'});
                setTimeout(function () {
                    document.location.href = 'http://localhost:3000/account';
                }, 2500);
                // window.axios.defaults.headers.common['Authorization'] = token;
            } else {
                toast('Whoops! Something went wrong', {type: 'error'});
            }
        }).catch(e => {
            console.log("error: ", e);
            toast('Whoops! Something went wrong', {type: 'error'});
            setTimeout(function () {
                document.location.href = 'http://localhost:3000/';
            }, 2500);
        });
    }
    // let handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(event);
    //
    //     let sendConfirm = {
    //         password: newConfirm.password,
    //         token: token,
    //         authToken: authToken
    //     }
    //
    //     let response = ApiService.confirmToken(sendConfirm.password, sendConfirm.token, sendConfirm.authToken).then(response => {
    //         if (response.status === 200) {
    //             localStorage.setItem('token', authToken);
    //             window.axios.defaults.headers.common['Authorization'] = response.data.token;
    //         } else {
    //             console.log("bad signup");
    //         }
    //     }).catch(e => {
    //         console.log("error: ", e);
    //     });
    //
    //     console.log(response);
    //
    //     if (response.status === 200) {
    //         toast('Success! Password Set', {type: 'success'});
    //         setTimeout(function () {
    //             document.location.href = 'http://localhost:3000/';
    //         }, 2000);
    //     }
    // }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setConfirm((prevState => ({
            ...prevState,
            [name]: value,
        })));
    };

    return (
        <>
            <div className="fixer">
                <div className="body">
                    <section id="Password-Form" className="subscribe-form">
                        <div className="centered-container w-container">
                            <h2 className="heading">Add Your Password to Secure your Account</h2>
                            <p className="paragraph">This password will be used to change any details in your account
                                and
                                reservation in the future. You will always have access through your email to your
                                Reservations
                                regardless.</p>
                            <div className="w-form">
                                <form id="email-form" name="email-form" data-name="Email Form" onSubmit={handleSubmit}
                                      className="subscribe-form-flex">
                                    <div className="subscribe-form-input-wrapper">
                                        <input type="password"
                                               className="subscribe-form-input w-input"
                                               autoFocus="true" maxLength="256"
                                               name="Password-Input"
                                               data-name="Password Input"
                                               placeholder="Your Password Goes Here"
                                               id="Password-Input" required onChange={handleChange}/>
                                        <input type="submit" data-wait="Please wait..." onSubmit={handleSubmit}
                                               className="submit-button w-button"/></div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
};

export default Confirm;

{/*<form onSubmit={handleSubmit}>*/
}
{/*    <h1>Set Password</h1>*/
}
{/*    <input type="password" name="password" onChange={handleChange}/>*/
}
{/*    <button type="submit" onSubmit={handleSubmit}> Submit</button>*/
}
{/*</form>*/
}