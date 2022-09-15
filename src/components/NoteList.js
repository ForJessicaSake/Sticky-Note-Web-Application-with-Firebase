import { useContext } from 'react'
import { stateContext } from '../App'
import { Link, useNavigate } from 'react-router-dom';
import { UseAuth, Logout } from './Firebase'
import { FaEdit, } from 'react-icons/fa'
import { FiSettings, FiLogOut } from 'react-icons/fi'
import { AiOutlineHome, AiOutlineFileAdd } from 'react-icons/ai'
import { ImUserCheck } from 'react-icons/im'
import Loading from './Loading/Loading';


function NoteList() {
    const { data, loading, setLoading } = useContext(stateContext);
    const currentUser = UseAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        setLoading(true)
        try {
            await Logout()
        }
        catch {
            alert(`Error`)
        }
        setLoading(false)
        navigate('/login')
    }


    return (
        <main className='container flex m-8 text-secondary'>
            <section className='container-one pl-2  w-48 flex flex-col items-center'>
                <h1 className='text-lg font-bold text-blue mb-16'>Dockett</h1>
                <h3 className='flex tracking-wide text-sm items-center'><AiOutlineFileAdd /><span className='ml-2'>Add Note</span></h3>
                <section className='animate-bounce w-8 h-8 mt-4 mb-14'>
                    <figure className='w-4 h-4 rounded-full bg-amber-200 mb-2'></figure>
                    <figure className='w-4 h-4 rounded-full bg-blue mt-2' ></figure>
                    <figure className='w-4 h-4 rounded-full bg-Pink mt-2'></figure>
                </section>
                <nav>
                    <Link to='/' className=' mb-8 flex tracking-wide text-sm items-center'><AiOutlineHome /><span className='ml-2'>Home</span></Link>
                    <Link to='/' className=' mb-8 flex tracking-wide text-sm items-center'><FiSettings /><span className='ml-2'>Settings</span></Link>
                    <button onClick={handleLogout}><Link to='/' className='flex tracking-wide text-sm items-center'><span className='ml-2'><FiLogOut />Log Out</span></Link></button>

                </nav>
            </section>
            <section className="container-two flex flex-col align-center">
                <div className='flex justify-between'>
                    <h1 className='text-xl font-bold mb-8 ml-6'>My Notes</h1>
                    <input
                        type="search"
                        className='w-96 border-2 border-gray-50 bg-primary h-2 p-4 rounded-2xl text-sm'
                        placeholder='Search'
                    />
                    <p className='text-secondary text-xs w-36 flex justify-around'>{`${currentUser?.email}`}<ImUserCheck /></p>
                </div>


                <section className='bg-primary flex flex-col rounded-2xl p-6'>
                    <h1 className='text-md font-bold'>Recent Folders</h1>

                    <header className='flex justify-between mt-6 w-3/12 text-sm'>
                        <p> What are we writing today?</p>

                    </header>

                    <section className=' grid grid-cols-3 place-content-center gap-6'>
                        {loading && <p>loading</p>}
                        {data.map((notes) => (
                            <div className="first-of-type:bg-Yellow last-of-type:bg-Yellow odd:bg-blue even:bg-pink mt-6 rounded-3xl w-72 h-72" key={notes.id}>
                                <section className=" p-8 text-md">
                                    <h3 className='flex justify-between items-center align-middle font-medium text-md'>{notes.title}<span className='text-gray-100'><FaEdit /></span></h3>
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