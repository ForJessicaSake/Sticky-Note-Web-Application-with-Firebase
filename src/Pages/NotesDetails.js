import { useState, useEffect, useCallback } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import db from '../components/Firebase'

function NotesDetails() {
  const [note, setNote] = useState([])
  const { id } = useParams();

  
const memoedFunction = useCallback(()=>{

  const userData = async () => {

    const docRef = doc(db, "notes", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setNote(docSnap.data())
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  userData()
}, [id])

  useEffect(() => {
      memoedFunction()  
}, [memoedFunction])

  return (
    <>
      <header>
        <section className="container mx-auto flex flex-wrap px-4 lg:px-52 py-5 flex-col md:flex-row items-center">
          <aside className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <button className="inline-flex items-center bg-white text-black border-2 border-black py-1 px-6 focus:outline-none rounded text-base mt-4 md:mt-0">Edit </button>
            <button className="inline-flex items-center bg-blue text-white border-0 py-1.5 px-6 focus:outline-none rounded text-base mt-4 lg:ml-4 ml-2 md:mt-0">Delete </button>
          </aside>
<main>
          
              <h2>{note.title}</h2>
              <p>{note.body}</p>
                
          </main>
        </section>
      </header>
    </>

  )
}

export default NotesDetails;