import React from 'react';
import { Link } from 'react-router-dom';


function NotesDetails() {

  return (
    <>
      <header>
        <section className="container mx-auto flex flex-wrap px-4 lg:px-52 py-5 flex-col md:flex-row items-center">
          <Link to="/note" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-2xl text-Pink">Notes Title Here</span>
          </Link>
          <aside className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <button className="inline-flex items-center bg-white text-black border-2 border-black py-1 px-6 focus:outline-none rounded text-base mt-4 md:mt-0">Edit </button>
            <button className="inline-flex items-center bg-blue text-white border-0 py-1.5 px-6 focus:outline-none rounded text-base mt-4 lg:ml-4 ml-2 md:mt-0">Delete </button>
          </aside>
        </section>
      </header>


      <section className="text-gray-600 body-font">
          <article className="container px-5 py-24 mx-auto">
            <summary className="flex flex-col w-full text-left mb-12">
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Notes Body Starts Here</p>
              <br/>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Motion design is a discipline that applies graphic design principles to filmmaking and video production through use of animation and visual effects. Examples include films, videos, animated text, 
              and web-based animations and apps. Motion design has evolved as a direct result of technology improvements.</p>
              <br/>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Motion design is a discipline that applies graphic design principles to filmmaking and video production through use of animation and visual effects. Examples include films, videos, animated text, and web-based animations and apps. 
                Motion design has evolved as a direct result of technology improvements.</p>
            </summary>

          </article>
      </section>

    </>

  )
}

export default NotesDetails;