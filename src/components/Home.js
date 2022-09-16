import React from 'react'
import Navbar from './Navbar';
import pic from "../Images/first.png";
import { FaVideo } from 'react-icons/fa'

function Home() {
    
    return (
        <>
            <Navbar />

            {/* Hero section */}

            <section class="">

                <article class="container mx-auto flex px-5 py-24 items-center justify-center flex-col mt-4">
                    <p class="mb-4 bg-fuchsia-100 text-Pink lg:text-lg text-base p-2 rounded-full">Secure Task Management for Teams</p>
                    <section class="text-center lg:w-2/4 w-full">
                        <h1 class="font-bold text-gray-900 sm:text-5xl text-4xl mb-4">Take note the simple <br />way for free <span class="bg-purple text-white sm:text-4xl p-1 text-3xl"> forever</span></h1>
                        <p class="mb-8 text-gray-900 leading-relaxed">Dockett is a note-taking app designed for professionals with busy schedules and basically anyone at all to take down notes with ease. You get to store all your notes and important information digitally in a cloud-based storage system.</p>
                        <aside class="flex justify-center">
                            <button class="inline-flex text-white bg-blue border-0 py-2 px-6 focus:outline-none rounded-full lg:text-lg text-base">Register</button>
                            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none rounded-full lg:text-lg text-base"><FaVideo className="lg:mr-2 lg:mt-1 mr-1 mt-1"/>Watch Video</button>
                        </aside>
                    </section>
                </article>
            </section>


            {/* Boxes section */}
            <main class="text-white">
                <section class="container px-5 py-24 mx-auto">
                    <section class="flex flex-wrap justify-center -m-4">

                        <section class="p-4 md:w-96 w-full">
                            <article class="flex rounded-lg h-full p-8 flex-col bg-Pink">
                                <h2 class="lg:text-2xl text-xl font-bold w-full sm:w-1/4">Ongoing project</h2>
                                <aside class="flex items-center mb-3 mt-8">
                                    <mark class="w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
                                        <img class="w-5 h-5" src={pic} alt="notes" />
                                    </mark>
                                    <figure class="bg-gray-300 rounded-full px-12 py-2"></figure>
                                </aside>
                                <aside class="flex items-center mt-4">
                                    <figure class="bg-gray-200 rounded-full p-2 mr-2 "></figure><p class="leading-relaxed lg:text-xl text-lg">New Brand</p>
                                </aside>
                                <aside class="flex items-center mt-2">
                                    <figure class="bg-gray-200 rounded-full p-2 mr-2 "></figure><p class="leading-relaxed lg:text-xl text-lg">Product Launch</p>
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
                                <h2 class="lg:text-2xl text-xl font-bold w-full sm:w-1/4 mb-3">Daily Activity</h2>
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
                                <h2 class="lg:text-2xl text-xl font-bold w-full sm:w-1/4">Live Conversation</h2>
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
                            <h2 class="font-semibold sm:text-3xl text-2xl text-gray-900">Easy</h2>
                            <p class="leading-relaxed">and free to use</p>
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
            <section class="text-gray-600">
                <section class="container px-5 lg:px-44 py-24 mx-auto">
                    <article class="flex flex-wrap -m-4">

                        <article class="p-8 lg:w-1/3">
                            <aside class="h-full px-8 pt-16 pb-24 rounded-lg text-center relative">
                                <h2 class="lg:text-lg text-sm text-Pink font-semibold mb-3 bg-fuchsia-100 rounded-full lg:p-1 p-2">Management with Dockett</h2>
                                <h1 class="sm:text-3xl text-2xl font-bold text-gray-900 mb-3 text-left">An App That Works.</h1>
                                <p class="leading-relaxed w-full text-left">Dockett can help you be more organized and more productive. Designed and built to be functional and easily accessible by users, Dockett is also free to use.</p>
                            </aside>
                        </article>

                        <article class="p-4 lg:w-1/3 w-full">
                            <aside class="flex rounded-lg h-full md:h-full lg:h-5/6 p-8 flex-col bg-amber-100">
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
                                    <h2 class="text-xl font-semibold ml-2">Workforce</h2>
                                </aside>
                                <aside class="flex items-center mt-2 ml-8">
                                    <figure class="bg-Pink rounded-full p-1"></figure>
                                    <h2 class="text-sm ml-2">Track roles within organizations.</h2>
                                </aside>

                                <aside class="flex items-center mb-3 mt-4">
                                    <figure class="border-amber-500 border-2 rounded-full p-2"></figure>
                                    <h2 class="text-xl font-semibold ml-2">Education</h2>
                                </aside>
                                <aside class="flex items-center mt-2 ml-8">
                                    <figure class="bg-amber-500 rounded-full p-1"></figure>
                                    <h2 class="text-sm ml-2">Keep track of learning activities.</h2>
                                </aside>

                                <aside class="flex items-center mb-3 mt-4">
                                    <figure class="border-purple border-2 rounded-full p-2"></figure>
                                    <h2 class="text-xl font-semibold ml-2">Lifestyle</h2>
                                </aside>
                                <aside class="flex items-center mt-2 ml-8">
                                    <figure class="bg-purple rounded-full p-1"></figure>
                                    <h2 class="text-sm ml-2">Track tasks to meet set goals</h2>
                                </aside>

                                <aside class="flex items-center mb-3 mt-4">
                                    <figure class="border-amber-100 border-2 rounded-full p-2"></figure>
                                    <h2 class="text-xl font-semibold ml-2">Research</h2>
                                </aside>
                                <aside class="flex items-center mt-2 ml-8">
                                    <figure class="bg-amber-100 rounded-full p-1"></figure>
                                    <h2 class="text-sm ml-2">Personal research notes.</h2>
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

