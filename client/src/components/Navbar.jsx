import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center gap-10 font-bold text-lg shadow-md py-3">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
    </nav>
  )
}

export default Navbar
