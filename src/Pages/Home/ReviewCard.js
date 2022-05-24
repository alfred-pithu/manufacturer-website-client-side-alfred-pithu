import React from 'react';

const ReviewCard = ({ review }) => {
    const { email, name, comment } = review
    return (
        <div className="card lg:max-w-lg w-full  bg-base-100 shadow-xl rounded mx-auto ">
            <div className="card-body">

                <p>' {comment} '</p>
                <h2 className=" text-right font-semibold">{email}</h2>

            </div>
        </div>
    );
};

export default ReviewCard;