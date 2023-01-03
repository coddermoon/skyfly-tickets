import React from 'react';

const Rooms = () => {
    return (
        <div className='space-y-7 px-8 my-8'>
            <p className='text-pink-800 text-xl'>Our Rooms</p>
            <h2 className='text-5xl text-gray-800 font-bold'>Choose your room</h2>
            <div className='flex space-x-7'>
                <div><p className='text-xl text-semibold text-gray-800 hover:text-pink-800 font-semibold'>Classic</p></div>
                <div><p className='text-xl text-semibold text-gray-800 hover:text-pink-800 font-semibold'>Luxury</p></div>
                <div><p className='text-xl text-semibold text-gray-800 hover:text-pink-800 font-semibold'>Double</p></div>
                <div><p className='text-xl text-semibold text-gray-800 hover:text-pink-800 font-semibold'>Single</p></div>
            </div>

            {/* CARD */}



        </div>
    );
};

export default Rooms;
