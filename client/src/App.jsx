import "./index.css"
import NavBar from "./components/navbar/NavBar";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Layout from "./Layout";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/forms/Login";
import {useAuth} from './components/context/AuthProvider'


function App() {


  const {login, user, update} = useAuth()

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

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' errorElement={<ErrorPage/>} element={<Layout />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </Router>
  )
}

export default App
