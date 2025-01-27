import React from 'react';

function CreateEvent() {
    return (
        <div className='w-full pt-2 flex flex-col justify-center align-center'>
            <h1 className='text-ivory text-center'>Create Event</h1>
            <div className='w-full flex justify-center'>
                <form>
                    <div>
                        <label className='block text-ivory'>Event Name</label>
                        <input />
                    </div>
                    <div>
                        <label className='block text-ivory'>Start Time</label>
                        <input />
                    </div>
                    <div>
                        <label className='block text-ivory'>End Time</label>
                        <input />
                    </div>
                    <div>
                        <label className='block text-ivory'>Capacity</label>
                        <input />
                    </div>
                    <div>
                        <label className='block text-ivory'>Description</label>
                        <input />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateEvent;