import { Link, useNavigate } from 'react-router-dom';
import { Logout } from './Firebase'
import { FiSettings, FiLogOut } from 'react-icons/fi'
import { AiOutlineHome, AiOutlineFileAdd } from 'react-icons/ai'
import { useContext } from 'react'
import { stateContext } from '../App'
import fourth from '../Images/fourth.png'

function Sidebar({text, url}) {
    const {setLoading} = useContext(stateContext);
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
      <section className='container-one pl-2  w-44 flex flex-col items-center'>
          <h1 className='text-lg font-bold text-blue mb-16'>Dockett</h1>
          <Link to={url} className='flex text-sm items-center mb-14'><AiOutlineFileAdd /><span className='ml-2 font-bold'>{text}</span></Link>
          <section className='animate-bounce mb-12'>
              <figure className='w-4 h-4 rounded-full bg-amber-200 mb-2'></figure>
              <figure className='w-4 h-4 rounded-full bg-blue mt-2' ></figure>
              <figure className='w-4 h-4 rounded-full bg-Pink mt-2'></figure>
          </section>
          <ul>
              <Link to='/' className=' mb-8 flex tracking-wide text-sm items-center'><AiOutlineHome /><span className='ml-2 font-bold'>Home</span></Link>
              <Link to='/' className=' mb-8 flex tracking-wide text-sm items-center'><FiSettings /><span className='ml-2 font-bold'>Settings</span></Link>
              <button onClick={handleLogout}><Link to='/login' className='flex tracking-wide text-sm items-center font-bold'><FiLogOut className='mr-2' />Log Out</Link></button>
          </ul>
          <section className='mt-20'>
            <img src = {fourth} alt ='thinking'/>
          </section>
      </section>  )
}

export default Sidebar