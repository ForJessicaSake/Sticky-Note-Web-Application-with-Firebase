import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../components/Sidebar";
import db from "../Utils/Firebase";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { UseAuth } from "../Utils/Firebase";

const Create =()=> {
  //creating two states to keep track of the user's input

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const currentUser = UseAuth();

  //storing the initialized hook to a variable

  const navigate = useNavigate();

  //the add functionality
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const collectionRef = collection(db, "notes");
      const payload = {
        title,
        body,
        time: serverTimestamp(),
        uid: currentUser.uid,
      };
      await addDoc(collectionRef, payload);
      navigate("/note");
    } catch (err) {
      toast.info("Kindly log in", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }
 }


  return (
    <section>
      <div className="hidden xxs:block xms:block xxs:w-screen w-screen">
        <Navbar />
      </div>
      <main className="container flex  m-8 text-secondary">
        <Sidebar text="Note List" url="/note" />
        <form
          className="container-two flex flex-col ml-12 sm:ml-16 xxs:ml-4"
          onSubmit={handleAdd}
        >
          <input
            className="border-2 w-w h-8 mr-2 text-sm rounded-xl p-4 xms:w-96 smm:w-wt lgs:w-w xxs:w-64"
            type="text"
            placeholder="heading"
            maxLength="15"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            className="border-2 w-w h-h mr-2 mt-16 xxs:mt-8 xms:w-96 smm:w-wt lgs:w-w xxs:w-64 xxs:h-96"
            type="text"
            maxLength="200"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>

          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 5px rgba(99 102 241)",
            }}
            className="hover:bg-Pink hover:border-0 hover:outline-none hover:text-white  bg-blue text-white w-56 mt-8 rounded-md items-center h-12 sm:w-96 md:w-96 text-lg"
          >
            Add Sticky Note
          </motion.button>
        </form>
      </main>
      <ToastContainer
        position="top-right"
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
  );
}

export default Create;
