import React from 'react'
import './NavItems.css'
import { Link } from 'react-router-dom'

export const NavItems = ({ to, content}) =><li><Link to={to}>{content}</Link></li>
