import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1/";

// connect React with Spring Boot (like AJAX)
let accessToken = localStorage.getItem('token'); // change


// only to send token back and forth
// axios.interceptors.request.use(
//     config => {
//         config.headers.authorization = `Bearer ${accessToken}`
//         return config;
//     }, error => {
//         return Promise.reject(error);
//     }
// )


// checks for token first
const authAxios = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
})


let config = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
        "Access-Control-Allow-Headers": "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization"
    }
}


class ApiService {


    // before login
    async fetchUserByEmail(Email) {
        return axios.get(API_BASE_URL + '/' + Email);
    }

    // after login
    authFetchUserByEmail(Email) {
        return authAxios.post(API_BASE_URL + '/' + Email);
    };

    async awaitLoginRequest(data) {
        try {
            return await axios.post(API_BASE_URL + 'login' + data)
        } catch (error) {
            console.log(error);
        }
    }

    async confirmToken(password, token, auth_token) {
        return await axios.post(API_BASE_URL + 'confirm', {
            password: password,
            token: token,
            auth_token: auth_token
        }, config
        );
    }

    sendLoginRequest(data) {
        return axios.post(API_BASE_URL + 'login' + data);
    }

    logoutRequest(data) {
        return axios.post(API_BASE_URL + 'logout' + data);
    }

    checkAuth(token) {
        return axios.post(API_BASE_URL + 'auth' + token);
    }

    async deleteUser(token) {
        return authAxios.delete(API_BASE_URL + '/' + token);
    }

    async loadUser(user) {
        return authAxios.get(API_BASE_URL, user.id);
    }

    async editUser(user) {
        return authAxios.put(API_BASE_URL + 'account', user);
    }

    // for now use this one.
    async registerUser(firstname, lastname, email, password) {
        return axios.post(API_BASE_URL + 'registration', {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            }, config
        );
    }

    async sendForgotRequest(email) {
        return axios.post(API_BASE_URL + 'forgot', {email: email}, config);
    }

    async accountDetails(auth_token) {
        return axios.post(API_BASE_URL + 'account', {auth_token: auth_token}, config);
    }
}

export default new ApiService();