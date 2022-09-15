import { useRef, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { logIn  }from './Firebase'
import { stateContext } from '../App';
import Slider from 'react-slick'
import Loading from './Loading/Loading'
import first from "../Images/first.png"
import second from "../Images/second.png"
import third from "../Images/third.png"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


function Login() {

    const navigate = useNavigate()
    const { loading, setLoading } = useContext(stateContext)
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleLogin = async () => {
        setLoading(true)
        try {
            await logIn(emailRef.current.value, passwordRef.current.value)
        }
        catch {
            alert(`Error`)
        }
        setLoading(false)
        navigate('/note')
    }
   


    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        pauseOnHover: true
    }

    return (
        <section>
            {loading ? <Loading /> :
                <main className='login-wrapper grid grid-cols-2'>
                    <section>
                        <Slider {...settings} className="bg-purple h-screen flex justify-center pt-24 pl-32 ">

                            <figure className='flex justify-center align-middle'>
                                <img src={first} alt="notes" className='w-96' />
                                <figcaption className='text-2xl font-semibold text-primary text-center w-80 ml-4 mt-28'>New Scheduling Options And Management Options</figcaption>
                                <p className='text-xs font-thin text-primary text-center w-64 leading-2 mt-4 tracking-wider ml-10'>Dockett offers a seamless service that allows users to easily take notes and stay organized at all times.</p></figure>

                            <figure >
                                <img src={second} alt="notes" className='w-96' />
                                <figcaption className='text-2xl font-semibold text-primary  text-center w-72 ml-14 mt-28'>Change The Quality Of Your Life.</figcaption>
                                <p className='text-xs font-thin text-primary text-center w-64 leading-2 mt-4 tracking-wider ml-16'>Dockett offers a seamless service that allows users to easily take notes and stay organized at all times. </p>
                            </figure>

                            <figure>
                                <img src={third} alt="notes" className='w-96' />
                                <figcaption className='text-2xl font-semibold text-primary  text-center w-72 ml-6 mt-24'>Your Safety And Security Is Priortized.</figcaption>
                                <p className='text-xs mt-4 font-thin text-primary text-center w-64 leading-2 tracking-wider ml-10'>Dockett offers a seamless service that allows users to easily take notes and stay organized at all times.</p>
                            </figure>
                        </Slider>
                    </section>

                    <section className="Login text-center flex flex-col	items-center pt-32 bg-primary tracking-wider rounded-3xl" >
                        <h1 className='text-3xl mb-6 font-bold'>Hello again!</h1>
                        <p className='mb-6 text-xs tracking-wide text'>Take notes the simple way for free, forever</p>
                        <section className='login-input flex flex-col font-medium'>
                            <input
                                className='w-96	border-solid border border-gray-200 p-2 mb-6 rounded-2xl text-sm h-12'
                                type='text'
                                placeholder='enter your email'
                                required
                                ref={emailRef}
                            ></input>

                            <input
                                className='w-96	border-solid border border-gray-200 p-2 rounded-2xl text-sm h-12 '
                                placeholder='enter your password'
                                type='password'
                                required
                                ref={passwordRef}
                            ></input>
                            <button onClick={handleLogin} className='border-purple bg-purple text-white w-96 mt-8 rounded-md items-center h-12'>Login</button>
                            {/* <button className='bg-gray-50 text-purple w-96 mt-8 rounded-md items-center h-12 '>Log Out</button> */}

                            <section className="flex justify-center pt-36 align-middle">
                                <p className="flex align-middle text-xs tracking-wide text mt-20">Don't have an account yet, <Link className='text-purple ml-2' to ='/signup'> sign up! </Link></p>
                            </section>
                        </section>
                    </section>
                </main >
            }
        </section>
    )
}

export default Login