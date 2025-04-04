import React from 'react';

function Main({children}) {
    return (
        <div className='text-gray-500 bg-la-light-gray-extra-light dark:bg-la-gray mt-16 pt-16 min-h-screen sm:ml-[16rem]'>
            {children}
        </div>
    );
}

export default Main;