import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const MyArtAndCraftList = () => {

    const { user } = useContext(AuthContext)
    const email=user.email
    // console.log(user.email);
    const [crafts, setCrafts] = useState([])
    const [load, setLoad] = useState(crafts)
    useEffect(() => {
        fetch(`https://fabby-server.vercel.app/myArtAndCraftList/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setCrafts(data);
                // console.log(data);
            })
    }, [user.email])



    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            fetch(`https://fabby-server.vercel.app/myCraftList/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const rem = crafts.filter(craft => craft._id !== id)
                        setCrafts(rem)
                        // console.log(load);
                    }
                })


        });


    }

    const handleYes=(val)=>{
        fetch(`https://fabby-server.vercel.app/custom/${email}/${val}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setCrafts(data)
        })

    }

    const handleNo=(val)=>{
        fetch(`https://fabby-server.vercel.app/custom/${email}/${val}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setCrafts(data)
        })

    }

    // console.log(load);

    return (
        <div>

            <div className='my-[5em]'>
                <div className='text-center my-[5em]'>
                    <div className="dropdown dropdown-bottom">
                        <div tabIndex={0} role="button" className="btn m-1 text-[1.5rem]">Customaization</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li onClick={()=>handleYes('Yes')} className='btn text-[1.2rem] mb-[.4em]'>Yes</li>
                            <li onClick={()=>handleNo('No')} className='btn text-[1.2rem]'>No</li>
                            {/* <li onClick={handleYes}>
                                <input type="text" name="Yes" />
                            </li>
                            <li>
                                <input type="text" name="No" />
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1 gap-[.5em]'>
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

                                            <div className='flex justify-around text-[1.1rem] font-semibold text-[#131313b2]'>
                                                <p><span className='font-lex font-extrabold text-[#1313137f]'>Price : </span> {craft.price}</p>
                                                <p>Rating : {craft.rating}</p>
                                            </div>
                                            <div className='flex justify-around text-[1.1rem] font-semibold text-[#131313b2]'>
                                                <p><span className='font-lex font-extrabold text-[#1313137f]'>Customization : </span> {craft.customization}</p>
                                                <p>Stock Status : {craft.stockStatus}</p>
                                            </div>
                                            <div>
                                                <p className='text-[1.1rem] font-semibold text-[#131313b2]'>{ }</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-evenly'>
                                            <button><Link to={`/updateCraft/${craft._id}`} className="btn btn-warning text-white flex items-center justify-center w-full p-3 font-semibold rounded-md text-[1.2rem] font-lex px-[2rem] ">Update</Link></button>
                                            <button onClick={() => handleDelete(craft._id)} className="btn btn-error text-white flex items-center justify-center p-3 font-semibold rounded-md text-[1.2rem] font-lex px-[2rem]"> Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>


        </div>
    );
};

export default MyArtAndCraftList;