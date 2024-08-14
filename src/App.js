import React, { useEffect } from 'react'
import './App.css'
import Router from './Router/Router'
import { useAuth } from './contexts/AuthContext';

export default function  App() {
  const {login} = useAuth()


  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      if(parsedUserData && parsedUserData.userId)
      login()
    }
  }, [login]);


  return (
    <Router />
  )
}
