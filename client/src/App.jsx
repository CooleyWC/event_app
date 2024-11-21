import "./index.css"
import React, {useEffect, useState} from "react";
import NavBar from "./components/navbar/NavBar";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Layout from "./Layout";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/forms/Login";
import {useAuth} from './components/context/AuthProvider'


function App() {


  const {login, logout, user, update} = useAuth()

  // for side drawer toggle
  const [sideOpen, setSideOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(()=>{
    checkUser()
  }, [])
  
  const checkUser = async () =>{
    try{ 
      const res = await fetch('/api/check_session')
      const userData = await res.json()
      if(res.ok){
        login(userData)
      } else {
        logout()
      }
    } catch (error) {
      console.error('Error - try logging in again', error.message)
    }
  }

  const toggleSideDrawer = ()=>{
    setSideOpen(!sideOpen)
  }
  const handleDropDown = ()=>{
    setDropdownOpen(!dropdownOpen)
  }

 

  return (
    <Router>
      <NavBar 
        setSideOpen={setSideOpen} 
        sideOpen={sideOpen} 
        toggleSideDrawer={toggleSideDrawer}
        handleDropDown={handleDropDown}
        />
      <Routes>
        <Route path='/' errorElement={<ErrorPage/>} element={<Layout />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard dropdownOpen={dropdownOpen}/>} />
      </Routes>
    </Router>
  )
}

export default App
