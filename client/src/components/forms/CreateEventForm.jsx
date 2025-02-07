import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import {format, set} from 'date-fns'

function CreateEventForm({
    submitEvent, 
    startDate, 
    startTime, 
    endTime,
    onDateChange,
    onStartChange,
    onEndChange,
}) {


    const eventSchema = yup.object({
            name: yup
                .string('Enter Venue Name')
                .min(3, 'Name must be at least 3 characters')
                .max(25, 'Name must be no longer than 25 characters')
                .required('Name is required'),
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

                    <div>
                    <label className='block mb-2 font-medium'>Name</label>
                    <input 
                        type='text' 
                        id='name' 
                        name='name'
                        placeholder=' Artist or Presenters Name'
                        className='block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-700'
                        value={formik.values.name}
                        onChange={formik.handleChange} 
                    />
                    </div>

                    <div>
                    <label className='block mb-2 font-medium'>Start Date</label>
                    <DatePicker 
                        selected={startDate} 
                        onChange={(date) => onDateChange(date)}
                        minDate={new Date()} 
                        className='block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-700'
                        />
                    </div>

                <div className='md:grid grid-cols-1 gap-x-6 sm:grid-cols-2'>
                    <div>
                    <label className='block mb-2 font-medium'>Start Time</label>
                    <DatePicker
                        selected={startTime}
                        onChange={(date) => onStartChange(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"

                        className='block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-700'
                        />
                    </div>
                   
                    <div>
                    <label className='block mb-2 font-medium'>End Time</label>
                    <DatePicker
                        selected={endTime}
                        onChange={(date) => onEndChange(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"

                        className='block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-700'
                        />
                    </div>
                </div>

                    <div>
                    <label className='block mb-2 font-medium'>Description</label>
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
                    </div>

                    <div>
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
                    </div>

                    <div>
                        <button type='submit' className='flex mt-8 w-full justify-center py-4 rounded-md font-semibold bg-transparent border border-ivory hover:bg-slate-800 transition ease-in-out duration-300'>Create Event</button>
                    </div>
                </form>
            </div>
        </div>
      
    );
}

export default CreateEventForm;