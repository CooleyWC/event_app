import React from 'react';

function CreateEvent() {
    return (

        <div className='px-6 bg-ivory dark:bg-slate-950 text-slate-800 mt-[64px] flex justify-center flex-col'>
            
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <h1 className='text-2xl/9 mt-10 text-center text-ivory'>Create Event</h1>
            </div>
            
            <div className='mt-4 text-black dark:text-ivory sm:mx-auto sm:w-full sm:max-w-sm '>
                <form className='space-y-4'>
                    <label className='block font-medium'>Name</label>
                    <input 
                        type='name' 
                        id='name' 
                        name='name'
                        placeholder=' Artist or Presenters Name'
                        className='block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-700' 
                    
                    />
                    <label className='block font-medium'>Start Time</label>
                    {/* use react day picker */}
                    <input 
                        type='Start Time'
                        id='Start Time'
                        name='Start Time'
                        placeholder=' Event Start Time'
                        className='block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-700' 
                
                    />
                    <label className='block font-medium'>End Time</label>
                    {/* use react day picker */}
                    <input 
                        type='End Time'
                        id='End Time'
                        name='End Time'
                        placeholder=' Event End Time'
                        className='block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-700' 
                
                    />
                    <label className='block font-medium'>Description</label>
                    {/* use a select dropdown */}
                    <textarea
                        type='Description'
                        id='Description'
                        name='Description'
                        placeholder=' Enter the Description of the Event'
                        rows='7'
                        className='block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-700' 
                
                    />
                    <div>
                        <button type='submit' className='flex mt-8 w-full justify-center py-4 rounded-md font-semibold bg-transparent border border-ivory hover:bg-slate-800 transition ease-in-out duration-300'>Create Event</button>
                    </div>
                </form>
            </div>
        </div>
      
    );
}

export default CreateEvent;