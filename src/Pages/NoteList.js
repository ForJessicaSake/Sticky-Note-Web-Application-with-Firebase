import { useContext } from 'react'
import { stateContext } from '../App'
import Feed from '../components/Loading/Feed';
import Sidebar from '../components/Sidebar';
import { UseAuth } from '../components/Firebase'
import { ImUserCheck } from 'react-icons/im'
import { FaEdit, } from 'react-icons/fa'



function NoteList() {
    const { data, loading } = useContext(stateContext);
    const currentUser = UseAuth();

    return (
        <main className='container flex m-6 text-secondary'>
        
            <Sidebar text="Add Note" url="/create"/>

            <section className="container-two flex flex-col align-center">
                <div className='flex justify-between'>
                    <h1 className='text-xl font-bold mb-10 ml-6'>My Notes</h1>
                    <input
                        type="search"
                        className='w-96 border-2 border-gray-50 bg-primary h-2 p-4 rounded-2xl text-sm'
                        placeholder='Search'
                    />
                    <p className='text-secondary text-xs w-48 flex justify-around'>{`${currentUser?.email}`}<ImUserCheck /></p>
                </div>

                <section className='bg-primary flex flex-col rounded-2xl p-6'>
                    <h1 className='text-md font-bold'>Recent Folders</h1>

                    <header className='flex justify-between mt-6 w-3/12 text-sm'>
                        <p> What are we writing today?</p>

                    </header>
                    <section className=' grid grid-cols-3 place-content-center gap-6'>
                        {loading && <Feed/>}
                        {data.map((notes) => (
                            <div className="first-of-type:bg-Yellow last-of-type:bg-Yellow odd:bg-blue even:bg-slate-50 mt-6 rounded-3xl w-72 h-72" key={notes.id}>
                                <section className=" p-8 text-sm tracking-wide">
                                    <h3 className='flex justify-between items-center align-middle font-semibold text-md'>{notes.title}<span className='text-secondary font-bold'><FaEdit /></span></h3>
                                    <p className='text-xs mt-8'>{notes.body}</p>
                                </section>
                            </div>
                        ))}
                    </section>
                </section>
            </section>


        </main>
    )
}

export default NoteList