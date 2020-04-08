import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { ThemeProvider, CSSReset, theme } from '@chakra-ui/core'
import { AuthProvider } from './services/authContext'

ReactDOM.render(
  <AuthProvider>
    <ThemeProvider theme={theme}>
      <CSSReset />
      <App />
    </ThemeProvider>
  </AuthProvider>,
  document.getElementById('root')
)
