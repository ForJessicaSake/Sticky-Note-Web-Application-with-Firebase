import { useState, useEffect, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doc, getDoc, deleteDoc, setDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import db from "../components/Firebase";
import Sidebar from "../components/Sidebar";
import { motion } from 'framer-motion';

function NotesDetails() {
  //creating a state for the getdoc functionality
  const [note, setNote] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  //creating the query functionality

  //memoizing the get doc once function

  const memoedFunction = useCallback(() => {
    const userData = async () => {
      const docRef = doc(db, "notes", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setNote(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    userData();
  }, [id]);

  useEffect(() => {
    memoedFunction();
  }, [memoedFunction]);

  //creating the Edit functionality

  const handleEdit = async (id) => {
    const title = prompt("Enter Title");
    const body = prompt("Enter changes");
    const docRef = doc(db, "notes", id);
    const payload = { title: title, body: body };
    const data = setDoc(docRef, payload);
    setNote(data);
  };

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
      <section>
        <section className="container-two lg:flex lg:flex-row flex-col lg:px-12 px-4">
          <Sidebar text="Add Note" url="/create" />
          <main className="lg:mx-12 lg:my-20 m-auto lg:p-2 my-12">
            <article className="container px-5 text-left py-2 mx-auto">
              <summary className="flex flex-col w-full mb-10">
                <p className="lg:w-2/3 lg:mx-8 mx-auto font-bold mb-0 text-purple text-xl sm:text-2xl">{note.title}</p>
                <br />
                <p className="lg:w-2/3 lg:mx-8 mx-auto leading-relaxed text-base">{note.body}</p>
                <br />
                <div className="flex flex-wrap lg:mx-8 mx-0 flex-row mt-6">
                  <button onClick={handleEdit} className="text-purple py-1 px-4 focus:outline-none border-2 border-purple hover:bg-indigo-600 hover:border-0 hover:outline-none hover:text-white rounded text-base">Edit{" "}</button>
                  <motion.button onClick={handleDelete} whileHover={{ scale: 1.1, boxShadow: "0px 0px 5px rgba(99 102 241)" }} className="ml-4 text-purple py-1 px-4 focus:outline-none rounded text-base">{" "} Delete{" "}</motion.button>
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
    </>
  );
}

export default NotesDetails;
