import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {useNavigate} from 'react-router-dom'


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import useEventFormData from '../context/EventFormData';
import useVenueFormData from '../context/VenueFormData';



// import {format, set} from 'date-fns'

function CreateEventForm({
    submitEvent, 
    startDate, 
    eventStart, 
    eventEnd,
    onDateChange,
    onStartChange,
    onEndChange,
    handleBackClick,
}) {

    let navigate = useNavigate();

    const {venueFormData, saveVenueFormData, clearVenueFormData} = useVenueFormData();
    const {eventFormData, saveEventFormData, clearEventFormData} = useEventFormData();

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

        <div className='lg:flex lg:justify-center lg:align-center'>
        <div className='px-6 w-full max-w-[1000px] bg-ivory dark:bg-gray-800 text-slate-800 flex flex-col'>

        <div className='bg-ivory dark:bg-gray-800 text-slate-800 flex flex-col'>
            
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <h1 className='text-3xl/9 mt-10 mb-2 font-semibold text-center text-ivory'>Create Event Form</h1>
                
               
            </div>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm bg-gray-900 p-4'>
                { venueFormData && (
                    <p className='text-white text-center text-lg'>For this Venue: {venueFormData.name}, {venueFormData.street}</p>
                    )}
            </div>
            

            <div className='mt-4 text-black dark:text-ivory sm:mx-auto sm:w-full'>
                <form className='space-y-4' onSubmit={formik.handleSubmit}>

                    <div>
                    <label className='block mb-2 font-medium'>Name</label>
                    <input 
                        type='text' 
                        id='name' 
                        name='name'
                        placeholder='e.g Hall and Oates'
                        className='pl-2 border border-transparent focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-transparent block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder:italic placeholder-gray-600'
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
                        className='pl-2 border border-transparent focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-transparent block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-600'
                        />
                    </div>

                <div className='md:grid grid-cols-1 gap-x-6 sm:grid-cols-2 space-y-4 md:space-y-0'>
                    <div>
                    <label className='block mb-2 font-medium'>Start Time</label>
                    <DatePicker
                        selected={eventStart}
                        onChange={(date) => onStartChange(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        className='pl-2 border border-transparent focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-transparent block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-600'
                        />
                    </div>
                   
                    <div>
                    <label className='block mb-2 font-medium'>End Time</label>
                    <DatePicker
                        selected={eventEnd}
                        onChange={(date) => onEndChange(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"

                        className='pl-2 border border-transparent focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-transparent block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-600'
                        />
                    </div>
                </div>

                    <div>
                    <label className='block mb-2 font-medium'>Description</label>
                    <textarea
                        type='text'
                        id='description'
                        name='description'
                        placeholder='Hall & Oates is an American pop rock duo formed by Daryl Hall and John Oates in the early 1970s, known for their fusion of rock, soul, and R&B...'
                        rows='7'
                        className='pl-2 border border-transparent focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-transparent block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder:italic placeholder-gray-500'
                        value={formik.values.description}
                        onChange={formik.handleChange} 
                    />
                    </div>

                    <div className='space-y-4'>
                    <label className='block font-medium'>Image URL</label>
                    <input 
                        type='text'
                        id='imageURL'
                        name='imageURL'
                        placeholder='www.hallandoats.org/images.jpg'
                        className='pl-2 border border-transparent focus:outline-none focus:ring-4 focus:ring-blue-600 focus:border-transparent block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder:italic placeholder-gray-500'
                        value={formik.values.imageURL}
                        onChange={formik.handleChange} 
                    />
                    </div>

                    <div>
                        <button type='submit' className='flex mt-8 w-full justify-center py-6 rounded-md text-xl font-semibold bg-gray-600 dark:text-white hover:bg-gray-700 hover:text-ivory transition ease-in-out duration-300 text-transform: uppercase'>Create Event</button>
                    </div>
                    
                </form>
                <div className='flex justify-start align-center'>
                        <button onClick={handleBackClick} className=' dark:text-white text-black border-solid border-2 rounded-md p-1 hover:bg-gray-700 mt-6'>Back to Venue Form</button>
                </div>
            </div>
        </div>


        </div>
        </div>
      
    );
}

export default CreateEventForm;