import React from 'react';

const InventoryVisit = () => {
    return (
        <div className="hero  bg-base-100 my-10">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <img src="https://i.ibb.co/V9fcWY8/Hnet-com-image-1.jpg" className=" rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-4xl font-bold">Book To Visit Our Inventory</h1>
                    <p className="py-6">Come and see how we process your products</p>
                    <a target='_blank' href="https://www.booking.com/"><button className="btn btn-error text-white rounded">Book Now</button></a>
                </div>
            </div>
        </div>
    );
};

export default InventoryVisit;