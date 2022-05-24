import React from 'react';
import Banner from './Banner';
import Products from './Products';

const Home = () => {
    return (
        <div className=''>
            <h2 className='text-3xl text-primary text-center'>Home sweet home</h2>

            {/* //Carousel */}
            <Banner></Banner>

            <Products></Products>

        </div>
    );
};

export default Home;