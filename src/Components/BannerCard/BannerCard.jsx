import React from 'react';

const BannerCard = () => {
    return (
        <div>
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
        </div>
    );
};

export default BannerCard;