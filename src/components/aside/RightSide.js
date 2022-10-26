import React from 'react';

const RightSide = () => {
    return (
        <div className='py-10 border-l flex justify-center items-center flex-col min-h-screen sticky top-0'>
            {/* User Profile */}
            <div>
                <img src="" alt="User Avatar" />
            </div>
            <div className='my-10'>
                <p>Name</p>
                <p>Email Varified:</p>
                <p>Email:</p>
                <button className='bg-pinkBtn my-5 px-2 py-1 rounded-md text-white hover:bg-pink-500'>Logout</button>
            </div>
        </div>
    );
};

export default RightSide;