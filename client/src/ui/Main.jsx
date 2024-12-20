import React from 'react';

function Main({children}) {
    return (
        <div className='text-gray-500 bg-gray-100 mt-16 h-screen sm:ml-[16rem]'>
            {children}
        </div>
    );
}

export default Main;