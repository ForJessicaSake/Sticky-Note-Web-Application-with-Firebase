import { useState, useEffect, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doc, getDoc, deleteDoc, setDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import db from "../Utils/Firebase";
import Sidebar from "../components/Sidebar";
import Navbar from '../components/Navbar'
import { motion } from "framer-motion";

//creating the edit component
export const Editing = ({ title, body, setNote, handleEdit }) => {
  return (
    <form className="flex flex-col mt-20 items-center">
      <input
        className="border-2 w-w h-8 mr-2 text-sm rounded-xl p-4 xms:w-96 smm:w-wt lgs:w-w xxs:w-64"
        type="text"
        maxLength="15"
        value={title}
        onChange={(e) => {
          setNote((prev) => ({ ...prev, title: e.target.value }));
        }}
      />
      <input />
      <textarea
        className="border-2 w-w h-h mr-2 mt-16 xxs:mt-8 xms:w-96 smm:w-wt lgs:w-w xxs:w-64 xxs:h-96"
        type="text"
        maxLength="200"
        value={body}
        onChange={(e) => {
          setNote((prev) => ({ ...prev, body: e.target.value }));
        }}
      />
      <textarea />
      <motion.button
        onClick={handleEdit}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 5px rgba(99 102 241)" }}
        className="mt-10 bg-purple w-48 p-4 text-white font-bold focus:outline-none rounded text-base"
      >
        Save
      </motion.button>
    </form>
  );
};

function NotesDetails() {
  //creating a state for the getdoc functionality
  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  //creating the edit functionality
  const [edit, setEdit] = useState(false);

  const handleEdit = (e) => {
    e.preventDefault();

    const docRef = doc(db, "notes", id);
    const payload = { title: note.title, body: note.body };

    const data = setDoc(docRef, payload, {
      merge: true
    });

    setNote(data);
    navigate("/note");
  };

  const handleEditComp = () => {
    setEdit(!edit);
  };

  const { id } = useParams();
  const navigate = useNavigate();

  //creating the query functionality

  //memoizing the get doc once function

  const memoedFunction = useCallback(() => {
    const userData = async () => {
      const docRef = doc(db, "notes", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setNote({
          title: docSnap.data().title,
          body: docSnap.data().body,
        });
      } else {
        console.log("No such document!");
      }
    };
    userData();
  }, [id]);

  useEffect(() => {
    memoedFunction();
  }, [memoedFunction]);

  //creating the delete functionality

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "notes", id));
      navigate("/note");
    } catch (err) {
      toast.info("an error occured", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    navigate("/note");
  };

  return (
    <>
      {edit ? (
        <Editing
          title={note.title}
          body={note.body}
          handleEdit={handleEdit}
          setNote={setNote}
        />
      ) : (
        <section>
          <div className="hidden xxs:block xms:block xxs:w-screen w-screen">
            <Navbar />
          </div>
          <section className="container-two lg:flex  lg:px-12 mt-6">
            <Sidebar text="Add Note" url="/create" />

       <main className="lg:mx-12 lg:my-20 m-auto lg:p-2 smm:px-12 lgs:px-12 my-12">
              <article className="container px-5 text-left mx-auto">
                <summary className="flex flex-col w-full mb-10">
                  <p className="lg:w-2/3 lg:mx-8 mx-auto font-bold mb-2 text-purple text-xl sm:text-xl">
                    {note.title}
                  </p>
                  <br />
                  <p className="lg:w-12/12 text-sm lg:mx-8 mx-auto leading-relaxed">
                    {note.body}
                  </p>
                  <br />
                  <div className="flex flex-wrap lg:mx-8 mx-0 flex-row mt-6">
                    <button
                      onClick={handleEditComp}
                      className="text-purple py-1 px-4 focus:outline-none border-2 border-purple hover:bg-indigo-600 hover:border-0 hover:outline-none hover:text-white rounded text-base "
                    >
                      Edit{" "}
                    </button>
                    <motion.button
                      onClick={handleDelete}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0px 0px 5px rgba(99 102 241)",
                      }}
                      className="ml-4 text-purple py-1 px-4 focus:outline-none rounded text-base"
                    >
                      Delete
                    </motion.button>
                  </div>
                </summary>
              </article>
            </main>
            
          </section>
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </section>
      )}
    </>
  );
}

export default NotesDetails;
