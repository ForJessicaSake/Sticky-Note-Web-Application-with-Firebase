import { useContext } from 'react'
import { stateContext } from '../App'
import { FaEdit } from 'react-icons/fa'

function NoteList() {
    const { data, isPending } = useContext(stateContext);

    return (
        <main className='container grid grid-cols-2 mt-8'>
            <h1 className='text-3xl ml-16 font-bold'>My notes</h1>
            <section className=' flex justify-between items-center align-middle'>
                <p>Today</p>
                <p>This Week</p>
                <p>This Month</p>
            </section>

            <section className=' grid grid-cols-3 place-content-center w-screen ml-16 mt-12'>

                {isPending && <p>Loading ...</p>}
                {data.map((notes) => (
                    <div className="first-of-type:bg-Pink last-of-type:bg-Pink odd:bg-purple even:bg-yellow mt-6 rounded-3xl w-72 h-72" key={notes.id}>
                        <section className=" p-8 text-primary font-light text-md">
                            <h3 className='flex justify-between items-center align-middle'>{notes.title}<span className=''><FaEdit /></span></h3>
                            <hr/>
                            <p className='text-xs mt-8'>{notes.body}</p>
                        </section>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default NoteList