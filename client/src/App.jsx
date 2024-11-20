import "./index.css"
import NavBar from "./components/navbar/NavBar";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Layout from "./Layout";
import Dashboard from "./components/pages/Dashboard";


function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' errorElement={<ErrorPage/>} element={<Layout />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </Router>
  )
}

export default App
