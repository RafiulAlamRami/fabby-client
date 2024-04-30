import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SubCategoryCraft = () => {
    const crafts = useLoaderData()
    console.log(crafts);
    return (
        <div className=''>
            <div>
            {
                crafts[0]?.subCategory?
                <>
                    <h1 className='text-[1.7rem] font-bold font-lex text-center my-[3em]'><span className='border-b-2 pb-[.5em]'>All arts and crafts of {crafts[0]?.subCategory}</span></h1>
                </>:
                <>
                    <h1 className='text-[1.7rem] font-bold font-lex text-center my-[3em]'><span className='border-b-2 pb-[.5em]'>No data here</span></h1>
                </>
            }
            </div>
            <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1 gap-[.5em] mb-[6em]'>
                {
                    crafts.map(craft =>

                        <>

                            <div className="max-w-lg p-[1.5em] shadow-md dark:bg-gray-50 dark:text-gray-800 border rounded-xl">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <img src={craft.photo} alt="" className="block object-cover object-center w-full rounded-xl h-72 dark:bg-gray-500" />

                                    </div>
                                    <div className="space-y-2">

                                        <h3 className="text-[1.7rem] font-lex font-semibold text-center">{craft.
                                            itemName}</h3>

                                        <div>
                                            <p className=' text-center text-[1.1rem] font-semibold text-[#131313b2]'>SubCategory Name : {craft.subCategory}</p>
                                        </div>

                                        <div className='flex justify-around text-[1.1rem] font-semibold text-[#131313b2]'>
                                            <p><span className='font-lex font-extrabold text-[#1313137f]'>Price : </span> {craft.price}</p>
                                            <p>Rating : {craft.rating}</p>
                                        </div>
                                        <div className='flex justify-around text-[1.1rem] font-semibold text-[#131313b2]'>
                                            <p><span className='font-lex font-extrabold text-[#1313137f]'>Processing Time : </span> {craft.time}</p>
                                            <p>Stock Status : {craft.stockStatus}</p>
                                        </div>
                                        <div>
                                            <p className='text-[1.1rem] font-semibold text-[#131313b2]'>Description : {craft.shortDescription}</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-evenly'>
                                        <button><Link to={`/craftDetails/${craft._id}`} className="btn btn-warning text-white flex items-center justify-center w-full p-3 font-semibold rounded-md text-[1.2rem] font-lex px-[2rem] ">View detailes</Link></button>

                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>


        </div>
    );
};

export default SubCategoryCraft;