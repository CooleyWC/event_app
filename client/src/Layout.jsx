import React from 'react';

function Layout() {
    return (
        <div className='mt-18 pt-32 md:pt-44 px-4 lg:pt-52 lg:px-10 h-screen w-full flex flex-col lg:flex-row gap-4 bg-ivory dark:bg-gray-800 text-slate-800'>
            <section className='w-full lg:w-[80%] xl:w-[70%] mx-auto flex flex-col gap-2 lg:gap-8'>
                <h1 className='text-2xl md:text-4xl lg:text-5xl xl:text-8xl text-center font-mulish font-bold dark:text-ivory '>PARLOR STAGES</h1>
                <h2 className='mx-6 md:mx-8 lg:mx-12 xl:mx-24 text-xl xl:text-4xl font-semibold text-center font-mulish dark:text-ivory'>Bring the Magic of Intimate Performances to Your Space</h2>
                <p className='mx-6 md:mx-8 lg:mx-12 xl:mx-24 font-mulish text-lg dark:text-ivory '>Experience the charm and elegance of early 20th-century parlor concerts with Parlor Stages. Whether you're hosting a cozy gathering or organizing a unique event, our platform makes it easy to connect with performers and create unforgettable experiences in the comfort of your home or a special venue. From solo recitals to small ensemble performances, rediscover the personal touch of live music. Host, attend, and enjoy concerts the way they were meant to be—up close and personal.</p>
            </section>
            <picture className='lg:w-[70%] mx-auto'>
                {/* <source srcSet='client/src/assets/images/living-room.png' /> */}
                <img 
                    src='../src/assets/images/living-room.png' alt='living room with guitar' 
                    className='object-cover max-w-full'
                    />
            </picture>
            
        </div>
    );
}

export default Layout;