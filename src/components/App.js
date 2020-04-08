import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Login from './Login'
import Private from './Private'
import SignUp from './SignUp'
import { useAuthContext } from '../services/authContext'

function App() {
  const {
    user,
    setUser,
    isAuthenticated,
    setIsAuthenticated,
  } = useAuthContext()

  console.log(user)

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/private" component={Private} />
      <Route path="/signup" component={SignUp} />
    </Router>
  )
}

export default App
