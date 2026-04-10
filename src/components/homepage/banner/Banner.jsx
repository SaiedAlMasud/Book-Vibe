import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-base-300 w-11/12 mx-auto rounded-2xl py-10 container">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                <img
                    src="\src\assets\pngwing 1.png"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className='space-y-10'>
                    <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn btn-success">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;