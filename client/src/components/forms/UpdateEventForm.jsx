import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';


// import {format, set} from 'date-fns'

function CreateEventForm({attrSelect, onSubmitUpdate, onUpdateCancel}) {

    const [textInput, setTextInput] = useState('')
    

    return (

        <div className='bg-gray-950 p-4'>
            <h1>{`Update ${attrSelect}`}</h1>
            <label className='pr-2'><span className='text-lg font-bold'>New {attrSelect}:</span></label>
                <input type='text'
                    className='text-black pl-1 w-full max-w-[900px]'
                    value={textInput}
                    onChange={(e)=>setTextInput(e.target.value)}        
                />
            <div className='pt-4 flex flex-row gap-2'> 
                <button onClick={()=>onSubmitUpdate(textInput)} className='border border-white p-2'>Submit Update</button>
                <button onClick={onUpdateCancel} className='border border-white p-2'>Cancel {attrSelect} Update</button>
            </div>
        </div>
      
    );
}

export default CreateEventForm;