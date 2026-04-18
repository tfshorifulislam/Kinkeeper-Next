import Image from 'next/image';
import React from 'react';

const CreateFriendCards = ({ friendsData }) => {
    return (
        <div className='bg-base-100 p-6 flex flex-col justify-center items-center'>
            <div>
                <Image
                    width={80}
                    height={80}
                    src={friendsData.picture} alt={friendsData.name} />
            </div>
        </div>
    );
};

export default CreateFriendCards;