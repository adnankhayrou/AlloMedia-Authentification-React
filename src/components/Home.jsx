// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useLocation } from "react-router-dom";
import NavBar from './NavBar'


const Home = () => {
  const location = useLocation();
  const user = location.state?.user;

  return (
    <div>
      <NavBar/>
      <div>
          {user && (
            <div className="bg-green-100 border border-green-400 text-green-700 fw-bold px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">Welcome {user.name}, Your Role is {user.role.name}</span> 
            </div>
          )}
        </div>
    </div>
  )
}

export default Home