import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CraftDetails = () => {

    const crafts=useLoaderData()
    console.log(crafts);
    return (
        <div>
            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
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
            </div>
        </div>
    );
};

export default CraftDetails;