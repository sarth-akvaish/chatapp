import React from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/signup/Signup'
import { Navigate,Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext';


const App = () => {

  const { authUser } = useAuthContext();

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
