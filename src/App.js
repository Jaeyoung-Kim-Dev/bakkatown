import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import BookPage from './pages/book';
import LoginPage from './pages/login';
import NotFoundPage from './pages/notFound';
import SignupPage from "./pages/signup";
import ForgotPage from "./pages/forgot";
import Account from "./components/Account/Account";
import Confirm from "./components/Account/Confirm"

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/book' component={BookPage} exact />
                <Route path='/login' component={LoginPage} exact />
                <Route path='/signup' component={SignupPage} exact />
                <Route path='/forgot' component={ForgotPage} exact />
                <Route path='/account' component={Account} exact />
                <Route path='/confirm' component={Confirm} exact />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    );
}

export default App;
