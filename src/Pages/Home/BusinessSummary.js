import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faEarthAsia, faListCheck, faUsers, faCommentSmile, faComment, faCommentSms } from '@fortawesome/free-solid-svg-icons'

import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='  mt-24 shadow-lg py-10'>

            <div className='text-center  mb-10 uppercase'>
                <h2 className='text-3xl font-bold'>Millions Buisness Trust Us</h2>
                <h2 className='text-xl font-semibold mt-4'>We Try To Understand users expectation</h2>
            </div>

            <div className='flex justify-center'>

                <div className="stats stats-vertical lg:stats-horizontal   text-center  ">

                    <div className="stat lg:w-80  border-none ">
                        <div className="stat-title mb-3 ">
                            <FontAwesomeIcon icon={faEarthAsia} size='2x'></FontAwesomeIcon>
                        </div>
                        <div className="stat-value">72</div>
                        <div className="stat-desc font-bold mt-2">Countries</div>
                    </div>

                    <div className="stat lg:w-80  border-none">
                        <div className="stat-title mb-3">
                            <FontAwesomeIcon icon={faListCheck} size='2x'></FontAwesomeIcon>
                        </div>
                        <div className="stat-value">535+</div>
                        <div className="stat-desc font-bold mt-2">Complete Projects</div>
                    </div>

                    <div className="stat lg:w-80  border-none ">
                        <div className="stat-title mb-3">
                            <FontAwesomeIcon icon={faUsers} size='2x'></FontAwesomeIcon>
                        </div>
                        <div className="stat-value">273+</div>
                        <div className="stat-desc font-bold mt-2">Happy Clients</div>
                    </div>

                    <div className="stat lg:w-80  border-none ">
                        <div className="stat-title mb-3">
                            <FontAwesomeIcon icon={faComment} size='2x'></FontAwesomeIcon>
                        </div>
                        <div className="stat-value">432+</div>
                        <div className="stat-desc font-bold mt-2">FeedBacks</div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default BusinessSummary;