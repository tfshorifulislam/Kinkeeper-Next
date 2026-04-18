import Image from 'next/image';
import React from 'react';

const CreateFriendCards = ({ friendsData }) => {
    return (
        <div className='bg-base-100 shadow-md rounded-md p-6 flex flex-col justify-center items-center'>
            <div>
                <Image
                    className='rounded-full mb-3'
                    width={100}
                    height={100}
                    src={friendsData.picture} alt={friendsData.name} />
            </div>
            <div className='space-y-2 text-center'>
                <p className='font-semibold text-xl text-[#1F2937] '>
                    {friendsData.name}
                </p>
                <p className='text-[12px] text-[#64748B]'>
                    {friendsData.days_since_contact}d ago
                </p>
                <p className='flex flex-col md:flex-row gap-2 justify-center text-[#244D3F] font-medium text-[12px]'>
                    {
                        friendsData.tags.map((tag, i) => <span key={i}
                            className='bg-[#CBFADB] py-2 px-6 rounded-full'>
                            {tag}
                        </span>)
                    }
                </p>
                <div
                    className={` rounded-full py-2 text-white font-medium text-[12px]
                ${friendsData.status === 'overdue' ? 'bg-[#EF4444]' :
                            friendsData.status === 'almost due' ? 'bg-[#EFAD44]' :
                                friendsData.status === 'on-track' ? 'bg-[#244D3F]' : ''
                        }`
                    }>
                    {friendsData.status}
                </div>
            </div>
        </div >
    );
};

export default CreateFriendCards;