import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';


// import {format, set} from 'date-fns'

function CreateEventForm({attrSelect, onSubmitUpdate, onUpdateCancel}) {

    const [textInput, setTextInput] = useState('')
    

    return (

        <div className='bg-la-light-gray-med text-la-gray-med dark:text-ivory dark:bg-la-gray-dark p-4'>
            <h1>{`Update ${attrSelect}`}</h1>
            <label className='pr-2'><span className='text-lg font-bold'>New {attrSelect}:</span></label>
                <input type='text'
                    className='text-black pl-1 py-1 w-full max-w-[900px] focus:ring-la-blue focus:ring-4 focus:outline-none rounded-sm'
                    value={textInput}
                    onChange={(e)=>setTextInput(e.target.value)}        
                />
            <div className='pt-4 flex flex-row gap-2'> 
                <button onClick={()=>onSubmitUpdate(textInput)} className='border border-white p-2 hover:bg-la-blue hover:text-white font-semibold'>Submit Update</button>
                <button onClick={onUpdateCancel} className='border border-white hover:bg-red-700 p-2 font-semibold hover:text-white'>Cancel {attrSelect} Update</button>
            </div>
        </div>
      
    );
}

export default CreateEventForm;