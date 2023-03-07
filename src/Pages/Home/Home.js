import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Products from './Products';
import Reviews from './Reviews';
import InventoryVisit from './InventoryVisit';
import EmailUs from './EmailUs';

const Home = () => {
    return (
        <div className=''>


            {/* //Carousel */}
            <Banner></Banner>

            <Products></Products>

            <BusinessSummary></BusinessSummary>

            <Reviews></Reviews>

            <InventoryVisit></InventoryVisit>

            <EmailUs></EmailUs>
        </div>
    );
};

export default Home;