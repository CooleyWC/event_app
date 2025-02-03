import React, {useState, useEffect} from 'react';

const useVenueFormData = () =>{
    const [venueFormData, setVenueFormData] = useState(()=>{
        const saved = localStorage.getItem('venueFormData');
        const initialValue = JSON.parse(saved);
        return initialValue || {};
    });

    useEffect(()=>{
        localStorage.setItem('venueFormData', JSON.stringify(venueFormData))
    }, [venueFormData])

    const saveVenueFormData = (data) =>{
        console.log('venue data saved', data)
        setVenueFormData(data)
    }

    const clearVenueFormData = () =>{
        setVenueFormData({})
        localStorage.removeItem('venueFormData')
    }

    return {
        venueFormData,
        saveVenueFormData,
        clearVenueFormData,
    }
}

export default useVenueFormData;