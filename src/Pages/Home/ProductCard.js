import React from 'react';

const ProductCard = ({ product }) => {
    const { name, img, description, minimumOrder, available, price } = product
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl px-5 rounded-sm">

            <figure><img src={img} alt="Album" /></figure>

            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p className='mb-3'>{description}</p>
                <p className='font-semibold'>Minimum Order: {minimumOrder} units</p>
                <p className='font-semibold'>Available : {available} units</p>
                <p className='font-semibold'>Price : {price}$ /unit</p>

                <div class="card-actions lg:justify-end flex justify-center mt-5">
                    <button class="btn lg:btn-ghost hover:btn">Buy Now</button>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;