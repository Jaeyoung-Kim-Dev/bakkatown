import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import BookPage from './pages/book';
import PaymentPage from './pages/payment';
// import SigninPage from './pages/signin';
import NotFoundPage from './pages/notFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/book' component={BookPage} exact />
        <Route path='/payment' component={PaymentPage} exact />
        {/* <Route path='/signin' component={SigninPage} exact /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
