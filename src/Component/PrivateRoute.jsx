import { useContext, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { currentUser } from '../App'

const PrivateRoute = () => {
    const[currentLogInUser, setCurrentLogInUser] = useContext(currentUser);
    const location = useLocation();
  return (
    currentLogInUser ? <Outlet /> : <Navigate to='/signUp' replace state={{from:location}} />
  )
}

export default PrivateRoute