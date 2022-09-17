import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <section className="">
      <header className="container mx-auto flex flex-wrap px-4 lg:px-52 py-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex font-semibold items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-2xl text-purple">Dockett</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 cursor-pointer">Home</Link>
          <Link to="/note" className="mr-5 cursor-pointer">Notes</Link>
          <Link to="/create" className="mr-5 cursor-pointer">Create</Link>
        </nav>
        <Link to="/signup"><button className="inline-flex items-center bg-white text-black border-2 border-black py-1 px-5 focus:outline-none rounded-full text-base mt-4 md:mt-0">Sign Up </button></Link>
        <Link to="/login"><button className="inline-flex items-center bg-blue text-white border-0 py-2 px-5 focus:outline-none rounded-full text-base mt-4 lg:ml-4 ml-0 md:mt-0" >Log In</button></Link>
      </header>
    </section>


  )
}

export default Navbar