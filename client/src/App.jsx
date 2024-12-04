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
  const [sideOpen, setSideOpen] = useState(false)
  const [allEvents, setAllEvents] = useState([])

  useEffect(()=>{
    checkUser()
  }, [])

  useEffect(()=>{
    fetch('/api/events')
    .then(res=>res.json())
    .then(data=>{
      setAllEvents(data)
    })
  }, [])

  console.log('events outside', allEvents)
  
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
  
  // not currently used
  const closeDrawer = ()=>{
    setSideOpen(false)
   
  }

  return (
    <Router>
      <NavBar 
        setSideOpen={setSideOpen} 
        sideOpen={sideOpen} 
        toggleSideDrawer={toggleSideDrawer}
        />
      <Routes>
        <Route path='/' errorElement={<ErrorPage/>} element={<Layout />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard' element={
          <Dashboard 
            sideOpen={sideOpen} 
            toggleSideDrawer={toggleSideDrawer}
            closeDrawer={closeDrawer}
            allEvents={allEvents}
          />} />
        <Route path='/dashboard/:section' element={
          <Dashboard 
            sideOpen={sideOpen} 
            closeDrawer={closeDrawer} 
            toggleSideDrawer={toggleSideDrawer}
            allEvents={allEvents}
            />} />
      </Routes>
    </Router>
  )
}

export default App
