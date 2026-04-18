import React from 'react';
import { FiPlus } from "react-icons/fi";

const MainPage = () => {
    return (
        <div className='w-11/12 mx-auto'>
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

            <div className='grid grid-cols-2 md:grid-cols-4 gap-10 mb-10'>
                <div className='bg-base-100 rounded-lg shadow-sm space-y-2 py-8'>
                    <p className='text-3xl text-center font-semibold text-[#244d3f]'>
                        10
                    </p>
                    <p className='text-center text-[#64748B]'>
                        Total Friends
                    </p>
                </div>
                <div className='bg-base-100 rounded-lg shadow-sm space-y-2 py-8'>
                    <p className='text-3xl text-center font-semibold text-[#244d3f]'>
                        3
                    </p>
                    <p className='text-center text-[#64748B]'>
                        On Track
                    </p>
                </div>
                <div className='bg-base-100 rounded-lg shadow-sm space-y-2 py-8'>
                    <p className='text-3xl text-center font-semibold text-[#244d3f]'>
                        6
                    </p>
                    <p className='text-center text-[#64748B]'>
                        Need Attention
                    </p>
                </div>
                <div className='bg-base-100 rounded-lg shadow-sm space-y-2 py-8'>
                    <p className='text-3xl text-center font-semibold text-[#244d3f]'>
                        12
                    </p>
                    <p className='text-center text-[#64748B]'>
                        Interactions This Month
                    </p>
                </div>
            </div>
            <div className="flex w-full flex-col mb-10">
                <div className="divider"></div>
            </div>
        </div>
    );
};

export default MainPage;