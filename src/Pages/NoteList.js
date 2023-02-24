import { useContext } from "react";
import { stateContext } from "../App";
import { Link  } from "react-router-dom";
import { UseAuth } from "../Utils/Firebase";
import { ImUserCheck } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import Feed from "../components/Loading/Feed";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";



function NoteList() {
  
  //importing the created context global variables
  const { data, loading } = useContext(stateContext);
  
  //getting current user
  const currentUser = UseAuth();

  return (
    <main className="container flex m-4 text-secondary">  
      <section>
        <Sidebar text="Add Note" url="/create" />
      </section>

      <section className="container-two flex flex-col align-center">
        <div className="hidden xxs:block xms:block xxs:w-wz w-screen">
          <Navbar className="w-full" />
        </div>

        <div className="justify-between xxs:w-full xms:w-wt lgs:w-w mt-6 xms:hidden xxs:hidden">
          <Link to="/">
            {" "}
            <h1 className="text-md hidden font-bold text-blue mb-16 smm:text-2xl  md:hidden xxs:block xms:block xxs:text-sm">
              Dockett
            </h1>
          </Link>

          <p className="text-secondary text-xs w-96 smm:w-96 lgs:w-wt xxs:w-72 xxs:ml-10 lgs:ml-2 xms:w-96 flex justify-between smm:text-sm">
            {`${currentUser?.email}`}
            <span className="text-lg mr-12">
              <ImUserCheck />
            </span>
          </p>
        </div>

        <section className="bg-primary flex flex-col rounded-2xl p-2 mt-14 xxs:mt-4 xms:mt-4 ml-4">
          <h1 className="text-md lgs:text-xl smm:text-xl xms:text-xl font-bold">
            Recent Folders
          </h1>

          <header className="flex justify-between mt-6  text-sm">
            <p className="xms:text-md lgs:text-md smm:text-sm">
              What are we writing today?    

             <Link to ='/create' className="hidden xxs:block xms:block">  
             <button
                  className="mt-4 animate-bounce text-blue py-1 px-4 focus:outline-none border bg-white border-white hover:bg-white hover:border-0 hover:outline-none hover:text-Pink rounded-lg text-base "
              >
                Add Note
              </button>
              </Link>
              
            </p>
          </header>

          <section className="  grid grid-cols-3 place-content-center xms:gap-4 xxs:gap-4 smm:gap-14 gap-20 xxs:flex xxs:flex-col xms:grid xms:grid-cols-2 smm:grid-cols-2 lgs:grid-cols-2 ">
            {loading && <Feed />}
            {data.map((notes) => (
              <div
                className="hover:bg-pink hover:border-0 hover:outline-none hover:text-white first-of-type:bg-Yellow last-of-type:bg-Yellow odd:bg-blue even:bg-slate-50 mt-6 rounded-3xl w-72 h-72"
                key={notes.id}
              >
                <section className=" p-8 text-sm tracking-wide ">
                  <h3 className="flex justify-between items-center align-middle font-semibold text-md">
                    {notes.title}
                    <Link to={`/note/${notes.id}`}>
                      <span className="text-secondary font-bold">
                        <FaEdit />
                      </span>
                    </Link>
                  </h3>
                  <p className="text-xs mt-8">{notes.body}</p>
                </section>
              </div>
            ))}
          </section>
        </section>
      </section>  
    </main>
  );
}

export default NoteList;
