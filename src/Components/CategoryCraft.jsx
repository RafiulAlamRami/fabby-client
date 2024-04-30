import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryCraft = () => {

    const [crafts, setCrafts] = useState([])


    useEffect(() => {
        fetch('https://fabby-server.vercel.app/categoryCraft')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setCrafts(data)
            })
    }, [])

    console.log(crafts);
    return (
        <div className='my-[5em]'>
            <div>
                <h1 className='text-[2rem] text-center font-bold font-lex my-[1em]'>Art and Craft Categories</h1>
                <p className='text-[1.3rem] text-center font font-semibold font-lex mb-[3.5em]'>Dive into our textile art and craft categories, curated to inspire creativity and elevate <br />everyday living with unique, handcrafted pieces</p>
            </div>
            <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1 gap-[.5em]'>
                {
                    crafts?.map(craft=>
                        <>
                            <Link to={`/subCategoryCraft/${craft.subcategory_name}`}>
                            <div className="max-w-lg p-[1.5em] shadow-md dark:bg-gray-50 dark:text-gray-800 border rounded-xl text-center">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <img src={craft.image} alt="" className="block object-cover object-center w-full rounded-xl h-72 dark:bg-gray-500" />

                                    </div>
                                    <div className="space-y-2">

                                        <h3 className="text-[1.7rem] font-lex font-semibold "><span className='font-extrabold'>Subcategory :</span> {craft.
                                        subcategory_name}</h3>

                                        <div className='flex justify-around text-[1.1rem] font-semibold text-[#131313b2]'>
                                            <p><span className='font-lex font-extrabold text-[#1313137f]'>Name : </span> {craft.item_name}</p>
                                            <p>Stock Status : {craft.stock_status}</p>
                                        </div>
                                        <div>
                                            <p className='text-[1.1rem] font-semibold text-[#131313b2]'>{ }</p>
                                        </div>
                                    </div>
                                    {/* <Link to={`/craftItemviewDetails/${craft._id}`} className="btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md text-[1.2rem] font-lex ">View  Details</Link> */}
                                </div>
                            </div>
                            </Link>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default CategoryCraft;