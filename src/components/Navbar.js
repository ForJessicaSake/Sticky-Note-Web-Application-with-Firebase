// import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import { FaBars } from "react-icons/fa";
import { motion } from 'framer-motion';



// const buttonVariants = {
//   hover: {
//     scale: 1.1,
//     boxShadow: "0px 0px 6px #6c56c2",
//   }
// }

function Navbar() {
  // const [toggle, setToggle] = useState(false);
  // const handleToggle = () => {
  //   setToggle(!toggle);
  // }


  return (
    <>
      <header>
        <div className="container mx-auto flex flex-wrap px-5 py-5 lg:px-12 flex-col md:flex-row items-center">
          <p className="flex font-semibold items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-2xl text-purple">Dockett</span>
          </p>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 cursor-pointer hover:text-blue">Home</Link>
            <Link to="/note" className="mr-5 cursor-pointer hover:text-blue">Notes</Link>
            <Link to="/create" className="mr-5 cursor-pointer hover:text-blue">Create</Link>
          </nav>
          <Link to="/signup"><motion.button whileHover={{ scale: 1.1, boxShadow: "0px 0px 5px rgb(55 65 81)" }}  className="inline-flex items-center bg-white border-2 border-black py-1 px-5 focus:outline-none rounded-full text-base mt-4 md:mt-0">Sign Up</motion.button></Link>
          <Link to="/login"><motion.button whileHover={{ scale: 1.1, boxShadow: "0px 0px 5px #6cb5de" }} className="inline-flex items-center bg-blue text-white border-0 py-2 px-6 focus:outline-none rounded-full text-base mt-4 lg:ml-4 ml-0 md:mt-0" >Log In</motion.button></Link>
        </div>
      </header>


    </>
  )
}

export default Navbar