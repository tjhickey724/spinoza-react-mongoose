import React, { useContext, useState } from 'react';
import { Context as AuthContext } from '../../context/AuthContextMongo';



const LoginM = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    signin({email, password})
}

const emailHandler =(event) => {
  event.preventDefault();
  setEmail(event.target.value);
}

const passwordHandler =(event) => {
  event.preventDefault();
  setPassword(event.target.value);
}
    return (
    <form onSubmit={onSubmitHandler}>
          <input type="text" onChange={emailHandler} />
          <input type="text" onChange={passwordHandler} />
        
        <input type="submit" value="提交" />
      </form>
  );
};


export default LoginM;