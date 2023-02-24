import { useRef, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { logIn } from '../Utils/Firebase'
import { stateContext } from '../App';
import Slider from 'react-slick'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Loading from '../components/Loading/Loading'
import first from "../Images/first.png"
import second from "../Images/second.png"
import third from "../Images/third.png"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


function Login() {
//initializing the useNavigate hook
    const navigate = useNavigate()
    console.log(process.env.REACT_APP_API_KEY);

    
    //importing global declared variables
    const { loading, setLoading } = useContext(stateContext)
    
  //initializing ref hook
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            await logIn(emailRef.current.value, passwordRef.current.value)
            navigate('/note')
            setLoading(false)
        }
        catch (err) {
            setLoading(false)
            if (err.code === "auth/wrong-password") {
                toast.info('Invalid Password', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else if (err.code === "auth/user-not-found") {
                toast.info('User does not exist', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else if (err.code === "auth/user-disabled") {
                toast.info('Account disabled', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                toast.info('Network error, kindly check your internet connection', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            setLoading(false)
        }
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
                <main className='login-wrapper grid grid-cols-2 w-screen smm:flex smm:flex-col  lgs:flex lgs:flex-col xxs:flex xxs:flex-col xms:flex xms:flex-col overflow-x-hidden '>
                    <section>
                        <Slider {...settings} className="bg-purple flex items-center justify-center h-screen">

                            <figure className='flex items-center justify-center align-middle ml-32 lgs:ml-80  smm:ml-60 xxs:ml-4 xms:ml-36'>
                                <img src={first} alt="notes" className='w-96 xxs:w-72 xms:w-80' />
                                <figcaption className='text-2xl font-semibold text-primary text-center w-80 ml-2 mt-28 lgs:text-3xl lgs:w-96 sm:text-2xl sm:w-80 xms:text-2xl xxs:w-80 xxs:text-2xl xms:w-80'>New Scheduling Options And Management Options.</figcaption>
                                <p className='text-xs font-thin text-primary text-center w-64 leading-2 mt-4 tracking-wider ml-10 xxs:text-sm xms:text-sm sm:text-sm sm:w-72'>Dockett offers a seamless service that allows users to easily take notes and stay organized at all times.</p>
                            </figure>

                            <figure className='flex items-center justify-center align-middle ml-32 lgs:ml-80 smm:ml-60 xxs:ml-2 xms:ml-36' >
                                <img src={second} alt="notes" className='w-96' />
                                <figcaption className='text-2xl font-semibold text-primary  text-center w-72 ml-14 mt-24 lgs:text-3xl lgs:w-96 sm:text-2xl sm:w-80 xms:text-2xl xxs:ml-2 xxs:w-80 xxs:text-2xl xms:w-80'>Change The Quality Of Your Life.</figcaption>
                                <p className='text-xs font-thin text-primary text-center w-64 leading-2 mt-4 tracking-wider ml-12 xxs:text-sm xms:text-sm sm:text-sm sm:w-72 lgs:w-96 lg:text-sm'>Dockett offers a seamless service that allows users to easily take notes and stay organized at all times. </p>
                            </figure>

                            <figure className='flex items-center justify-center align-middle ml-32 lgs:ml-80  smm:ml-60 xxs:ml-2 xms:ml-36'>
                                <img src={third} alt="notes" className='w-96' />
                                <figcaption className='text-2xl font-semibold text-primary  text-center w-72 ml-6 mt-28  xms:text-2xl xxs:w-80 xxs:text-2xl xms:w-80 sm:text-3xl sm:w-80 lgs:text-3xl lgs:w-96'>Your Safety And Security Is Priortized.</figcaption>
                                <p className='text-xs mt-4 font-thin text-primary text-center w-64 leading-2 tracking-wider ml-10  xxs:text-sm xms:text-sm sm:text-sm sm:w-72'>Dockett offers a seamless service that allows users to easily take notes and stay organized at all times.</p>
                            </figure>
                        </Slider>
                    </section>

                    <section className="Login text-center flex flex-col	items-center pt-32 bg-primary tracking-wider rounded-3xl h-screen" >
                        <h1 className='text-3xl mb-6 font-bold smm:text-4xl'>Hello again!</h1>
                        <p className='mb-6 text-xs tracking-wide smm:text-xl xxs:text-sm xms:text-lg lgs:text-lg'>Take notes the simple way for free, forever</p>
                        <section className='login-input flex flex-col font-medium'>
                            <input
                                className='w-96	border-solid border border-gray-200 p-2 mb-6 rounded-2xl text-sm h-12 smm:h-14 smm:text-2xl xxs:w-80 xxs:ml-4 xxs:text-lg  xms:w-80 xms:ml-4 xms:text-xl'
                                type='text'
                                placeholder='email'
                                required
                                ref={emailRef}
                            ></input>

                            <input
                                className='w-96	border-solid border border-gray-200 p-2 rounded-2xl text-sm h-12 smm:h-14 smm:text-2xl xxs:w-80 xxs:ml-4 xxs:text-lg xms:w-80 xms:ml-4 xms:text-xl'
                                placeholder='password'
                                type='password'
                                required
                                ref={passwordRef}
                                minLength='6'
                            ></input>
                            <button onClick={handleLogin} className='border-purple bg-purple text-white w-96 mt-8 rounded-md items-center h-12 smm:text-2xl smm:h-14 xxs:w-80 xxs:ml-4 xxs:text-lg xxs:h-16 xms:text-xl xms:h-16'>Login</button>

                            <section className="flex justify-center pt-12 align-middle">
                                <p className="flex align-middle text-xs tracking-wide text mt-20 smm:text-2xl xxs:text-sm xms:text-lg lgs:text-lg mb-4">Don't have an account yet, <Link className='text-purple ml-2' to='/signup'> sign up! </Link></p>
                            </section>
                        </section>
                    </section>
                </main >
            }
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </section>
    )
}

export default Login
