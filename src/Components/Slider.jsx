import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';

const Slider = () => {

    const [text]=useTypewriter({
        words:['quilted ','wonders'],
        loop:0
    })
    const [text2]=useTypewriter({
        words:['elegance','creativity'],
        loop:0
    })
    const [text3]=useTypewriter({
        words:['fabric', 'crafting'],
        loop:0
    })
    return (
        <div>
            <div className='my-[2em]'>
                <Swiper navigation={true} modules={[Navigation]} loop={true} className='rounded-xl'>
                    <SwiperSlide>
                        <div className="slide slide2 rounded-xl">
                            <div className='flex flex-col bg-[#3635354c] rounded-xl p-[1.4em]'>


                                <h1 className='text-[3.5rem] font-lex font-bold text-white text-center'>Explore our 

                                <span> {text}</span>
                                <span><Cursor></Cursor></span>
                                 </h1>


                                <p className='text-[1.8rem] font-lex font-medium text-white text-center'>A comfortable with various amenities blending  <br /> and creativity for timeless warmth and <span className='text-[2.2rem]'>beauty in every stitch</span></p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide slide3 rounded-xl text-center">
                            <div className='flex flex-col bg-[#3635354c] rounded-xl p-[1.4em]'>
                                <h1 className='text-[3.5rem] font-lex font-bold text-white '>Embark on a journey </h1>
                                <p className='text-[1.8rem] font-lex font-medium text-white '>through our beadcraft realm <br /> where tiny treasures  weave tales of tradition<span className='text-[4.2rem] font-lex font-bold'> {text2}</span>
                                <span><Cursor></Cursor></span></p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide slide1 rounded-xl ">
                            <div className='flex flex-col bg-[#3635354c] rounded-xl p-[1.4em] text-center'>
                                <h1 className='text-[3.5rem] font-lex font-bold text-white '>Indulge in our embroidery oasis</h1>
                                <p className='text-[1.8rem] font-lex font-medium text-white '>where threads dance upon <span className='text-[4.2rem] font-lex font-bold'> {text3}</span>
                                <span><Cursor></Cursor></span><br /> intricate designs that elevate every stitch <span className='text-[2.2rem]'>into a masterpiece</span></p>

                            
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;