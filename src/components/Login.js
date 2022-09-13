import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'


function Login() {

    const [email, setEmail] = useState('')
    const emailRef = useRef()
    const passwordRef = useRef()

    return (
        <main className='login-wrapper grid grid-cols-2'>
            <section className="animate bg-purple w- h-screen flex justify-center pt-32">
                <p>animate with a library</p>
            </section>

            <section className="Login text-center flex flex-col	items-center pt-32 bg-primary
            " >
                <h1 className='text-4xl mb-4'>Hello Again!</h1>
                <p className='mb-6'>Take notes the simple way for free, forever</p>
                <section className='login-input flex flex-col'>
                    <input
                        className='w-96	border-solid border border-gray-200 p-2 mb-8 rounded-xl'
                        type='text'
                        placeholder='email'
                        required
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        ref={emailRef}
                    ></input>

                    <input
                        className='w-96	border-solid border border-gray-200 p-2 rounded-xl'
                        placeholder='password'
                        type='password'
                        required
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        ref={passwordRef}
                    ></input>
                    <Link to='/'> <button className='border-purple bg-purple text-white w-96 mt-8 rounded-md items-center h-12 '>Login</button></Link>
                    <section className="flex justify-center pt-56 text-sm text-primary">
                        <p className="flex align-bottom border-2 border-gray-700 " >Don't have an account yet, sign up!</p>
                    </section>
                </section>

            </section>
        </main>
    )
}

export default Login