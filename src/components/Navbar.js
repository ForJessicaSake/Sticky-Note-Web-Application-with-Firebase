import { Link } from "react-router-dom";
import { useState } from 'react'

const Navbar=()=>{

   const [toggle, setToggle] = useState(false)

   const handleToggle = () => {
      setToggle(!toggle)
   }

   return (
      <nav id="header" className="w-full py-1 bg-white shadow-lg border-b border-blue-400 z-50">

         <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
            <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block" onClick={handleToggle}>
               <svg className="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <title>menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
               </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            {toggle ? <div className=" absolute top-20 left-0 flex h-htt w-full justify-center text-sm bg-black text-white font-bold z-50">
               <nav>

                  <ul className=" flex flex-col h-96 mt-16 mb-10 items-center md:flex w-96 justify-between text-base text-blue-600 pt-4 md:pt-0">
                     <li><Link to='/'>Home</Link></li>
                     <li><Link to='/create'>Create</Link></li>
                     <li><Link to='/note'>Note</Link></li>
                  </ul>
               </nav>
            </div> : <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1">
               <nav>
                  <ul className="md:flex items-center w-96 justify-between text-base text-blue-600 pt-4 md:pt-0">
                     <li><Link to='/'>Home</Link></li>
                     <li><Link to='/create'>Create</Link></li>
                     <li><Link to='/note'>Note</Link></li>
                  </ul>
               </nav>
            </div>}


            <div className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
               <div className="auth flex items-center w-full md:w-full">
                  <button className="bg-transparent text-gray-800  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700"><Link to='/login'>Log In</Link></button>
                  <button className="bg-blue-600 text-gray-200  p-2 rounded  hover:bg-blue-500 hover:text-gray-100"><Link to='/signup'>Sign Up</Link></button>
               </div>
            </div>
         </div>
      </nav>

   )
}

export default Navbar