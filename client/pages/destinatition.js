import Link from 'next/link';
import React from 'react';

const Destinatition = () => {
    return (
        <div id="destination" className='my-7 px-5'>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {/* div1 */}
                <div className='flex flex-col items-left space-y-7 mt-0 md:mt-60'>
                    <p className='text-pink-700 text-xl font-semibold'>Popular Destination</p>
                    <h1 className='text-2xl text-gray-800 font-bold md:text-5xl'>Choose Your Country</h1>

                    <p className='text-xl text-gray-800 font-medium'>Travelers are always looking for inspiration to guide their adventures. Coming up with a list of places to visit can be challenging when you're staring at a globe. What are the top tourist attractions in the world? The most iconic sites that all travelers have on their bucket-list of things to see around the globe?If you're looking to start your own checklist of places to visit during your life, begin with Skyfly for the top tourist attractions in the world.</p>

                    <Link href="/signup" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-pink-700 rounded-xl group w-1/2">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-pink-900 rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-pink-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span className="relative text-left text-white text-xl transition-colors duration-200 ease-in-out group-hover:text-white">Discover more</span>
                    </Link>

                </div>

                {/* div2 */}
                <div className='mt-7 md:mt-32'>

                    <div className='relative'>

                        <img className='h-96 w-[400px] mb-7' src='https://img.freepik.com/free-photo/view-famous-eiffel-tower-paris_268835-831.jpg?w=360&t=st=1672628275~exp=1672628875~hmac=5da1c80f9badaa36c1ed983a4ba73a6df6fb377f2ce88b666a1b49e82102f5d7' alt='paris' />

                        <div className='absolute p-3 left-7 rounded-xl bg-white bottom-7 w-80'>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-2xl font-semibold text-gray-800 mb-2'>Paris, France</p>
                                    <p className='text-sm font-semibold text-gray-800'>11 Jan,2023 - 22 Jan,2023</p>
                                </div>
                                <div>
                                    <h2 className='text-2xl font-semibold text-pink-700 mb-2'>865 $</h2>
                                    <p className='text-xl font-semibold text-gray-800'>10 days</p>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div>

                        <div className='relative'>

                            <img className='h-96 w-[400px] mb-7' src='https://img.freepik.com/free-photo/beautiful-view-skyscrapers-against-cloudy-blue-sky-san-francisco-california_181624-38324.jpg?size=626&ext=jpg&ga=GA1.2.821203553.1657130385&semt=sph ' alt='paris' />

                            <div className='absolute p-3 left-7 rounded-xl bg-white bottom-7 w-80'>
                                <div className='flex justify-between '>
                                    <div>
                                        <p className='text-2xl font-semibold text-gray-800 mb-2'>Sans Francisco</p>
                                        <p className='text-sm font-semibold text-gray-800'>11 Jan,2023 - 22 Jan,2023</p>
                                    </div>
                                    <div>
                                        <h2 className='text-2xl font-semibold text-pink-700 mb-2'>750 $</h2>
                                        <p className='text-xl font-semibold text-gray-800'>10 days</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>


                </div>


                {/* div3 */}
                <div className='-mt-5 md:mt-5'>

                    <div className='relative'>

                        <img className='h-96 w-[400px] mb-7' src='https://img.freepik.com/free-photo/dubai-skyline-downtown-skyscrapers-sunset-modern-architecture-concept-with-highrise-buildings-world-famous-metropolis-united-arab-emirates_231208-7629.jpg?size=626&ext=jpg&ga=GA1.2.821203553.1657130385&semt=sph' alt='paris' />

                        <div className='absolute p-3 left-7 rounded-xl bg-white bottom-7 w-80'>
                            <div className='flex justify-between'>
                                <div>
                                    <p className='text-2xl font-semibold text-gray-800 mb-2'>United Arab</p>
                                    <p className='text-sm font-semibold text-gray-800'>11 Jan,2023 - 22 Jan,2023</p>
                                </div>
                                <div>
                                    <h2 className='text-2xl font-semibold text-pink-700 mb-2'>800 $</h2>
                                    <p className='text-xl font-semibold text-gray-800'>10 days</p>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div>

                        <div className='relative'>

                            <img className='h-96 w-[400px] mb-7' src='https://img.freepik.com/free-photo/cityscape-singapore_335224-688.jpg?size=626&ext=jpg&ga=GA1.2.821203553.1657130385&semt=sphttps://img.freepik.com/free-photo/beautiful-view-skyscrapers-against-cloudy-blue-sky-san-francisco-california_181624-38324.jpg?size=626&ext=jpg&ga=GA1.2.821203553.1657130385&semt=sph ' alt='paris' />

                            <div className='absolute p-3 left-7 rounded-xl bg-white bottom-7 w-80'>
                                <div className='flex justify-between '>
                                    <div>
                                        <p className='text-2xl font-semibold text-gray-800 mb-2'>Singapore</p>
                                        <p className='text-sm font-semibold text-gray-800'>11 Jan,2023 - 22 Jan,2023</p>
                                    </div>
                                    <div>
                                        <h2 className='text-2xl font-semibold text-pink-700 mb-2'>750 $</h2>
                                        <p className='text-xl font-semibold text-gray-800'>10 days</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>


                </div>

            </div>

        </div>
    );
};

export default Destinatition;