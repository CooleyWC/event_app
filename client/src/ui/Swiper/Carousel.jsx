import React from 'react';
import testimonalData from '../Swiper/cards/testimonialData'


import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation, A11y } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Carousel.css';

import StarRating from '../StarRatings/StarRating';


function Carousel() {

    if(!testimonalData){
        return <p>...loading</p>
    }

    return (
        <Swiper
            modules={[Pagination, Navigation,  A11y]}                     
            pagination={{clickable: true,}}
            navigation
            spaceBetween={10}
            breakpoints={{
                1200: {
                    slidesPerView: 3,
                },
                800: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                },
            }}
                   
        >
            {testimonalData.map((testimonial, index)=>
                <SwiperSlide key={index}>
                    <div className='shadow-lg mb-4 bg-la-light-gray-med dark:bg-la-gray-light rounded-md overflow-hidden dark:text-white text-black'>
                        <img className='h-auto max-h-[200px] w-full object-cover' 
                            src={testimonial.image} 
                            alt={testimonial.eventName} 
                        />
                        <h3 className='text-center font-semibold my-4'>{testimonial.eventName}</h3>
                        <StarRating rating={testimonial.starRating}/>
                        <p className='italic text-center my-4'>"{testimonial.quote}"</p>
                        <p className='text-center my-4'>- {testimonial.raterName}</p>
                    </div>
                </SwiperSlide>
            )}          
        </Swiper>               
    );
}

export default Carousel;