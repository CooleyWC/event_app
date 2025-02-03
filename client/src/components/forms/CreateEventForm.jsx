import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';

function CreateEventForm({submitEvent}) {

    const eventSchema = yup.object({
            name: yup
                .string('Enter Venue Name')
                .min(3, 'Name must be at least 3 characters')
                .max(25, 'Name must be no longer than 25 characters')
                .required('Name is required'),
            startTime: yup
                .string('Enter Start Time')
                .required('Start Time is required'),
            endTime: yup
                .string('Enter End Time')
                .required('End Time is required'),
            description: yup
                .string('Enter a brief description of the venue')
                .min(10, 'Description must be at least 10 characters in length')
                .max(200, 'Description must not exceed 200 characters')
                .required('Description is required'),
            imageURL: yup
                .string('Paste the Image URL here'),

        })
    
        const formik = useFormik({
            initialValues: {
                name: '',
                startTime: '',
                endTime: '',
                description: '',
                imageURL: '',
            },
            validationSchema: eventSchema,
            onSubmit: submitEvent,
        })


    return (

        <div className='px-6 bg-ivory dark:bg-slate-950 text-slate-800 mt-[64px] flex justify-center flex-col'>
            
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <h1 className='text-2xl/9 mt-10 text-center text-ivory'>Create Event Form</h1>
                <h2>Where will the event be?</h2>
            </div>
            
            <div className='mt-4 text-black dark:text-ivory sm:mx-auto sm:w-full sm:max-w-sm '>
                <form className='space-y-4' onSubmit={formik.handleSubmit}>
                    <label className='block font-medium'>Name</label>
                    <input 
                        type='text' 
                        id='name' 
                        name='name'
                        placeholder=' Artist or Presenters Name'
                        className='block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-700'
                        value={formik.values.name}
                        onChange={formik.handleChange} 
                    
                    />
                    <label className='block font-medium'>Start Time</label>
                    {/* use react day picker */}
                    <input 
                        type='text'
                        id='startTime'
                        name='startTime'
                        placeholder=' Event Start Time'
                        className='block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-700'
                        value={formik.values.startTime}
                        onChange={formik.handleChange} 
                
                    />
                    <label className='block font-medium'>End Time</label>
                    {/* use react day picker */}
                    <input 
                        type='text'
                        id='endTime'
                        name='endTime'
                        placeholder=' Event End Time'
                        className='block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-700'
                        value={formik.values.endTime}
                        onChange={formik.handleChange} 
                
                    />
                    <label className='block font-medium'>Description</label>
                    {/* use a select dropdown */}
                    <textarea
                        type='text'
                        id='description'
                        name='description'
                        placeholder=' Enter the Description of the Event'
                        rows='7'
                        className='block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-700'
                        value={formik.values.description}
                        onChange={formik.handleChange} 
                    />
                    <label className='block font-medium'>Image URL</label>
                    <input 
                        type='text'
                        id='imageURL'
                        name='imageURL'
                        placeholder=' paste image url'
                        className='block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-700'
                        value={formik.values.imageURL}
                        onChange={formik.handleChange} 
                    />
                    <div>
                        <button type='submit' className='flex mt-8 w-full justify-center py-4 rounded-md font-semibold bg-transparent border border-ivory hover:bg-slate-800 transition ease-in-out duration-300'>Create Event</button>
                    </div>
                </form>
            </div>
        </div>
      
    );
}

export default CreateEventForm;