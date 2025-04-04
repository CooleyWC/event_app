import "./index.css"
import React, {useEffect, useState, useCallback} from "react";
import NavBar from "./components/navbar/NavBar";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Layout from "./Layout";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/forms/Login";
import SignUp from "./components/forms/SignUp";
import {useAuth} from './components/context/AuthProvider'
import {useEvents} from './components/context/EventsContext'
import EventDetail from "./components/pages/EventDetail";


function App() {

  const {login, logout, user, update} = useAuth()
  const [sideOpen, setSideOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  // const [allEvents, setAllEvents] = useState([])
  const {allEvents, setAllEvents} = useEvents()
  

  const [darkMode, setDarkMode] = useState(()=>{
    return localStorage.getItem('darkMode') === 'true';
  })

  const toggleDarkMode = ()=>{
    setDarkMode((prevMode)=>{
      const newMode = !prevMode
      localStorage.setItem('darkMode', newMode)
      return newMode
    })
  }

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

  const closeDrawer = ()=>{
    setSideOpen(false)
  }

  const toggleProfileDrawer = ()=>{
    setProfileOpen(!profileOpen)
  }

  const handleProcessTicket = async (eventData, ticketPrice) =>{
    try {
        const response = await fetch('/api/process_ticket', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                user_id: user.id,
                event_id: eventData.id,
                start_time: eventData.start_time,
                end_time: eventData.end_time,
                price: ticketPrice
                }) 
        })
        const result = await response.json()
        if(result.conflict){
            alert(result.message)
            return
        } 
        console.log('approved', result.message)

        const eventsAfterTicketProcess = allEvents.map((event)=>{
          if(event.id === result.event.id){
            const updatedTotal = result.event.current_total
            event.current_total = updatedTotal
            return event
          } else {
            return event
          }
        })

        setAllEvents(eventsAfterTicketProcess)

        await checkUser()

    } catch (error) {
        console.error('there was a problem', error)
    }
}

const handleTicketDelete = (ticketID)=>{
  console.log('handleTicketCalled')
  fetch(`/api/ticket_by_id/${ticketID}`, {
    method: 'DELETE'
  })
  .then((res)=>{
    if(res.ok){
      console.log('handleDelete success step 1', res)
      return res.json()
      
    } else {
      console.log('oh no')
    }
  })
  .then((result)=>{
    console.log('step 2 result:', result)
    const eventsAfterTicketProcess = allEvents.map((event)=>{
      if(event.id === result.event.id){
        const updatedTotal = result.event.current_total
        event.current_total = updatedTotal
        return event
      } else {
        return event
      }
    })

    setAllEvents(eventsAfterTicketProcess)

    checkUser()
  })
  .catch((error)=>{
    console.error(error.error)
  })
}

// handle new event

const handleNewEvent = (newEvent)=>{

  setAllEvents((prevEventData)=>{
    const updatedEvents = [...prevEventData, newEvent]
    return updatedEvents
  })
  update((prevUserData)=>({
    ...prevUserData,
    created_events: [...(prevUserData?.created_events || []), newEvent]
  }))
}


  return (
    <div className={`${darkMode && "dark"}`}>
    <Router>
      <NavBar 
        setSideOpen={setSideOpen} 
        sideOpen={sideOpen} 
        toggleSideDrawer={toggleSideDrawer}
        toggleDarkMode={toggleDarkMode}
        toggleProfileDrawer={toggleProfileDrawer}
        profileOpen={profileOpen}
        darkMode={darkMode }
        />
      <Routes>
        <Route path='/' errorElement={<ErrorPage/>} element={<Layout user={user}/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/dashboard' element={
          <Dashboard 
            sideOpen={sideOpen} 
            toggleSideDrawer={toggleSideDrawer}
            toggleProfileDrawer={toggleProfileDrawer}
            profileOpen={profileOpen}
            closeDrawer={closeDrawer}
            allEvents={allEvents}
            handleNewEvent={handleNewEvent}
          />} />
        <Route path='/dashboard/:section' element={
          <Dashboard 
            sideOpen={sideOpen} 
            closeDrawer={closeDrawer} 
            toggleSideDrawer={toggleSideDrawer}
            toggleProfileDrawer={toggleProfileDrawer}
            profileOpen={profileOpen}
            allEvents={allEvents}
            handleNewEvent={handleNewEvent}
            // handleTicketDelete={handleTicketDelete}
            />} />
        <Route path='/dashboard/event/:eventid' element={
          <EventDetail 
            handleProcessTicket={handleProcessTicket}
            handleTicketDelete={handleTicketDelete}
            allEvents={allEvents}
          />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
