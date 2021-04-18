import React, {useContext} from 'react';
import {toast} from "react-toastify";
import './confirm.css'
import axios from "axios";
import {UserContext} from "../../../UserContext";

toast.configure();

const Confirm = () => {
    const { user, setUser } = useContext(UserContext);
    let tok = window.location.hash;
    let first = window.location.hash;
    let last = window.location.hash;
    let em = window.location.hash;
    tok = tok.split('?')[1]
    first = first.split('&')[1]

    let token = tok.split('=')[1].split('&')[0]
    let firstName = first.split('&')[0].split('=')[1]
    let lastName = last.split('&')[2].split('=')[1]
    let email = em.split('&')[3].split('=')[1]


    if (token != null && email != null && firstName != null && lastName != null) {


        axios.post('http://localhost:8080/api/account/confirm', {token: token})
            .then((response) => {
                    if (response.status === 200) {
                        localStorage.setItem('token', token);
                        localStorage.setItem('firstName', firstName);
                        localStorage.setItem('lastName', lastName);
                        localStorage.setItem('email', email);
                        toast.success("Account Confirmed")
                        setUser({
                            token: token,
                            firstName: firstName,
                            lastName: lastName,
                            email: email,
                        });
                        setTimeout(() => {
                            document.location.href = 'http://localhost:8080/#/'
                        },1000)
                    }
                }
            ).catch((err) => console.log(err))

    }
    else {
        document.location.href = 'http://localhost:8080/#/'
    }

    return (
            <div className="confirm-body">
                    <div className="centered-container">
                        <h2 className="">Account Confirmed</h2>
                        <p className="">You'll be redirected in one second..</p>
                    </div>
            </div>
    )
};

export default Confirm;
