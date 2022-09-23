import { useState, useEffect, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doc, getDoc, deleteDoc, setDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import db from "../components/Firebase";

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
        <header>
          <aside className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <button
              className="inline-flex items-center bg-white text-black border-2 border-black py-1 px-6 focus:outline-none rounded text-base mt-4 md:mt-0"
              onClick={handleEdit}
            >
              Edit{" "}
            </button>
            <button
              className="inline-flex items-center bg-blue text-white border-0 py-1.5 px-6 focus:outline-none rounded text-base mt-4 lg:ml-4 ml-2 md:mt-0"
              onClick={handleDelete}
            >
              {" "}
              Delete{" "}
            </button>
          </aside>
        </header>
        <main>
          <h2>{note.title}</h2>
          <p>{note.body}</p>
        </main>
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
