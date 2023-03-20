import React from 'react'
/* import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
*/
import { NavLink } from 'react-router-dom'

function LayoutsNavbar() {
  // const { data, apiLogout } = useAuth()

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">FBI Most Wanted</span>
      </div>
      <div className="block lg:hidden">
        <button type="button" className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <NavLink to="/index/topten" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Ten Most Wanted</NavLink>
          <NavLink to="/index/cei" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">CEI</NavLink>
          <NavLink to="/index/counterintelligence" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Counterintelligence</NavLink>
          <NavLink to="/index/cyber" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Cyber</NavLink>
          <NavLink to="/index/kidnapmissing" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Kidnappings & Missing Persons</NavLink>
          <NavLink to="/index/seekinginfo" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Seeking Information</NavLink>
          <NavLink to="/index/vicap" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">ViCAP</NavLink>
          <NavLink to="/index/additional" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Additional violent crimes</NavLink>

        </div>
      </div>
    </nav>
  )
}

export default LayoutsNavbar

// why not   <NavLink to="/index/:topten"
/*  <NavLink href="/index/:additional" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Additional violent crimes</NavLink>

          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Docs
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Examples
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Blog
          </a>
          */
