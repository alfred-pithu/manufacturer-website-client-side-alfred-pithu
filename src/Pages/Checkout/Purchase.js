import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams();
    const [item, setItem] = useState({})

    const { name, img, description, minimumOrder, available, price } = item;

    useEffect(() => {
        fetch(`http://localhost:5000/oneitem/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])

    return (
        <div className='mb-20'>

            <div className='mb-10 mt-5 '>
                <h3 className='font-semibold text-right'>  <span>{user?.displayName}</span></h3>
                <h3 className='font-semibold text-right'>  <span>{user?.email}</span></h3>
            </div>

            {/* Product info */}
            <div className="card lg:card-side bg-base-100 lg:max-w-4xl rounded-sm border mx-auto ">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className=''>{description}</p>
                    <p className='font-semibold'>Minimum Order: {minimumOrder} units</p>
                    <p className='font-semibold'>Available : {available} units</p>
                    <p className='font-semibold'>Price : {price}$ /unit</p>

                </div>

            </div>

            {/* Form */}
            <div className='mt-20'>
                <form className='form-control lg:max-w-lg gap-y-5 mx-auto' action="">
                    <input className=' input input-bordered rounded' placeholder='Email' readOnly value={user.email} type="email" name="email" />
                    <input className=' input input-bordered rounded' placeholder='Name' type="text" name="name" />
                    <input className=' input input-bordered rounded' placeholder='Contact' type="number" name="contact" />
                    <input className=' input input-bordered rounded' placeholder='Order Quantity' type="number" name="orderQuantity" />
                    <input className=' input input-bordered rounded' placeholder='Address' type="text" name="address" />

                    <input className='btn ' type="submit" value='Place Order' />
                </form>
            </div>

        </div>
    );
};

export default Purchase;