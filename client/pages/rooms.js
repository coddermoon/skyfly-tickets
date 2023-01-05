import { useEffect, useState } from 'react'
import Card from '../components/Card/Card';

const Rooms = () => {
    const [cardInfo, setCardInfo] = useState([])
    const [room, setRoom] = useState('classic')
    const allCategory = ['classic', 'luxury', 'double', 'single']

    const getData = (category) => {
        setRoom(category)
    }

    useEffect(() => {
        fetch(`https://skyfly-server.vercel.app/api/rooms?category=${room}`)
            .then(res => res.json())
            .then(data => setCardInfo(data))
    }, [room])


    return (
        <div className='space-y-7 px-8 my-8' >
            <p className='text-pink-800 text-xl'>Our Rooms</p>
            <h2 className='text-5xl text-gray-800 font-bold'>Choose your room</h2>

            <div className='flex space-x-7'>

                {
                    allCategory.map((cat, index) => <div key={index}><p onClick={() => getData(cat)} className='text-xl text-semibold text-gray-800 hover:text-pink-800 font-semibold capitalize'>{cat}</p></div>)
                }

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    cardInfo.map(card => <Card
                        key={card._id}
                        card={card}
                    />)
                }
            </div>

        </div>
    );
};

export default Rooms;
