'use client'
import React, { useEffect, useState } from 'react';
import CreateFriendCards from '../CreateFriendCards/CreateFriendCards';

export const DataFetch = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const friendsData = async () => {
            const res = await fetch('https://api.jsonbin.io/v3/b/69e36b5daaba882197114386')
            const data = await res.json()
            console.log(data);
            setData(data.record);
        }
        friendsData()
    }, [])

    return (
        <div>
            <div>
                <p className='font-semibold text-lg md:text-2xl text-[#1F2937] mb-2 md:mb-4'>
                    Your Friends
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    data.map(friendsData => <CreateFriendCards key={friendsData.id} friendsData={friendsData} />)
                }
            </div>
        </div>
    );
};

export default DataFetch;