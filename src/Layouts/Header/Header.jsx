import React from 'react'
import { Navbar } from "../../components/Navbar/Navbar"
import './Header.css'

export const Header = () => {
  return (
    <header className="header">
    <h1 className='Titlle-header'>Practicas Hooks</h1>
    <Navbar/>
    <button className='btn-header'>UseState-Listar Tareas</button>
    </header>
  )
}
