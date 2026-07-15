import React from 'react'
import Contact from '../pages/Contact.jsx'
import { Outlet } from 'react-router-dom'

const ContactLayout = () => {
  return (
    <div>
        <Contact/>
    </div>
  )
}

export default ContactLayout