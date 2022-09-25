import { useContext } from "react";
import { stateContext } from "../App";
import { Link } from "react-router-dom";
import { UseAuth } from "../components/Firebase";
import { ImUserCheck } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import Feed from "../components/Loading/Feed";
import Sidebar from "../components/Sidebar";

function NoteList() {
  //importing the created context global variables

  const { data, loading } = useContext(stateContext);

  const currentUser = UseAuth();

  return (
    <main className="container flex m-6 text-secondary">
      <section>
        <Sidebar text="Add Note" url="/create" />
      </section>

      <section className="container-two flex flex-col align-center">
        <div className="flex justify-between w-w xms:w-wt lgs:w-w">
          <h1 className="text-xl font-bold mb-10 ml-2 xxs:hidden xms:hidden smm:hidden lgs:hidden">My Notes</h1>
          <p className="text-secondary text-xs w-96 smm:w-96 lgs:w-wt lgs:ml-2 xms:w-96 flex justify-between smm:text-sm">
            {`${currentUser?.email}`}
           <span className="text-lg mr-12"> <ImUserCheck/></span>
          </p>
        </div>

        <section className="bg-primary flex flex-col rounded-2xl p-2">
          <h1 className="text-md lgs:text-2xl smm:text-2xl xms:text-xl font-bold">Recent Folders</h1>

          <header className="flex justify-between mt-6  text-sm">
            <p className="xms:text-lg lgs:text-xl smm:text-lg"> What are we writing today?</p>
          </header>

          <section className=" grid grid-cols-3 place-content-center gap-6 xxs:flex xxs:flex-col xms:grid xms:grid-cols-2 smm:grid-cols-2 lgs:grid-cols-2 ">
            {loading && <Feed />}
            {data.map((notes) => (
              <div
                className="first-of-type:bg-Yellow last-of-type:bg-Yellow odd:bg-blue even:bg-slate-50 mt-6 rounded-3xl w-72 h-72"
                key={notes.id}
              >
                <section className=" p-8 text-sm tracking-wide">
                  <h3 className="flex justify-between items-center align-middle font-semibold text-md">
                    {notes.title}{" "}
                    <Link to={`/note/${notes.id}`}>
                      <span className="text-secondary font-bold">
                        <FaEdit />
                      </span>{" "}
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
