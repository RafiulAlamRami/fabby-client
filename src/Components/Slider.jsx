import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const Slider = () => {
    return (
        <div>
            <div className='my-[2em]'>
                <Swiper navigation={true} modules={[Navigation]} loop={true} className='rounded-xl'>
                    <SwiperSlide>
                        <div className="slide slide2 rounded-xl">
                            <div className='flex flex-col bg-[#3635354c] rounded-xl p-[1.4em]'>
                                <h1 className='text-[3.5rem] font-lex font-bold text-white '>Senior Living Community</h1>
                                <p className='text-[1.8rem] font-lex font-medium text-white '>A comfortable with various amenities <br /> <span className='text-[2.2rem]'>Wellness Center</span> ...</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide slide3 rounded-xl">
                            <div className='flex flex-col bg-[#3635354c] rounded-xl p-[1.4em]'>
                                <h1 className='text-[3.5rem] font-lex font-bold text-white '>Beachfront Vacation Rental</h1>
                                <p className='text-[1.8rem] font-lex font-medium text-white '>A beautiful beachfront vacation rental with<br /> <span className='text-[2.2rem]'>Stunning Ocean Views</span> ...</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide slide1 rounded-xl ">
                            <div className='flex flex-col bg-[#3635354c] rounded-xl p-[1.4em]'>
                                <h1 className='text-[3.5rem] font-lex font-bold text-white '>Cozy Single-Family Home</h1>
                                <p className='text-[1.8rem] font-lex font-medium text-white '>A charming single-family home with a <br /> <span className='text-[2.2rem]'>Large Backyard</span> ...</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;