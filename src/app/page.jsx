import Banner from '@/Components/Banner/Banner';
import BannerCard from '@/Components/BannerCard/BannerCard';
import DataFetch from '@/Components/DataFecth/DataFetch';
import React from 'react';

const MainPage = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner />
            <BannerCard />
            <div className="flex w-full flex-col mb-10">
                <div className="divider"></div>
            </div>
            <DataFetch/>
        </div>
    );
};

export default MainPage;