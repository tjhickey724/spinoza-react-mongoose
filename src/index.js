import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Insert CSS imports here
import './index.css';
import Login from './components/Login';

// Restore user auth to last semester version which prevents user from changing url to access main function
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Combination from './components/Combination';
import Home from './components/Home';


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
        <PrivateRoute path='/home' component={Home}></PrivateRoute>
        <PrivateRoute path='/ide' component={Combination}>
          {/* <Container/>
          <Pyodide pythonCode={pythonString} /> */}
        </PrivateRoute>
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

// Connect with mongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'Spinoza',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) : 
    console.log('Connected to Spinoza database'));

// Schema for clases
const ClassSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  semester: {
    type: String,
    required: true,
  },
  createTime: {
    type: Date,
    default:Date.now
  }
});

const Class = mongoose.model('classes', ClassSchema);
Class.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/home", (req, resp) => {

    resp.send("App is Working");
    // You can check backend is working or not by 
    // entering http://loacalhost:5000
    
    // If you see App is working means
    // backend working properly
});

app.listen(5000);