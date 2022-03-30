import React, { useEffect, useState, Link} from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase/config";
import '../css/Login.css';
import loginImg from "../login.jpeg";
import EmailLinkLogin from "./EmailLinkLogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailLink, changeToEmailLink] = useState(false);

  const history = useHistory();

  const changeSigninMethod = () => {
    if(isEmailLink){
      changeToEmailLink(false);
    }else{
      changeToEmailLink(true);
    }
  }

  const signInWithEmailAndPassword = async (email, password) => {
      try {
        await auth.signInWithEmailAndPassword(email, password);
        history.push('/home')
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
  };

  const emailPassword = (
    <div className="login">

      <div className="login__container"> 
        <div className="image">
          <img src={loginImg} />
        </div> 
        <div className="form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="login__textBox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login__textBox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
        </div>
      </div>

      <div className="footer">
        <button
          className="login__btn"
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Sign In
        </button>
      </div>

    </div>
  )

  const emailLink = (
    <EmailLinkLogin></EmailLinkLogin>
  )

  return (
    <div className="login_page">

      <div className="background">
        {isEmailLink ? emailLink : emailPassword}

        <div className="footer2">
          <div className="footer2_container">
            {isEmailLink ? 'Already registered?' : 'Still no account?'}
            <button 
              className="login__btn2" 
              onClick={changeSigninMethod}>
            {isEmailLink ? 'Sign In' : 'Sign Up'}
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Login;