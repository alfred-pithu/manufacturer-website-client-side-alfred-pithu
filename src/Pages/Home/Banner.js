import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full border my-5">
            <div id="slide1" className="carousel-item relative w-full flex justify-center ">
                <img src="https://i.ibb.co/7QD3PdW/Casing.jpg" className="w-82 lg:w-1/4 " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full flex justify-center">
                <img src="https://i.ibb.co/K0XhJtD/CPU-cooler.jpg" className="w-82 lg:w-1/4 " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full flex justify-center">
                <img src="https://i.ibb.co/Jj6TwHv/Motherboard.jpg" className="w-82 lg:w-1/4" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;