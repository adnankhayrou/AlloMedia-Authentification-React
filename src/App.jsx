import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Register from './components/register'
import Login from './components/login'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
import Cookies from 'js-cookie';

function App() {
  const isAuthenticated = !!Cookies.get('jwtToken'); 

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path='/register' element={isAuthenticated ? <Navigate to="/" /> : <Register />} />
        <Route path='/login' element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
        <Route path='/forgotPassword' element={ <ForgotPassword />} />
        <Route path='/resetPassword/:token' element={ <ResetPassword /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App