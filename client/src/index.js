import React from 'react';
import ReactDOM from 'react-dom';
//import reportWebVitals from './reportWebVitals';
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ValueProvider from './components/ValueContext';
 
// Insert CSS imports here
import './index.css';

//import PythonIDE from './components/PythonIDE'
import Home from './components/Home';
import About from './components/About'

const data =
    {userId:"6265a168afa2c03242dcbc01",
   }

// const pythonString = 'print()';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <script src={"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.js"}/>
    </Helmet>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <ValueProvider value={data}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/about' component={About}></Route>
        </Switch>
      </Router>
    </ValueProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
