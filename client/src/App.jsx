import "./index.css"
import React, {useEffect, useState, useCallback} from "react";
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
  // const handleDropdown = useCallback(()=>{
  //   setDropdownOpen((prev)=>!prev)
  // }, [])
  // console.log('app', typeof handleDropdown)

 

  return (
    <Router>
      <NavBar 
        setSideOpen={setSideOpen} 
        sideOpen={sideOpen} 
        toggleSideDrawer={toggleSideDrawer}
        // handleDropdown={handleDropdown}
        />
      <Routes>
        <Route path='/' errorElement={<ErrorPage/>} element={<Layout />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/:section' element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
