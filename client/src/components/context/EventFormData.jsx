import React, {useState, useEffect} from 'react';

const useEventFormData = () =>{
    const [eventFormData, setEventFormData] = useState(()=>{
        const saved = localStorage.getItem('eventFormData');
        const initialValue = JSON.parse(saved);
        return initialValue || {};
    });

    useEffect(()=>{
        localStorage.setItem('eventFormData', JSON.stringify(eventFormData))
    }, [eventFormData])

    const saveEventFormData = (data) =>{
        console.log('event data saved', data)
        setEventFormData(data)
    }

    const clearEventFormData = () =>{
        setEventFormData({})
        localStorage.removeItem('eventFormData')
    }

    return {
        eventFormData,
        saveEventFormData,
        clearEventFormData,
    }
}

export default useEventFormData;