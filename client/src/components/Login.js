import { useState } from 'react';
import {useValue} from './ValueContext';
import NavBar from "./NavBar"
import PythonIDE from './PythonIDE'

const loginToServer = async  (username,password,setCurrentValue) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          { username:username, passphrase:password }),
      };
      const response = 
        await fetch('/spinoza/login', 
                    requestOptions)
      const responsedata= await response.json()
      console.dir(responsedata)
      setCurrentValue({userId:responsedata.userId})
      return (responsedata)
}

export default function Login() {
    const [username,setUsername] =useState("")
    const [password,setPassword] = useState("")
    const {currentValue,setCurrentValue} = useValue();
   
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${username} ${password}`)
        const result = loginToServer(username,password,setCurrentValue)
        console.dir(result)
        if (result.success){
            setCurrentValue({userId:result.userId})
        }else {
            // do nothing...
        }
    }
    return(
        <>
            <NavBar/>
            userId: {currentValue.userId}<br/>
            <form onSubmit={handleSubmit}>
                Username:
                <input
                    type="text"
                    onChange={e => setUsername(e.target.value)}
                />
                <br/>
                Password:
                <input
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <br/>
                <input type="submit" value="log in"/>
           </form>
   
        </>       
    )
}