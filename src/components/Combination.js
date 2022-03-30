import React, { useState } from "react";
import Container from './Container';
import Pyodide from './PyodideJenna';
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from "react-router-dom"
import NavBar from "./NavBar";
import AuthService from "../services/auth.service";
const pythonString = 'print()'

export default function Combination() {
  const currentUser = AuthService.getCurrentUser();
  const [error, setError] = useState("")
  // const { currentUser, logout } = useAuth();
  const history = useHistory()

  // async function handleLogout() {
  //   setError("")

  //   try {
  //     await logout()
  //     history.push("/")
  //   } catch {
  //     setError("Failed to log out")
  //   }
  // }
    return (
        <>
            
            <Container/>
            <Pyodide pythonCode={pythonString}/>
        </>
    )
}