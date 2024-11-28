import React from 'react';

function Main({children}) {
    return (
        <div className='text-gray-500 bg-gray-100 mt-20 h-screen'>
            {children}
        </div>
    );
}

export default Main;