import React from 'react'
import { NavItems } from '../NavItems/NavItems'
import './Navbar.css'


export const Navbar = () => {
  return (
     <div className='NavItems'>
    <NavItems to = "/" content= 'Hello'/>
    <NavItems to = "/Saludo" content= 'Saludar'/>
    <NavItems to = "/Calculadora" content= 'Calculadora'/>
    <NavItems to = "/Random" content= 'Random Color'/>
    <NavItems to = "/Form" content= 'Form'/>
    <NavItems to = "/Task" content= 'Task'/>
    </div>
  )
}

