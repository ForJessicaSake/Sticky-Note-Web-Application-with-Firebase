import React from 'react'
import Navbar from './Navbar';
import pic from "../Images/first.png";
import { UseAuth } from './Firebase'

function Home() {
    
    const currentUser = UseAuth();

    return (
        <>
            <Navbar />

            {/* Hero section */}

            <section class="">
                <p className='text-primary text-sm font-thin mt-2'>alert(`Currently logging in as ${currentUser?.email} `)</p>

                <article class="container mx-auto flex px-5 py-24 items-center justify-center flex-col mt-4">
                    <p class="mb-4 bg-fuchsia-100 text-Pink text-lg p-2 rounded-full">Secure Task Management for Teams</p>
                    <section class="text-center lg:w-2/3 w-full">
                        <h1 class="font-bold text-gray-900 sm:text-5xl text-4xl mb-4">Work on big ideas, <br />without the <span class="bg-purple text-white"> busywork.</span></h1>
                        <p class="mb-8 text-gray-900 leading-relaxed">From the small stuff to the big picture, GoodBucket organizes work so teams<br /> know what to do, why it matters, and how to get it done.</p>
                        <aside class="flex justify-center">
                            <button class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none rounded-full text-lg">Explore More</button>
                            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none rounded-full text-lg">Watch Video</button>
                        </aside>
                    </section>
                </article>
            </section>


            {/* Boxes section */}
            <main class="text-white">
                <section class="container px-5 py-24 mx-auto">
                    <section class="flex flex-wrap justify-center -m-4">

                        {/* md:w-1/3 */}
                        <section class="p-4 md:w-96 w-full">
                            <article class="flex rounded-lg h-full p-8 flex-col bg-Pink">
                                <h2 class="text-2xl font-bold w-full sm:w-1/4">Ongoing project</h2>
                                <aside class="flex items-center mb-3 mt-8">
                                    <mark class="w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
                                        <img class="w-5 h-5" src={pic} alt="notes" />
                                    </mark>
                                    <figure class="bg-gray-300 rounded-full px-12 py-2"></figure>
                                </aside>
                                <aside class="flex items-center mt-4">
                                    <figure class="bg-gray-200 rounded-full p-2 mr-2 "></figure><p class="leading-relaxed text-xl">New Brand</p>
                                </aside>
                                <aside class="flex items-center mt-2">
                                    <figure class="bg-gray-200 rounded-full p-2 mr-2 "></figure><p class="leading-relaxed text-xl">Product Road Map</p>
                                </aside>

                                <aside class="flex mt-4 mb-4">
                                    <figure class="bg-gray-300 rounded-full p-3 px-20 py-2"></figure>
                                    <figure class="bg-gray-300 rounded-full p-3 px-12 py-2 ml-2"></figure>
                                </aside>
                                <aside class="flex">
                                    <figure class="bg-gray-300 rounded-full p-3 px-8 py-2"></figure>
                                    <figure class="bg-gray-300 rounded-full p-3 px-12 py-2 ml-2"></figure>
                                    <figure class="bg-gray-300 rounded-full p-3 px-12 py-2 ml-2"></figure>
                                </aside>
                            </article>
                        </section>


                        <section class="p-4 md:w-72 w-full">
                            <article class="flex rounded-lg h-full bg-gray-100 p-8 flex-col bg-yellow">
                                <h2 class="text-2xl font-bold w-full sm:w-1/4 mb-3">Daily Activity</h2>
                                <aside class="flex items-center mb-3 mt-4">
                                    <figure class="bg-gray-200 rounded-full p-3"></figure>
                                    <figure class="bg-gray-200 rounded-full p-3 px-12 py-2 ml-2"></figure>
                                </aside>
                                <aside class="flex items-center mb-3 mt-2">
                                    <figure class="bg-gray-200 rounded-full p-3"></figure>
                                    <figure class="bg-gray-200 rounded-full p-3 px-12 py-2 ml-2"></figure>
                                </aside>
                                <aside class="flex items-center mb-3 mt-2">
                                    <figure class="bg-gray-200 rounded-full p-3"></figure>
                                    <figure class="bg-gray-200 rounded-full p-3 px-12 py-2 ml-2"></figure>
                                </aside>
                                <aside class="flex items-center mb-3 mt-2">
                                    <figure class="border-2 border-gray-300 rounded-full p-3"></figure>
                                    <figure class="bg-gray-200 rounded-full p-3 px-12 py-2 ml-2"></figure>
                                </aside>
                                <aside class="flex items-center mb-3 mt-2">
                                    <figure class="border-2 border-gray-300 rounded-full p-3"></figure>
                                    <figure class="bg-gray-200 rounded-full p-3 px-12 py-2 ml-2"></figure>
                                </aside>
                            </article>
                        </section>


                        <section class="p-4 md:w-96 w-full">
                            <article class="flex rounded-lg h-full p-8 flex-col bg-purple">
                                <h2 class="text-2xl font-bold w-full sm:w-1/4">Live Conversation</h2>
                                <aside class="flex items-center mb-3 mt-8">
                                    <figure class="w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full bg-gray-200 text-white flex-shrink-0">
                                        <img class="w-5 h-5" src={pic} alt="notes" />
                                    </figure>
                                    <figure class="bg-gray-300 rounded-full px-12 py-2"></figure>
                                </aside>
                                <aside class="flex items-center mb-3 mt-8 justify-end">
                                    <figure class="bg-gray-300 rounded-full mr-3 px-12 py-2"></figure>
                                    <figure class="w-9 h-9 inline-flex items-center justify-center rounded-full bg-gray-200 text-white flex-shrink-0">
                                        <img class="w-5 h-5" src={pic} alt="notes" />
                                    </figure>
                                </aside>
                                <aside class="flex items-center mb-3 mt-8">
                                    <figure class="w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full bg-gray-200 text-white flex-shrink-0">
                                        <img class="w-5 h-5" src={pic} alt="notes" />
                                    </figure>
                                    <figure class="bg-gray-300 rounded-full px-12 py-2"></figure>
                                </aside>
                            </article>
                        </section>
                    </section>
                </section>
            </main>


            {/* Statistics section */}
            <section class="body-font">
                <section class="container px-4 lg:px-44 py-24 mx-auto">
                    <article class="flex flex-wrap -m-4 text-center">
                        <aside class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="font-semibold sm:text-3xl text-2xl text-gray-900">Secure</h2>
                            <p class="leading-relaxed">and compliant</p>
                        </aside>
                        <aside class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="font-semibold sm:text-3xl text-2xl text-gray-900">4 Million</h2>
                            <p class="leading-relaxed">and compliant</p>
                        </aside>
                        <aside class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="font-semibold sm:text-3xl text-2xl text-gray-900">Editor's Choice</h2>
                            <p class="leading-relaxed">IOS App Store</p>
                        </aside>
                        <aside class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="font-semibold sm:text-3xl text-2xl text-gray-900">4.7 Stars</h2>
                            <p class="leading-relaxed">Google Play Store</p>
                        </aside>
                    </article>
                </section>
            </section>



            {/* Projects section */}
            <section class="text-gray-600 body-font">
                <section class="container px-5 lg:px-44 py-24 mx-auto">
                    <article class="flex flex-wrap -m-4">

                        <article class="p-8 lg:w-1/3">
                            <aside class="h-full px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                <h2 class="text-lg text-Pink title-font font-semibold mb-3 bg-fuchsia-100 rounded-full p-2">Management with GoodBucket</h2>
                                <h1 class="title-font sm:text-4xl text-3xl font-bold text-gray-900 mb-3">Projects That Work.</h1>
                                <p class="leading-relaxed w-full">Whether you're managing your next big project or digitalizing task management for your team's daily business,
                                    you need to know who's doing what, when.</p>
                            </aside>
                        </article>

                        <article class="p-4 lg:w-1/3 w-full">
                            <aside class="flex rounded-lg h-full md:h-full md:h-5/6 p-8 flex-col bg-amber-100">
                                <h2 class="text-2xl font-bold text-amber-300">Manage Projects</h2>

                                <aside class="flex justify-between items-center mb-3 mt-8 justify-end">
                                    <figure class="bg-white rounded px-10 py-2 ml-3"></figure>
                                    <section>
                                        <figure class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-white bg-amber-300">
                                            <img class="w-5 h-5" src={pic} alt="notes" />
                                        </figure>
                                        <figure class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-white bg-amber-300">
                                            <img class="w-5 h-5" src={pic} alt="notes" />
                                        </figure>
                                        <figure class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-white bg-amber-300">
                                            <img class="w-5 h-5" src={pic} alt="notes" />
                                        </figure>
                                    </section>
                                </aside>

                                <aside class="flex items-center mb-2 p-2">
                                    <figure class="p-5 rounded bg-white"></figure>
                                    <figure class="bg-white rounded px-10 py-2 ml-3"></figure>
                                </aside>

                                <aside class="flex items-center mb-2 p-2 bg-amber-300 rounded-lg">
                                    <figure class="p-5 rounded bg-white"></figure>
                                    <figure class="bg-white rounded px-10 py-2 ml-3"></figure>
                                </aside>

                                <aside class="flex items-center mb-2 p-2">
                                    <figure class="p-5 rounded bg-white"></figure>
                                    <figure class="bg-white rounded px-10 py-2 ml-3"></figure>
                                </aside>
                            </aside>
                        </article>

                        <article class="p-4 lg:w-1/3">
                            <aside class="h-full bg-opacity-75 px-8 pt-8 pb-24 rounded-lg overflow-hidden text-center relative">
                                <aside class="flex items-center mb-3 mt-4">
                                    <figure class="border-Pink border-2 rounded-full p-2"></figure>
                                    <h2 class="text-xl font-semibold ml-2">Dashboard</h2>
                                </aside>
                                <aside class="flex items-center mt-2 ml-8">
                                    <figure class="bg-Pink rounded-full p-1"></figure>
                                    <h2 class="text-sm ml-2">Everything in one place</h2>
                                </aside>

                                <aside class="flex items-center mb-3 mt-4">
                                    <figure class="border-amber-500 border-2 rounded-full p-2"></figure>
                                    <h2 class="text-xl font-semibold ml-2">Project</h2>
                                </aside>
                                <aside class="flex items-center mt-2 ml-8">
                                    <figure class="bg-amber-500 rounded-full p-1"></figure>
                                    <h2 class="text-sm ml-2">Clear overview, full efficiency</h2>
                                </aside>

                                <aside class="flex items-center mb-3 mt-4">
                                    <figure class="border-purple border-2 rounded-full p-2"></figure>
                                    <h2 class="text-xl font-semibold ml-2">Task</h2>
                                </aside>
                                <aside class="flex items-center mt-2 ml-8">
                                    <figure class="bg-purple rounded-full p-1"></figure>
                                    <h2 class="text-sm ml-2">Where work gets done</h2>
                                </aside>

                                <aside class="flex items-center mb-3 mt-4">
                                    <figure class="border-amber-100 border-2 rounded-full p-2"></figure>
                                    <h2 class="text-xl font-semibold ml-2">Agenda</h2>
                                </aside>
                                <aside class="flex items-center mt-2 ml-8">
                                    <figure class="bg-amber-100 rounded-full p-1"></figure>
                                    <h2 class="text-sm ml-2">Your own personal board</h2>
                                </aside>

                            </aside>
                        </article>

                    </article>
                </section>
            </section>

        </>

    )
}

export default Home

