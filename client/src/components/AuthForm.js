import React, { useState } from 'react';


const AuthForm = ({ errorMessage, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
    <input
        onChangeText={setEmail}
        //value={email}
        
        
      />
     
      <input
        
        onChangeText={setPassword}
        //value={password}
       
      />
      {errorMessage ? (
        <h1>{errorMessage}</h1>
      ) : null}
      
        <button
         
          onClick={() => onSubmit({ email, password })}
        />
      
      </div>
    
  );
};


export default AuthForm;
