import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Portfolio = () => {
    return (
        <div className=' shadow-lg rounded pl-10 p-5 lg:ml-20'>
            {/* <h2>Portfolio</h2> */}
            <p className='text-md font-semibold'>Name: Alfred Pithu </p>
            <p className='text-md font-semibold my-2'>Email: alfredpithu@gmail.com </p>
            <p className='text-md font-semibold'>Education</p>
            <ul className=''>
                <li className='ml-20 font-medium'>SSC - Science</li>
                <li className='ml-20 font-medium'>HSC - Science</li>
                <li className='ml-20 font-medium'>Honors - Geography and Environmental Science</li>
            </ul>
            <br />
            <p className='text-md font-semibold'>Skills</p>
            <ul>
                <li className='ml-20 font-medium'>HTML</li>
                <li className='ml-20 font-medium'>CSS</li>
                <li className='ml-20 font-medium'>Bootstrap , Tailwind</li>
                <li className='ml-20 font-medium'>Javascript , ES6 , Typescript , Wordpress</li>
                <li className='ml-20 font-medium'>React JS</li>
                <li className='ml-20 font-medium'>Git</li>
            </ul>

            <p className='text-md font-semibold my-4'>My Projects</p>
            <ul>
                <li className='ml-20 font-medium text-blue-600'><a target='_blank' rel="noreferrer" href="https://journalist-piyas-biswas.web.app/"> Website of a Journalist <FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a></li>
                <li className='ml-20 font-medium text-blue-600'><a target='_blank' rel="noreferrer" href="https://car-reviews-site-alfred-pithu.netlify.app/"> Car Review Website <FontAwesomeIcon icon={faLink}></FontAwesomeIcon></a></li>
                <li className='ml-20 font-medium text-blue-600'><a target='_blank' rel="noreferrer" href="https://assignment-11-67ccf.web.app/"> Ishop  <FontAwesomeIcon icon={faLink}></FontAwesomeIcon> </a></li>
            </ul>
        </div>
    );
};

export default Portfolio;