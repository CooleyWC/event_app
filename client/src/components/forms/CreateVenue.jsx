import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
import useVenueFormData from '../context/VenueFormData';

function CreateVenue({submitVenue}) {

    const {venueFormData, saveVenueFormData, clearVenueFormData} = useVenueFormData();

    const venueSchema = yup.object({
        name: yup
            .string('Enter Venue Name')
            .min(3, 'Name must be at least 3 characters')
            .max(25, 'Name must be no longer than 25 characters')
            .required('Name is required'),
        street: yup
            .string('Enter Street Address')
            .min(7, 'Street Address must be at least 7 characters')
            .max(35, 'Street Address must be no longer than 25 characters')
            .required('Street is required'),
        city: yup
            .string('Enter City Name')
            .min(3, 'City must be at least 4 characters')
            .max(25, 'City must be no longer than 25 characters')
            .required('City is required'),
        state: yup
            .string('Enter State Name')
            .min(2, 'Use the 2 character abbreviation')
            .max(2, 'Use the 2 character abbreviation')
            .required('State is required'),
        zip: yup
            .string('5 digit Zip code')
            .matches(/^\d{5}$/, 'Zip must be exactly 5 digits')
            .required('Zip is required'),
        capacity: yup
            .number('Enter Venue Capacity')
            .required('Capacity is required'),
        description: yup
            .string('Enter a brief description of the venue')
            .min(10, 'Description must be at least 10 characters in length')
            .max(200, 'Description must not exceed 200 characters')
            .required('Description is required'),
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            capacity: 3,
            description: ''
        },
        validationSchema: venueSchema,
        onSubmit: submitVenue,
    })


    return (

        <div className='px-6 bg-ivory dark:bg-slate-950 text-slate-800 flex flex-col'>
            
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <h1 className='text-2xl/9 mt-10 text-center text-ivory'>Create Venue</h1>
                <h2 className='text-lg/9  text-center text-ivory'>Where will the event be?</h2>
            </div>
            
            <div className='mt-4 text-black dark:text-ivory sm:mx-auto sm:w-full'>
                <form className='space-y-4' onSubmit={formik.handleSubmit}>

                    <div>
                    <label className='mb-2 block font-medium'>Name</label>
                    <input 
                        type='text' 
                        id='name' 
                        name='name'
                        placeholder=' Name of the Venue'
                        className='block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-700'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className='text-red-500'>{formik.errors.name}</div>
                    ): null}
                    </div>


                    <div>
                    <label className='block mb-2 font-medium'>Street address</label>
                    <input 
                        type='text'
                        id='street'
                        name='street'
                        placeholder=' Street'
                        className='block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-700' 
                        value={formik.values.street}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.street && formik.errors.street ? (
                        <div className='text-red-500'>{formik.errors.street}</div>
                    ): null}
                    </div>
                    

                    
                    <div className='md:grid grid-cols-1 gap-x-6 sm:grid-cols-6'>
                        <div className='col-span-1 sm:col-span-2'>
                
                        <label className='block mb-2 font-medium'>City</label>
                        <input 
                            type='text'
                            id='city'
                            name='city'
                            placeholder=' City'
                            className='block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-700' 
                            value={formik.values.city}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.city && formik.errors.city ? (
                            <div className='text-red-500'>{formik.errors.city}</div>
                        ): null}
                    </div>
                    <div className='col-span-1 sm:col-span-2'>
                        <label className='block mb-2 font-medium'>State / Province</label>
                        <input
                            type='text'
                            id='state'
                            name='state'
                            placeholder=' State'
                            rows='7'
                            className='block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-700' 
                            value={formik.values.state}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.state && formik.errors.state ? (
                            <div className='text-red-500'>{formik.errors.state}</div>
                        ): null}
                    </div>
                    <div className='col-span-1 sm:col-span-2'>
                        <label className='block mb-2 font-medium'>Zip / Postal Code</label>
                        <input
                            type='text'
                            id='zip'
                            name='zip'
                            placeholder=' Zip'
                            className='block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-700' 
                            value={formik.values.zip}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.zip && formik.errors.zip ? (
                            <div className='text-red-500'>{formik.errors.zip}</div>
                        ): null}
                    </div>

                    </div>


                    <div>
                    <label className='block mb-2 font-medium'>Capacity</label>
                    <input
                        type='number'
                        id='capacity'
                        name='capacity'
                        className='block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-700' 
                        value={formik.values.capacity}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.capacity && formik.errors.capacity ? (
                        <div className='text-red-500'>{formik.errors.capacity}</div>
                    ): null}
                    </div>

                    <div>
                    <label className='block mb-2 font-medium'>Description</label>
                    <textarea
                        type='text'
                        id='description'
                        name='description'
                        placeholder=' Description 200 character max'
                        rows='4'
                        className='block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder-gray-700' 
                        value={formik.values.description}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.description && formik.errors.description ? (
                        <div className='text-red-500'>{formik.errors.description}</div>
                    ): null}
                    </div>

                    <div>
                        <button type='submit' className='flex mt-8 w-full justify-center py-4 rounded-md font-semibold bg-periwinkle dark:text-black hover:bg-slate-800 hover:text-ivory dark:hover:text-ivory transition ease-in-out duration-300 text-transform: uppercase'>Submit and Continue</button>
                    </div>
                </form>
            </div>
        </div>
      
    );
}

export default CreateVenue;