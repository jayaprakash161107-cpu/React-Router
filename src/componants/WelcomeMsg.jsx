import React from 'react'
import { useParams } from 'react-router-dom'

export const WelcomeMsg = () => {
    const { username } = useParams()
  return (
   
    
   <h1>Welcome {username}</h1>

  )
}


export default WelcomeMsg