import React from 'react';
import { FiPlus } from 'react-icons/fi';

const Banner = () => {
    return (
        <div>
            <div className='space-y-4 mb-8 flex flex-col mt-20 justify-center'>
                <h1 className='font-bold text-4xl text-[#1F2937] text-center'>
                    Friends to keep close in your life
                </h1>
                <p className='text-center text-[#64748B]'>
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>
            </div>
            <div className='flex justify-center mb-10'>
                <button className='btn text-white font-semibold bg-[#244D3F] rounded-sm flex justify-center items-center'>
                    <FiPlus />
                    Add a Friend
                </button>
            </div>

        </div>
    );
};

export default Banner;