import React from 'react'
import Nav from './Components/Nav'
import Home from "./Components/Page/Home"
import LogIn from "./Components/Page/LogIn"
import Info from "./Components/Page/Info"
import SignIn from "./Components/Page/SignIn"
import SomeList from "./Components/Page/SomeList"
import { BrowserRouter as Router , Routes, Route  } from 'react-router-dom'




const App = () => {
  return (
    <div>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/info' element={<Info/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/somelist' element={<SomeList/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
