import React, { useState, useMemo } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
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
import Account from './components/Account/Account';
import Confirm from './components/Account/Confirm';
//
import SignupPagem from './pagesm/signup';
import LoginPagem from './pagesm/login';
import ForgotPagem from './pagesm/forgot';
import Accountm from './components/AccountMatt/Account';
import Confirmm from './components/AccountMatt/Confirm';

function App() {
  const [user, setUser] = useState(localStorage.getItem('email'));
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={value}>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signup' component={SignupPage} exact />
          <Route path='/forgot' component={ForgotPage} exact />
          <Route path='/book' component={BookPage} exact />
          {/* <Route path='/login' component={LoginPage} exact /> */}
          <Switch path='/login' exact>
            {user ? <Redirect to='/' /> : <LoginPage />}
          </Switch>
          <Route path='/account' component={Account} exact />
          <Route path='/confirm' component={Confirm} exact />
          {''}
          <Route path='/signupm' component={SignupPagem} exact />
          <Route path='/forgotm' component={ForgotPagem} exact />
          <Route path='/loginm' component={LoginPagem} exact />
          <Route path='/accountm' component={Accountm} exact />
          <Route path='/confirmm' component={Confirmm} exact />
          {''}
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
