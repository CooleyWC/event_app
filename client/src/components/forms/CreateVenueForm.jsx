import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';
// import useVenueFormData from '../context/VenueFormData';

function CreateVenueForm({submitVenue, userCreatedEvents}) {

    // const {venueFormData, saveVenueFormData, clearVenueFormData} = useVenueFormData();

    const createdEvents = userCreatedEvents.map((createdEvent)=> createdEvent.venue)

    const venueSet = createdEvents.filter((venue, index, self)=>
        index===self.findIndex((v)=>v.id===venue.id)
    )

    const createdVenues = venueSet.map((venue)=>{
        return (
            <option key={venue.id} value={venue.id}>
                {venue.name}
            </option>
        )
    })

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
            .min(4, 'City must be at least 4 characters')
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
            .min(3, 'Capacity must be larger than 3')
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
            capacity: 15,
            description: ''
        },
        validationSchema: venueSchema,
        onSubmit: submitVenue,
    })

    const handleSelectChange = (e)=>{

        

        const selectedVenueId = parseInt(e.target.value)

        if(!selectedVenueId){
            formik.resetForm()
            return
        }

        const selectedVenue = userCreatedEvents.find((ev) => {
            return ev.venue.id === selectedVenueId
        })

        formik.setValues({
            id: selectedVenue.venue.id || '',
            name: selectedVenue.venue.name || '',
            street: selectedVenue.venue.street || '',
            city: selectedVenue.venue.city || '',
            state: selectedVenue.venue.state || '',
            zip: selectedVenue.venue.zip || '',
            capacity: selectedVenue.venue.capacity || 15,
            description: selectedVenue.venue.description || '',
        })
    }


    return (
        <div className='lg:flex lg:justify-center lg:align-center'>
        <div className='px-6 max-w-[1000px] w-full bg-la-light-gray-med dark:bg-la-gray-med-light text-la-gray-med flex flex-col my-8 pb-8 rounded-sm'>
            
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <h1 className='text-3xl/9 mt-10 mb-2 font-semibold text-center dark:text-ivory'>Create Venue</h1>
                <h2 className='text-md mb-4 text-center dark:text-ivory'>Enter the details of where the event will take place.</h2>
            </div>
            <div className='flex flex-col mb-10 space-y-4'>
                <p className='block text-ivory font-medium'>Use a previously created venue?</p>
                <select onChange={handleSelectChange} className='rounded-sm pl-2 h-8 focus:outline-none'>
                    <option value=''> -- Select A Saved Venue --</option>
                        {createdVenues}
                </select>
            </div>

            <div className='mt-4 text-black dark:text-ivory sm:mx-auto sm:w-full'>
                <form className='space-y-4' onSubmit={formik.handleSubmit}>

                    <div>
                    <label className='mb-2 block font-medium'>Name</label>
                    <input 
                        type='text' 
                        id='name' 
                        name='name'
                        placeholder="e.g. The McAllister Residence - Living Room"
                        className='pl-2 border border-transparent focus:outline-none focus:ring-4 focus:ring-la-blue focus:border-transparent block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder:italic  placeholder-gray-500'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className='text-red-500 text-2xl -bg--clr-dark-black'>{formik.errors.name}</div>
                    ): null}
                    </div>


                    <div>
                    <label className='block mb-2 font-medium'>Street address</label>
                    <input 
                        type='text'
                        id='street'
                        name='street'
                        placeholder='e.g. 670 Lincoln Ave.'
                        className='pl-2 border border-transparent focus:outline-none focus:ring-4 focus:ring-la-blue focus:border-transparent block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder:italic  placeholder-gray-500' 
                        value={formik.values.street}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.street && formik.errors.street ? (
                        <div className='text-red-500 text-2xl -bg--clr-dark-black'>{formik.errors.street}</div>
                    ): null}
                    </div>
                    

                    
                    <div className='md:grid grid-cols-1 gap-x-6 sm:grid-cols-6 space-y-4 md:space-y-0'>
                        <div className='col-span-1 sm:col-span-2'>
                
                        <label className='block mb-2 font-medium'>City</label>
                        <input 
                            type='text'
                            id='city'
                            name='city'
                            placeholder='e.g Winnetka'
                            className='pl-2 border border-transparent focus:outline-none focus:ring-4 focus:ring-la-blue focus:border-transparent block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder:italic placeholder-gray-500' 
                            value={formik.values.city}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.city && formik.errors.city ? (
                            <div className='text-red-500 text-2xl -bg--clr-dark-black'>{formik.errors.city}</div>
                        ): null}
                    </div>
                    <div className='col-span-1 sm:col-span-2'>
                        <label className='block mb-2 font-medium'>State / Province</label>
                        <input
                            type='text'
                            id='state'
                            name='state'
                            placeholder='e.g IL'
                            rows='7'
                            className='pl-2 border border-transparent focus:outline-none focus:ring-4 focus:ring-la-blue focus:border-transparent block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder:italic  placeholder-gray-500' 
                            value={formik.values.state}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.state && formik.errors.state ? (
                            <div className='text-red-500 text-2xl -bg--clr-dark-black'>{formik.errors.state}</div>
                        ): null}
                    </div>
                    <div className='col-span-1 sm:col-span-2'>
                        <label className='block mb-2 font-medium'>Zip / Postal Code</label>
                        <input
                            type='text'
                            id='zip'
                            name='zip'
                            placeholder='e.g 60092'
                            className='pl-2 border border-transparent focus:outline-none focus:ring-4 focus:ring-la-blue focus:border-transparent block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder:italic  placeholder-gray-500' 
                            value={formik.values.zip}
                            onChange={formik.handleChange}
                        />
                        {formik.touched.zip && formik.errors.zip ? (
                            <div className='text-red-500 text-2xl -bg--clr-dark-black'>{formik.errors.zip}</div>
                        ): null}
                    </div>

                    </div>


                    <div>
                    <label className='block mb-2 font-medium'>Capacity</label>
                    <input
                        type='number'
                        id='capacity'
                        name='capacity'
                        className='pl-2 border border-transparent focus:outline-none focus:ring-4 focus:ring-la-blue focus:border-transparent block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder:italic  placeholder-gray-500' 
                        value={formik.values.capacity}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.capacity && formik.errors.capacity ? (
                        <div className='text-red-500 text-2xl -bg--clr-dark-black'>{formik.errors.capacity}</div>
                    ): null}
                    </div>

                    <div>
                    <label className='block mb-2 font-medium'>Description</label>
                    <textarea
                        type='text'
                        id='description'
                        name='description'
                        placeholder="e.g. A spacious, warmly decorated suburban home, and the living room is a centerpiece of its cozy, classic aesthetic... "
                        rows='4'
                        className='pl-2 border border-transparent focus:outline-none focus:ring-4 focus:ring-la-blue focus:border-transparent block text-gray-900 w-full rounded-sm bg-white py-1.5 placeholder:italic  placeholder-gray-500' 
                        value={formik.values.description}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.description && formik.errors.description ? (
                        <div className='text-red-500 text-2xl -bg--clr-dark-black'>{formik.errors.description}</div>
                    ): null}
                    </div>

                    <div>
                        <button type='submit' className='flex mt-8 w-full justify-center py-6 rounded-md text-2xl font-semibold bg-la-blue dark:text-white hover:bg-la-blue-dark hover:text-ivory transition ease-in-out duration-300 '>Save and Continue</button>
                    </div>
        
                </form>
            </div>
        </div>
      </div>
    );
}

export default CreateVenueForm;