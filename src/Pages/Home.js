import React, { useState } from 'react';
import pic from "../Images/fourth.png";
import { FaVideo } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';


function Home() {
    const [statistics, setStatistics] = useState([
        { top: 'Secure', extra: 'and compliant' },
        { top: 'Easy', extra: 'and free to use' },
        { top: "Editor's Choice", extra: 'IOS App Store' },
        { top: '4.7 Stars', extra: 'Google Play Store' },
    ])

    return (
        <>
        <Navbar/>
            <section>
                <article className="container mx-auto flex px-5 py-12 lg:py-20 lg:px-5 items-center justify-center flex-col">
                    <p className="mb-4 bg-fuchsia-100 text-Pink lg:text-lg text-base p-2 rounded-full">Secure Task Management for Teams</p>
                    <section className="text-center lg:w-2/4 w-full">
                        <h1 className="font-semibold text-gray-800 sm:text-4xl text-3xl mb-4 mt-2 leading-10">Take note the simple way for free <span className="bg-purple text-white sm:text-3xl p-1 text-2xl"> forever.</span></h1>
                        <p className="mb-8 text-gray-800 leading-relaxed text-left">Dockett is a note-taking app designed for professionals with busy schedules and basically anyone at all to take down notes with ease. You get to store all your notes and important information digitally in a cloud-based storage system.</p>
                        <aside className="flex justify-center">
                            <motion.button whileHover={{ scale: 1.1, boxShadow: "0px 0px 5px #6cb5de" }} className="inline-flex text-white bg-blue border-0 py-2 px-6 focus:outline-none rounded-full lg:text-lg text-base">Register</motion.button>
                            <motion.button whileHover={{ scale: 1.1, boxShadow: "0px 0px 5px rgb(55 65 81)" }} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none rounded-full lg:text-lg text-base"><FaVideo className="lg:mr-2 lg:mt-1 mr-1 mt-1" />Watch Video</motion.button>
                        </aside>
                    </section>
                </article>
            </section>


            {/* Boxes section */}
            <section>
                <section className="container px-5 lg:px-2 py-24 mx-auto">
                    <figure className="flex flex-wrap justify-center lg:w-full -m-4">

                        <section className="p-4 md:w-80 w-full">
                            <motion.article whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px #ff7191"}} className="flex rounded-lg h-full p-8 flex-col bg-Pink">
                                <h2 className="lg:text-2xl text-xl font-bold w-full sm:w-1/4">Ongoing project</h2>
                                <aside className="flex items-center mb-3 mt-8">
                                    <mark className="w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full bg-white text-white flex-shrink-0">
                                        <img className="animate-spin w-6 h-6 rounded-full" src={pic} alt="notes" />
                                    </mark>
                                    <figure className=" animate-pulse bg-gray-300 rounded-full px-12 py-2"></figure>
                                </aside>
                                <aside className="flex items-center mt-4">
                                    <figure className="animate-pulse bg-gray-200 rounded-full p-2 mr-2 "></figure><p className="leading-relaxed lg:text-xl text-lg">New Brand</p>
                                </aside>
                                <aside className="flex items-center mt-2">
                                    <figure className="animate-pulse bg-gray-200 rounded-full p-2 mr-2 "></figure><p className="leading-relaxed lg:text-xl text-lg">Product Launch</p>
                                </aside>

                                <aside className="flex mt-4 mb-4">
                                    <figure className="animate-pulse bg-gray-100 rounded-full p-2 px-16 py-2"></figure>
                                    <figure className="animate-pulse bg-gray-300 rounded-full p-2 px-10 py-2 ml-2"></figure>
                                </aside>
                                <aside className="flex">
                                    <figure className="animate-pulse bg-gray-100 rounded-full p-2 px-8 py-2"></figure>
                                    <figure className="animate-pulse bg-gray-100 rounded-full p-2 px-10 py-2 ml-2"></figure>
                                    <figure className="animate-pulse bg-gray-100 rounded-full p-2 px-10 py-0 ml-2"></figure>
                                </aside>
                            </motion.article>
                        </section>


                        <section className="p-4 md:w-72 w-full">
                            <motion.article whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px #fdbf11"}} className="flex rounded-lg h-full p-8 flex-col bg-yellow">
                                <h2 className="lg:text-2xl text-xl font-bold w-full sm:w-1/4 mb-3">Daily Activity</h2>
                                <aside className="flex items-center mb-3 mt-4">
                                    <figure className="animate-pulse bg-gray-100 rounded-full p-3"></figure>
                                    <figure className="bg-gray-100 rounded-full p-3 px-12 py-2 ml-2"></figure>
                                </aside>
                                <aside className="flex items-center mb-3 mt-2">
                                    <figure className="animate-pulse bg-gray-100 rounded-full p-3"></figure>
                                    <figure className="bg-gray-200 rounded-full p-3 px-12 py-2 ml-2"></figure>
                                </aside>
                                <aside className="flex items-center mb-3 mt-2">
                                    <figure className="bg-gray-200 rounded-full p-3"></figure>
                                    <figure className="animate-pulse bg-gray-100 rounded-full p-3 px-12 py-2 ml-2"></figure>
                                </aside>
                                <aside className="flex items-center mb-3 mt-2">
                                    <figure className="border-2 border-gray-100 rounded-full p-3"></figure>
                                    <figure className="bg-gray-200 rounded-full p-3 px-12 py-2 ml-2"></figure>
                                </aside>
                                <aside className="flex items-center mb-3 mt-2">
                                    <figure className="border-2 border-gray-200 rounded-full p-3"></figure>
                                    <figure className="animate-pulse bg-gray-100 rounded-full p-3 px-12 py-2 ml-2"></figure>
                                </aside>
                            </motion.article>
                        </section>


                        <section className="p-4 md:w-80 w-full">
                            <motion.article whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px #6c56c2"}} className="flex rounded-lg h-full p-8 flex-col bg-purple">
                                <h2 className="lg:text-2xl text-xl font-bold w-full sm:w-1/4">Live Conversation</h2>
                                <aside className="flex items-center mb-3 mt-8">
                                    <figure className="animate-pulse w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full bg-gray-200 text-white flex-shrink-0">
                                        <img className="animate-pulse w-6 h-6 rounded-full" src={pic} alt="notes" />
                                    </figure>
                                    <figure className="animate-pulse bg-gray-100 rounded-full px-12 py-2"></figure>
                                </aside>
                                <aside className="flex items-center mb-3 mt-8 justify-end">
                                    <figure className="bg-gray-300 rounded-full mr-3 px-12 py-2"></figure>
                                    <figure className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-gray-200 text-white flex-shrink-0">
                                        <img className=" animate-spin w-6 h-6 rounded-full" src={pic} alt="notes" />
                                    </figure>
                                </aside>
                                <aside className="flex items-center mb-3 mt-8">
                                    <figure className="w-9 h-9 mr-3 inline-flex items-center justify-center rounded-full bg-gray-200 text-white flex-shrink-0">
                                        <img className="animate-pulse n w-6 h-6 rounded-full" src={pic} alt="notes" />
                                    </figure>
                                    <figure className="animate-pulse bg-gray-100 rounded-full px-12 py-2"></figure>
                                </aside>
                            </motion.article>
                        </section>

                    </figure>
                </section>
            </section>




            {/* Statistics section */}
            <section className="body-font">
                <section className="container px-4 lg:px-4 py-24 mx-auto">
                        <article className="flex flex-wrap -m-4 text-center">
                        {statistics.map((statistic) => (
                            <aside className="p-4 sm:w-1/4 w-1/2">
                                <h2 className="font-semibold sm:text-2xl text-xl text-gray-900">{statistic.top}</h2>
                                <p className="leading-relaxed">{statistic.extra}</p>
                            </aside>
                            
                            ))}
                        </article>
                </section>
            </section>



            {/* Projects section */}
            <section className="text-gray-600">
                <section className="container px-5 lg:px-2 lg:py-24 py-4 mx-auto">
                    <article className="flex flex-wrap -m-4">

                        <article className="p-8 lg:w-1/3">
                            <aside className="h-full px-8 pt-16 pb-24 rounded-lg text-center relative">
                                <h2 className="text-sm text-Pink font-medium mb-3 bg-fuchsia-100 rounded-full lg:p-1 p-2">Management with Dockett</h2>
                                <h1 className="sm:text-2xl text-xl font-semibold text-gray-900 mb-3 text-left">An App That Works.</h1>
                                <p className="leading-relaxed w-full text-left text-sm">Dockett can help you be more organized and more productive. Designed and built to be functional and easily accessible by users, Dockett is also free to use.</p>
                            </aside>
                        </article>

                        <article className="p-4 lg:w-1/3 w-full">
                            <aside className="flex rounded-lg h-full p-8 flex-col bg-amber-100">
                                <h2 className="text-2xl font-bold text-amber-300">Manage Projects</h2>

                                <aside className="flex justify-between items-center mb-3 mt-8 justify-end">
                                    <figure className="bg-white rounded px-10 py-2 ml-3"></figure>
                                    <section>
                                        <figure className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-white bg-amber-300">
                                            <img className="w-6 h-6 rounded-full" src={pic} alt="notes" />
                                        </figure>
                                        <figure className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-white bg-amber-300">
                                            <img className="w-6 h-6 rounded-full" src={pic} alt="notes" />
                                        </figure>
                                        <figure className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-white bg-amber-300">
                                            <img className="w-6 h-6 rounded-full" src={pic} alt="notes" />
                                        </figure>
                                    </section>
                                </aside>

                                <aside className="flex items-center mb-2 p-2">
                                    <figure className="p-5 rounded bg-white"></figure>
                                    <figure className="bg-white rounded px-10 py-2 ml-3"></figure>
                                </aside>

                                <aside className="flex items-center mb-2 p-2 bg-amber-300 rounded-lg">
                                    <figure className="p-5 rounded bg-white"></figure>
                                    <figure className="bg-white rounded px-10 py-2 ml-3"></figure>
                                </aside>

                                <aside className="flex items-center mb-2 p-2">
                                    <figure className="p-5 rounded bg-white"></figure>
                                    <figure className="bg-white rounded px-10 py-2 ml-3"></figure>
                                </aside>

                                <aside className="flex items-center mb-2 p-2">
                                    <figure className="p-5 rounded bg-white"></figure>
                                    <figure className="bg-white rounded px-10 py-2 ml-3"></figure>
                                </aside>
                            </aside>
                        </article>

                        <article className="p-2 lg:w-1/3">
                            <aside className="h-full bg-opacity-75 px-8 pt-8 pb-8 rounded-lg overflow-hidden text-center relative">
                                <aside className="flex items-center mb-3 mt-4">
                                    <motion.figure animate={{boxShadow: "0px 0px 5px #ff7191"}} className="border-Pink border-2 rounded-full p-2"></motion.figure>
                                    <h2 className="text-xl font-semibold ml-2">Workforce</h2>
                                </aside>
                                <aside className="flex items-center mt-2 ml-8">
                                    <motion.figure animate={{boxShadow: "0px 0px 3px #ff7191"}} className="bg-Pink rounded-full p-1"></motion.figure>
                                    <h2 className="text-sm ml-2">Track roles in companies</h2>
                                </aside>


                                <aside className="flex items-center mb-3 mt-4">
                                    <motion.figure animate={{boxShadow: "0px 0px 5px rgb(245 158 11)"}} className="border-amber-500 border-2 rounded-full p-2"></motion.figure>
                                    <h2 className="text-xl font-semibold ml-2">Education</h2>
                                </aside>
                                <aside className="flex items-center mt-2 ml-8">
                                    <motion.figure animate={{boxShadow: "0px 0px 3px rgb(245 158 11)"}} className="bg-amber-500 rounded-full p-1"></motion.figure>
                                    <h2 className="text-sm ml-2">Track learning activities</h2>
                                </aside>


                                <aside className="flex items-center mb-3 mt-4">
                                    <motion.figure animate={{boxShadow: "0px 0px 5px #6c56c2"}} className="border-purple border-2 rounded-full p-2"></motion.figure>
                                    <h2 className="text-xl font-semibold ml-2">Lifestyle</h2>
                                </aside>
                                <aside className="flex items-center mt-2 ml-8">
                                    <motion.figure animate={{boxShadow: "0px 0px 3px #6c56c2"}} className="bg-purple rounded-full p-1"></motion.figure>
                                    <h2 className="text-sm ml-2">Track set goals</h2>
                                </aside>


                                <aside className="flex items-center mb-3 mt-4">
                                    <motion.figure animate={{boxShadow: "0px 0px 5px rgb(254 243 199)"}} className="border-amber-100 border-2 rounded-full p-2"></motion.figure>
                                    <h2 className="text-xl font-semibold ml-2">Research</h2>
                                </aside>
                                <aside className="flex items-center mt-2 ml-8">
                                    <motion.figure animate={{boxShadow: "0px 0px 3px rgb(254 243 199)"}} className="bg-amber-100 rounded-full p-1"></motion.figure>
                                    <h2 className="text-sm ml-2">Personal research notes.</h2>
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

