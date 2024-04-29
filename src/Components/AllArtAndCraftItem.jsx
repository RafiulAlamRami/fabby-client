import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllArtAndCraftItem = () => {

    const allArts = useLoaderData()
    console.log(allArts);
    return (
        <div className='my-[4em]'>
            <div className='my-[3em]'>
                <h1 className='text-[1.7rem] font-lex font-bold text-center '> <span className='border-b-2 border-black p-[.2em]'>All Art and Craft Items</span> </h1>
            </div>
            <div className='border-2 rounded-xl p-[1em]'>

            <div className="overflow-x-auto">
                <table className="table text-[1.3rem]">
                    {/* head */}
                    <thead className='text-[1.4rem] text-center'>
                        <tr>
                            
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Rating</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {/* row 1 */}

                        {
                            allArts.map(allArt=><>
                            <tr>
                                <th>{allArt.itemName}</th>
                                <td>{allArt.shortDescription}</td>
                                <td>{allArt.rating}</td>
                                <td><button className='btn'>Details</button></td>
                            </tr>
                            </>)
                        }
                        
                    </tbody>
                </table>
            </div>

            </div>
        </div>
    );
};

export default AllArtAndCraftItem;