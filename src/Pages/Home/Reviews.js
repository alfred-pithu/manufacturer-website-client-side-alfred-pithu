import { useQuery } from 'react-query';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const { data: feedbacks, refetch } = useQuery('feedbacks', () => fetch(' https://manufacturer-server-l39p.onrender.com/feedbacks').then(res => res.json()))

    return (

        <div>

            {
                feedbacks?.length > 1 || <div className='flex justify-around my-5' >


                    <span className="loading loading-spinner loading-lg"></span>
                    <span className="loading loading-spinner loading-lg"></span>
                    <span className="loading loading-spinner loading-lg"></span>


                </div>
            }

            <div className='mt-32  '>
                <h2 className='font-bold text-3xl text-center mb-5 uppercase'>What our Clients Say</h2>
                <div className=' grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-5   py-10'>
                    {
                        feedbacks?.map(f => <ReviewCard key={f._id} review={f}></ReviewCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;