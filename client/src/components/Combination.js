import React, { useState } from "react";
import Container from './Container';
import Pyodide from './PyodideJenna';
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from "react-router-dom"
import NavBar from "./NavBar";

const pythonString = 'print()'

export default function Combination() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/")
    } catch {
      setError("Failed to log out")
    }
  }
    return (
        <>
            <NavBar/>
            <Container/>
            <Pyodide pythonCode={pythonString}/>
        </>
    )
}