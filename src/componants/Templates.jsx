import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export const Templates = () => {
  return (
  <>
  
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/sarvay">Sarvay</Link>
        
    </nav>
  

    <Outlet/>


  </>
    
  )
}
