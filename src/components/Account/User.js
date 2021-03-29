import React from "react";
import ApiService from "./ApiService";


// don't use. was learning mistake

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            first: '',
            last: '',
            email: '',
            password: '',
            phone: '',
            country: '',
            reservations: []
        }
    }

    loadUser = () => {
        ApiService.loadUser(this.id)
            .then(response => {
                let user = response.data;
                this.setState({
                    id: user.id,
                    first: user.first,
                    last: user.last,
                    email: user.email,
                    password: user.password,
                    phone: user.phone,
                    country: user.country,
                    reservations: user.reservations
                });
            }).catch(error => {
            console.log('loadUser error', error);
        })
    }

    saveUser = (event) => {
        event.preventDefault();

        let user = {
            id: this.state.id,
            first: this.state.first,
            last: this.state.last,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone,
            country: this.state.country,
            reservations: this.state.reservations
        }

        ApiService.editUser(user).then(response => {
            this.props.history.push('/account');
        }).catch(error => {
            console.log('saveUser error: ', error);
        });
    }


    sendLoginRequest = (event, data) => {

        ApiService.sendLoginRequest(data).then(response => {
            // return 200 + token + email/ else 400 code / 401 if email taken 'not done yet'
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('email', response.data.email);
                // todo hash these later example below
                window.axios.defaults.headers.common['Authorization'] = response.data.token;
                return true;
            } else {
                console.log("Unauthorized login");
                return false;
            }
        }).catch(error => {
            console.log(error);
        });
    }

    isLoggedIn = () => {
        let token = localStorage.getItem('token');
        let email = localStorage.getItem('email');
        ApiService.checkAuth(token).then(response => {
            // return 200 / 400
            if (response.status === 200) {
                let data = response.data;
                if (data.token === token && data.email === email) {
                    return true;
                }
            } else {
                console.log('Not logged in');
                return false;
            }
        });
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        // this.setState({
        //     id:             event.target.value,
        //     first:          event.target.value,
        //     last:           event.target.value,
        //     email:          event.target.value,
        //     password:       event.target.value,
        //     phone:          event.target.value,
        //     country:        event.target.value,
        //     reservations:   event.target.value
        // });
    }


}


// const token = axios.create({
//     baseURL: '/api/v1/',
//     timeout: 10000,
//     headers: {
//         'X-Requested-With': 'XMLHttpRequest',
//         'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content,
//         'Authorization': 'Bearer ' + localStorage.getItem('token')
//     }
// });

// componentDidMount() {
//     const tok = 'email:password';
//     const hash = Base64.encode(tok);
//     const Basic = 'Basic ' + hash;
//     axios.get('http://my_url/api/stb', {headers : { 'Authorization' : Basic }})
//         .then(function(response) {
//             console.log(response.data);
//             console.log(response.headers['Authorization']);
//         }).catch(err => console.log(err));
// }export default class User {
