import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { _id, name, img, description, minimumOrder, available, price } = product
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl px-5 rounded-sm">

            <figure className=''><img src={img} alt="Album" /></figure>

            <div className="card-body  lg:min-w-[70%] ">

                <h2 className="card-title">{name}</h2>
                <p className='mb-3'>{description}</p>
                <p className='font-semibold'>Minimum Order: {minimumOrder} units</p>
                <p className='font-semibold'>Available : {available} units</p>
                <p className='font-semibold'>Price : {price}$ /unit</p>

                <div className="card-actions lg:justify-end flex justify-center mt-5">
                    <Link to={`/purchase/${_id}`} className="btn lg:btn-ghost hover:btn">Buy Now</Link>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;