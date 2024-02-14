import React from 'react'
import Login from './pages/Login/Login'
import Signup from './pages/Login/signup/Signup'
import Home from './pages/Login/Home/Home'

const App = () => {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* <Signup /> */}
      <Home />
    </div>
  )
}

export default App
