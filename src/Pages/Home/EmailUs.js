import React from 'react';

const EmailUs = () => {
    return (
        <div class="hero  bg-base-100 mt-20 ">
            <div class="hero-content flex-col lg:flex-row-reverse gap-10">
                <img src="https://i.ibb.co/7RnJZtX/Hnet-com-image-2.jpg" class=" rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-4xl font-bold">Email Us for Your Query</h1>
                    <p class="py-6">Got an Question ? Reach us Directly!</p>
                    <a target='_blank' href="https://mail.google.com/mail/u/0/?tab=rm&ogbl"><button class="btn btn-error text-white rounded px-5">Email</button></a>
                </div>
            </div>
        </div>
    );
};

export default EmailUs;