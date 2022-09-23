import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../components/Sidebar";
import db from "../components/Firebase";

function Create() {
  //creating two states to keep track of the user's input

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  //storing the initialized hook to a variable

  const navigate = useNavigate();

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const collectionRef = collection(db, "notes");
      const payload = { title, body, time: serverTimestamp() };
      navigate("/note");
      await addDoc(collectionRef, payload);
    } catch (err) {
      toast.info("Kindly log in", {
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
    <main className="container flex m-8 text-secondary">
      <Sidebar text="Note List" url="/note" />

      <form className="container-two flex flex-col ml-10" onSubmit={handleAdd}>
        <input
          className="border-2 w-w h-8 text-sm rounded-xl p-4"
          type="text"
          placeholder="heading"
          maxLength="15"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className="border-2 w-w h-h mt-16"
          type="text"
          maxLength="200"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>

        <button className=" bg-blue text-white w-56 mt-8 rounded-md items-center h-12">
          Add Sticky Note
        </button>
      </form>
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
    </main>
  );
}

export default Create;