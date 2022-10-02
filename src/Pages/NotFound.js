import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <section className='flex justify-center items-center text-black font-bold'>
            <h1 className=''>Sorry, this page cannot be found</h1>
            <p>Kindly return back to the <Link>HomePage...</Link></p>
        </section>
    )
}

export default NotFound;