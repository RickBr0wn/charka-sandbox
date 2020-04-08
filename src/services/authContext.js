import React, { createContext, useContext, useState, useEffect } from 'react'
import Auth from './authService'

const AuthContext = createContext()

function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    Auth.isAuthenticated()
      .then((data) => {
        setIsAuthenticated(data.isAuthenticated)
        // This next line is used to help developer experience
        // setIsAuthenticated(true)
        setUser(data.user)
        setIsLoaded(true)
      })
      .catch((err) => {
        console.log(err)
        throw new Error(
          'There has been an error collecting the authentication data.',
          err
        )
      })
  }, [])

  return !isLoaded ? (
    <h1>Loading..</h1>
  ) : (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuthContext() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthProvider')
  }
  return context
}

export { AuthProvider, useAuthContext }
