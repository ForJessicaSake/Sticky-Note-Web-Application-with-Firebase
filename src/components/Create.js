import { useState } from 'react'
import UseFetch from './UseFetch';
import Sidebar from './Sidebar'

function Create() {

  const { data, setData, loading, setLoading } = UseFetch("notes")
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  return (
    <main className='container flex m-8 text-secondary'>
      <Sidebar text="Note List" url="/note" />

      <section className="container-two flex flex-col ml-10">
        <input
          className='border-2 w-w h-8 text-sm rounded-xl p-4'
          type="text"
          placeholder='heading'
          maxlength="15"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <textarea
          className='border-2 w-w h-h mt-16'
          type="text"
          maxlength="200"
          value={content}
          onChange={(e) => { setContent(e.target.value) }}
        ></textarea>
        <button className=' bg-blue text-white w-56 mt-8 rounded-md items-center h-12'>Add Sticky Note</button>
      </section>
    
    </main>
  )
}

export default Create