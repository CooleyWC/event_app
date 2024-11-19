import "./index.css"
import NavBar from "./components/navbar/NavBar";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Layout from "./components/Layout";


function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' errorElement={<ErrorPage/>} element={<Layout />}/>
      </Routes>
    </Router>
  )
}

export default App
