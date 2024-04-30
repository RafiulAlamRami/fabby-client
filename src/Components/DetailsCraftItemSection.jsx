import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsCraftItemSection = () => {

    const craft=useLoaderData()
    console.log(craft);

    
    return (
        <div>
            <h1 className="text-[2rem] font-bold my-[3em] text-center">Detailes of <span className='border-b-2 border-b-black pb-[.3em]'>{craft.itemName}</span></h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="rounded-lg hero-content flex-col md:flex-row lg:flex-row justify-between border-4 gap-[3em]">
                    <div>
                    <img src={craft.photo} className="max-w-3xl rounded-lg shadow-2xl" />
                    </div>
                    <div className='text-center'>
                        <h1 className="text-[2rem] font-bold border-b-2 pb-[1em]">{craft.
                            itemName}</h1>
                        <p className="py-6 text-[1.4rem] font-bold border-b-2 pb-[1em]">{craft.shortDescription}</p>
                        <div className='border-l-2 my-[3em]'>
                            <div className='flex justify-around text-[1.1rem] font-semibold text-[#131313b2]'>
                                <p><span className='font-lex font-extrabold text-[#1313137f]'>SubCategory : </span> {craft.subCategory}</p>
                                <p>Stock Status : {craft.stockStatus}</p>
                            </div>
                            <div className='my-[.6em] flex justify-around text-[1.3rem] font-semibold text-[#131313b2]'>
                                <p><span className='font-lex font-extrabold text-[#1313137f]'>Price : </span> {craft.price}</p>
                                <p>Rating : {craft.rating}</p>
                            </div>
                            <div className='flex justify-around text-[1.3rem] font-semibold text-[#131313b2]'>
                                <p><span className='font-lex font-extrabold text-[#1313137f]'>Cutomization : </span> {craft.customization}</p>
                                <p>time : {craft.time}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsCraftItemSection;