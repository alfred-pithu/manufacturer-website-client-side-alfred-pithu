import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Footer from '../Shared/Footer';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className=''>


            {/* //Carousel */}
            <Banner></Banner>

            <Products></Products>

            <BusinessSummary></BusinessSummary>

            <Reviews></Reviews>


        </div>
    );
};

export default Home;