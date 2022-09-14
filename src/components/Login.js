import { useState, useRef } from 'react'
import Slider from 'react-slick'
import first from "../Images/first.png"
import second from "../Images/second.png"
import third from "../Images/third.png"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"



function Login() {
    const [email, setEmail] = useState('')
    const emailRef = useRef()
    const passwordRef = useRef()

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        pauseOnHover: true
    }

    return (
        <main className='login-wrapper grid grid-cols-2'>
            <section>
                <Slider {...settings} className="bg-purple h-screen flex justify-center pt-16 pl-2">

                    <figure>
                        <img src={first} alt="notes" className='w-96' />
                        <figcaption>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos exercitationem doloribus omnis.</figcaption>
                    </figure>

                    <figure>
                        <img src={second} alt="notes" className='w-96' />
                        <figcaption>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, magnam.</figcaption>
                    </figure>

                    <figure>
                        <img src={third} alt="notes" className='w-96' />
                        <figcaption>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, magnam.</figcaption>
                    </figure>
                </Slider>
            </section>

            <section className="Login text-center flex flex-col	items-center pt-32 bg-primary tracking-wider rounded-3xl" >
                <h1 className='text-3xl mb-6 font-bold'>Hello again!</h1>
                <p className='mb-6 text-xs tracking-wide text'>Take notes the simple way for free, forever</p>
                <section className='login-input flex flex-col font-medium'>
                    <input
                        className='w-96	border-solid border border-gray-200 p-2 mb-6 rounded-2xl text-sm '
                        type='text'
                        placeholder='email'
                        required
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        ref={emailRef}
                    ></input>

                    <input
                        className='w-96	border-solid border border-gray-200 p-2 rounded-2xl text-sm '
                        placeholder='password'
                        type='password'
                        required
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        ref={passwordRef}
                    ></input>
                    <button className='border-purple bg-purple text-white w-96 mt-8 rounded-md items-center h-12 '>Login</button>
                    <button className='border-purple bg-gray-50 text-purple w-96 mt-8 rounded-md items-center h-12 '>Sign up</button>
                    <section className="flex justify-center pt-36 align-middle">
                        <p className="flex align-middle text-xs tracking-wide text" >Don't have an account yet, <span className='text-purple ml-2'> sign up! </span></p>
                    </section>
                </section>
            </section>
        </main >
    )
}

export default Login