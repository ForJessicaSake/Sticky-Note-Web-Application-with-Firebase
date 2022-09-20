import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import db from './Firebase'



function NotesDetails() {
  const [note, setNote] = useState([])
  const { id } = useParams();
  const userData = async () => {
    const NoteRef = collection(db, "notes");
    const q = query(NoteRef, where("notes", "==", id));
    const querySnapshot = await getDocs(q);
    const result = querySnapshot.docs.map((doc) => (doc.data()))
    setNote(result)
    console.log(result)
  }


  useEffect(() => {
    userData()
  }, [])

  return (
    <>
      <header>
        <section className="container mx-auto flex flex-wrap px-4 lg:px-52 py-5 flex-col md:flex-row items-center">
          <aside className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <button className="inline-flex items-center bg-white text-black border-2 border-black py-1 px-6 focus:outline-none rounded text-base mt-4 md:mt-0">Edit </button>
            <button className="inline-flex items-center bg-blue text-white border-0 py-1.5 px-6 focus:outline-none rounded text-base mt-4 lg:ml-4 ml-2 md:mt-0">Delete </button>
          </aside>
          {note.map((note)=>{
            return(
            <div key ={note.id}>
              <h2>{note.title}</h2>
              <p>{note.body}</p>
            </div>
         ) })}
        </section>
      </header>


      <section className="text-gray-600 body-font">
        <article className="container px-5 py-24 mx-auto">
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{note.body}</p>

        </article>
      </section>

    </>

  )
}

export default NotesDetails;