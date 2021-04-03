import React, { useState, useMemo } from 'react';
import './App.css';
import {
  HashRouter as Router, // Used HashRouter to connect to Spring and URL will be like ':8080/#/book'
  // BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { UserContext } from './UserContext';
import Home from './pages';
import BookPage from './pages/book';
import NotFoundPage from './pages/notFound';
import SignupPage from './pages/signup';
import LoginPage from './pages/login';
import ForgotPage from './pages/forgot';
import Account from './pages/account';
import Reservations from './pages/reservations';
import Confirm from './components/Account/Confirm';

const { token, firstName, lastName, email } = localStorage.getItem;
const loggedInUser = {
  token: token,
  firstName: firstName,
  lastName: lastName,
  email: email,
};
console.log({ loggedInUser });

function App() {
  const [user, setUser] = useState(loggedInUser);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={value}>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Switch path='/signup' exact>
            {user.email ? <Redirect to='/' /> : <SignupPage />}
          </Switch>
          <Switch path='/forgot' exact>
            {user.email ? <Redirect to='/' /> : <ForgotPage />}
          </Switch>
          <Switch path='/login' exact>
            {user.email ? <Redirect to='/' /> : <LoginPage />}
          </Switch>
          <Route path='/book' component={BookPage} exact />
          <Switch path='/account' exact>
            {user.email ? <Account /> : <Redirect to='/' />}
          </Switch>
          {/* <Route path='/account' component={Account} exact /> */}
          <Switch path='/reservations' exact>
            {user.email ? <Reservations /> : <Redirect to='/' />}
          </Switch>
          <Route path='/confirm' component={Confirm} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
