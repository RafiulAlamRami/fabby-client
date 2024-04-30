import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CraftDetails = () => {

    const crafts = useLoaderData()
    console.log(crafts);
    return (
        <div>

            {/* <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
                <div className="flex flex-col max-w-[90%]  mx-auto overflow-hidden rounded">
                    <img src={crafts.photo} alt="" className="w-full h-[75vh] dark:bg-gray-500 rounded-xl" />
                    <div className='flex justify-center'>
                        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 sm:px-10 sm:mx-12 lg:rounded-md bg-[#111827] text-[#F3F4DB]">
                            <div className="space-y-2">
                                <p rel="noopener noreferrer" className="text-lex inline-block text-[3rem] font-semibold mb-[1em]">{}</p>
                                
                                <div className='flex justify-center gap-[8em] text-start '>
                                    <div className='font-fira font-normal text-[1.2em]'>
                                        <p className='mb-[.5em]'>Price : $ {crafts.price}</p>
                                        <p>Status :  {crafts.status}</p>
                                    </div>
                                    <div className='font-fira font-normal text-[1.2em]'>
                                        <p className='mb-[.5em]'>Area : {}</p>
                                        <p>Location : {}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-[2em] justify-center text-[1.4rem] font-fira pt-[1em] pb-[.8em]'>
                                
                            </div>
                            <div className="dark:text-gray-800 font-fira text-[1.4rem] text-justify border-t-2 pt-[1.5em]">
                                <p>  &nbsp;&nbsp;&nbsp;&nbsp; {crafts.ShortDescription}</p>
                            </div>
                        </div>  
                    </div>
                </div>
            </div> */}
            <h1 className="text-[2rem] font-bold my-[3em] text-center">Detailes of <span className='border-b-2 border-b-black pb-[.3em]'>{crafts.itemName}</span></h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="rounded-lg hero-content flex-col md:flex-row lg:flex-row justify-between border-4 gap-[3em]">
                    <div>
                    <img src={crafts.photo} className="max-w-3xl rounded-lg shadow-2xl" />
                    </div>
                    <div className='text-center'>
                        <h1 className="text-[2rem] font-bold border-b-2 pb-[1em]">{crafts.
                            itemName}</h1>
                        <p className="py-6 text-[1.4rem] font-bold border-b-2 pb-[1em]">{crafts.shortDescription}</p>
                        <div className='border-l-2 my-[3em]'>
                            <div className='flex justify-around text-[1.1rem] font-semibold text-[#131313b2]'>
                                <p><span className='font-lex font-extrabold text-[#1313137f]'>SubCategory : </span> {crafts.subCategory}</p>
                                <p>Stock Status : {crafts.stockStatus}</p>
                            </div>
                            <div className='my-[.6em] flex justify-around text-[1.3rem] font-semibold text-[#131313b2]'>
                                <p><span className='font-lex font-extrabold text-[#1313137f]'>Price : </span> {crafts.price}</p>
                                <p>Rating : {crafts.rating}</p>
                            </div>
                            <div className='flex justify-around text-[1.3rem] font-semibold text-[#131313b2]'>
                                <p><span className='font-lex font-extrabold text-[#1313137f]'>Cutomization : </span> {crafts.customization}</p>
                                <p>time : {crafts.time}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CraftDetails;