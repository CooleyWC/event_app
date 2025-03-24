import React from 'react';
import testimonalData from '../Swiper/cards/testimonialData'


import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, A11y } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Carousel.css';


function Carousel() {

    if(!testimonalData){
        return <p>...loading</p>
    }

    return (
        <Swiper
            modules={[Pagination, A11y]}                     
            pagination={{clickable: true,}}
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
                    <div className='shadow-lg'>
                        <img className='h-auto max-h-[200px] w-full object-cover' 
                            src={testimonial.image} 
                            alt={testimonial.eventName} 
                        />
                        <h3 className='text-center'>{testimonial.eventName}</h3>
                        <p className='text-center'>Rating: {testimonial.starRating} stars</p>
                        <p className='italic text-center'>"{testimonial.quote}"</p>
                        <p className='text-center'>- {testimonial.raterName}</p>
                    </div>
                </SwiperSlide>
            )}          
        </Swiper>               
    );
}

export default Carousel;