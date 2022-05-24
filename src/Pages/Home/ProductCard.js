import React from 'react';

const ProductCard = ({ product }) => {
    const { name, img, description, minimumOrder, available, price } = product
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl px-5 rounded-sm">

            <figure><img src={img} alt="Album" /></figure>

            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='mb-3'>{description}</p>
                <p className='font-semibold'>Minimum Order: {minimumOrder} units</p>
                <p className='font-semibold'>Available : {available} units</p>
                <p className='font-semibold'>Price : {price}$ /unit</p>

                <div className="card-actions lg:justify-end flex justify-center mt-5">
                    <button className="btn lg:btn-ghost hover:btn">Buy Now</button>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;