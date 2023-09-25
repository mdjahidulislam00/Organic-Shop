import { useContext, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { currentUser } from '../App'
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const PrivateRoute = () => {
  const[currentLogInUser, setCurrentLogInUser] = useContext(currentUser);
  const location = useLocation();
  const localUser = localStorage.getItem('currentLogInUserEmail');
  return (
    
     localUser ? <Outlet /> : <Navigate to='/signUp' replace state={{from:location}} />
  )
}

export default PrivateRoute