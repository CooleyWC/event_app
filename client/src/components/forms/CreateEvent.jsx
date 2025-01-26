import React from 'react';

function CreateEvent() {
    return (
        <div className='w-full pt-2 flex flex-col justify-center align-center'>
            <h1 className='text-ivory text-center'>Create Event</h1>
            <div className='w-full flex justify-center'>
                <form>
                    <div>
                        <label>Event Name</label>
                        <input />
                    </div>
                    <div>
                        <label>Start Time</label>
                        <input />
                    </div>
                    <div>
                        <label>End Time</label>
                        <input />
                    </div>
                    <div>
                        <label>Capacity</label>
                        <input />
                    </div>
                    <div>
                        <label>Description</label>
                        <input />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateEvent;