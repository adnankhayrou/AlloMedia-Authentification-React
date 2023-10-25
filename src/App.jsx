import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Register from './components/register'
import Login from './components/login'
import ForgotPassword from './components/ForgotPassword'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
