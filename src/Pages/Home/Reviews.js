import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const { data: feedbacks, refetch } = useQuery('feedbacks', () => fetch('https://frozen-tundra-73079.herokuapp.com/feedbacks').then(res => res.json()))

    return (
        <div className='mt-32  '>
            <h2 className='font-bold text-3xl text-center mb-5 uppercase'>What our Clients Say</h2>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-5   py-10'>
                {
                    feedbacks?.map(f => <ReviewCard key={f._id} review={f}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;