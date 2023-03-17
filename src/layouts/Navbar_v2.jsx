import React, { useState } from 'react'
/* import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
*/
import { useNavigate } from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'

// import useUid from '@/hooks/useUid'

function LayoutsNavbar() {
  // const { data, apiLogout } = useAuth()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const handleFilterSubmit = (e) => {
    console.log(e.target.value)
    // find uid from name
    // const uid = useUid(e.target.value)
    // navigate(`/index/cyber/${e.target.value}`)
    navigate(`/show/${e.target.value}`)
    //
    // display 1 result with e.target.value
    //
  }

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 bg-teal-500">

      <div className="block lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? 'hidden' : 'block'}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? 'block' : 'hidden'}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="text-sm lg:flex-grow">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">FBI Most Wanted</span>
          </div>
          <NavLink to="/wanted/topten" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4">
            Ten Most Wanted
          </NavLink>
          <NavLink to="/wanted/cei" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4">
            CEI
          </NavLink>
          <NavLink to="/wanted/counterintelligence" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4">
            Counterintelligence
          </NavLink>
          <NavLink to="/wanted/cyber" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4">
            Cyber
          </NavLink>
          <NavLink to="/wanted/kidnapmissing" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4">
            Kidnappings & Missing Persons
          </NavLink>
          <NavLink to="/wanted/seekinginfo" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4">
            Seeking Information
          </NavLink>
          <NavLink to="/wanted/vicap" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4">
            ViCAP
          </NavLink>
          <NavLink to="/wanted/additional" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4">
            Additional violent crimes
          </NavLink>
        </div>
        <div>
          <div className="wrapper">
            <input type="text" onChange={handleFilterSubmit} id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            <button type="submit" onClick={() => navigate('/index/cei')} className="float-right absolute"><i className="fa fa-search" />ER</button>
            <Link to="/show/:id">Click Me</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default LayoutsNavbar

/*
<!--<div className="flex items-center text-center flex-shrink-0 text-white">
        <p>FBI Most Wanted</p>
      </div> -->

 <NavLink to="/index/topten" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Ten Most Wanted</NavLink>
          <NavLink to="/index/cei" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">CEI</NavLink>
          <NavLink to="/index/counterintelligence" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Counterintelligence</NavLink>
          <NavLink to="/index/cyber" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Cyber</NavLink>
          <NavLink to="/index/kidnapmissing" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Kidnappings & Missing Persons</NavLink>
          <NavLink to="/index/seekinginfo" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Seeking Information</NavLink>
          <NavLink to="/index/vicap" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">ViCAP</NavLink>
          <NavLink to="/index/additional" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Additional violent crimes</NavLink>

          */
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
