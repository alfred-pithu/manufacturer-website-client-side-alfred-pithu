import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [feedbacks, setFeedBacks] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/feedbacks', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setFeedBacks(data))
    }, [])
    return (
        <div className='my-32  '>
            <h2 className='font-bold text-3xl text-center mb-5 uppercase'>What our Clients Say</h2>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-5   py-10'>
                {
                    feedbacks.map(f => <ReviewCard key={f._id} review={f}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;