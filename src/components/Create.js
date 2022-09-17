import { useState } from 'react'
// import UseFetch from './UseFetch';
import { UseAuth } from './Firebase'
import Sidebar from './Sidebar'
import db from './Firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

function Create() {
  const currentUser = UseAuth();

  // const { data, setData, loading, setLoading } = UseFetch("notes")
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleAdd = async (e) => {

    e.preventDefault()
    if(currentUser !== null){

      if(title !== ""){
        const collectionRef = collection(db, 'notes')
        const payload = { title, body, time: serverTimestamp(), complete: false }
        await addDoc(collectionRef, payload);
      }
      else{
        setTitle('')
      }
    } setTitle('')
  }

  return (
    <main className='container flex m-8 text-secondary'>
      <Sidebar text="Note List" url="/note" />

      <form className="container-two flex flex-col ml-10" onSubmit = {handleAdd}>
        <input
          className='border-2 w-w h-8 text-sm rounded-xl p-4'
          type="text"
          placeholder='heading'
          maxLength="15"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <textarea
          className='border-2 w-w h-h mt-16'
          type="text"
          maxLength="200"
          value={body}
          onChange={(e) => { setBody(e.target.value) }}
        ></textarea>
        <button className=' bg-blue text-white w-56 mt-8 rounded-md items-center h-12' >Add Sticky Note</button>
      </form>

    </main>
  )
}

export default Create