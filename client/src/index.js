import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// Insert Component imports here
// import App from './components/App';
// import PyIDE from './components/pyodide'
// import Pyodide from './components/PyodideAll';

// Note: imports changed based on Jenna's tests :)
import Container from './components/Container';
import Pyodide from './components/PyodideJenna';



// Insert CSS imports here
import './index.css';
import Login from './components/Login';
import EmailLinkLogin from './components/EmailLinkLogin';

// Restore user auth to last semester version which prevents user from changing url to access main function
// import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Combination from './components/Combination';

import LoginM from './components/Screens/LoginM';
import SignupM from './components/Screens/SignupM';
import { Provider as AuthProvider } from './context/AuthContextMongo';

const pythonString = 'print()';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <script src={'https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js'} />
      <script src="testpy_jenna.js"></script>
    </Helmet>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <Router>
      <AuthProvider>
      <Switch>
        <Route exact path = '/'>
          <Login></Login>
        </Route>

        <Route exact path = '/login'>
          <LoginM></LoginM>
        </Route>

        <Route exact path = '/signup'>
          <SignupM></SignupM>
        </Route>

        {/* <PrivateRoute path='/home' component={Home}></PrivateRoute>
        <PrivateRoute path='/ide' component={Combination}>
          {/* <Container/>
          <Pyodide pythonCode={pythonString} /> */}
        {/* </PrivateRoute> */}
      </Switch>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
