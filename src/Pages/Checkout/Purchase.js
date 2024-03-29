import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const [warning, setWarning] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [isDisabled, setIsDisabled] = useState(null)
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [item, setItem] = useState({})

    const { _id, name, img, description, minimumOrder, available, price } = item;

    //getting the item's info
    useEffect(() => {
        fetch(` https://manufacturer-server-l39p.onrender.com/oneitem/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])


    const quantityHandle = event => {
        setIsDisabled(false)
        setWarning('')
        const stringInput = event.target.value
        const input = parseInt(stringInput);

        if (minimumOrder > input) {
            setIsDisabled(true)
            setWarning(`You have to order atleast ${minimumOrder} units`)
        }
        else if (available < input) {
            setIsDisabled(true)
            setWarning(`Can not order more than ${available} units`)
        }
        else {
            setQuantity(input)
        }
    }

    const placeOrder = e => {
        e.preventDefault()
        const email = user.email;
        const itemId = _id
        const orderQuantity = parseInt(e.target.orderQuantity.value)
        const totalPrice = parseInt(e.target.totalPrice.value)
        const customerName = e.target.customerName.value
        const itemName = name;
        const contact = e.target.contact.value
        const address = e.target.address.value

        const orderSummary = {
            email,
            itemId,
            itemName,
            orderQuantity,
            totalPrice,
            customerName,
            contact,
            address
        }
        console.log(orderSummary);

        fetch(' https://manufacturer-server-l39p.onrender.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('jwtToken')}`
            },
            body: JSON.stringify(orderSummary)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Order Placed Successfully')
                }
            })

        e.target.reset()
    }

    return (
        <div className='mb-20'>

            <div className='mb-10 mt-5 text-center'>
                <h3 className='font-semibold '>  <span>{user?.displayName}</span></h3>
                <h3 className='font-semibold  text-green-700'>  <span>{user?.email}</span></h3>
            </div>

            {/* Product info */}
            <div className="card lg:card-side bg-base-100 lg:max-w-4xl lg:max-h-72  rounded-sm  mx-auto shadow px-5 ">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body  ">
                    <div className='gap-5 flex flex-col'>
                        <h2 className="card-title">{name}</h2>
                        <p className=''>{description}</p>
                        <p className='font-semibold'>Minimum Order: {minimumOrder} units</p>
                        <p className='font-semibold'>Available : {available} units</p>
                        <p className='font-semibold'>Price : {price}$ /unit</p>
                    </div>

                </div>

            </div>

            {/* Form */}
            <div className='mt-20'>
                <form onSubmit={placeOrder} className='form-control lg:max-w-lg gap-y-5 mx-auto' action="">
                    <input className=' input input-bordered rounded' placeholder='Email' readOnly value={user?.email} type="email" name="email" />

                    <input required className=' input input-bordered rounded' placeholder='Name' value={user?.displayName} type="text" name="customerName" />

                    <input required className=' input input-bordered rounded' placeholder='Contact' type="text" name="contact" />

                    <input required onChange={quantityHandle} className=' input input-bordered rounded' placeholder='Order Quantity' type="number" name="orderQuantity" />

                    <input required className=' input input-bordered rounded' placeholder='Total' readOnly value={price * quantity} type="number" name="totalPrice" />

                    <span className='text-red-500 text-sm'>{warning}</span>
                    <input required className=' input input-bordered rounded' placeholder='Address' type="text" name="address" />

                    <input className='btn ' disabled={isDisabled} type="submit" value='Place Order' />
                </form>
            </div>

        </div>
    );
};

export default Purchase;