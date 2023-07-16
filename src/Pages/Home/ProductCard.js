import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { _id, name, img, description, minimumOrder, available, price } = product
    return (
        <div className="card lg:card-side lg:h-80 bg-base-100 shadow-xl px-5  rounded-lg ">

            <figure className=' lg:w-2/3'><img src={img} alt="Album" /></figure>

            <div className="card-body  text-xs  ">

                <h2 className="card-title">{name}</h2>
                <p className='mb-3 text-justify '>{description}</p>
                <p className='font-semibold '>Minimum Order: {minimumOrder} units</p>
                <p className='font-semibold'>Available : {available} units</p>
                <p className='font-semibold'>Price : {price}$ /unit</p>

                <div className="card-actions lg:ml-auto flex justify-center mt-5  ">
                    <Link to={`/purchase/${_id}`} className="btn btn-outline ">Buy Now</Link>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;