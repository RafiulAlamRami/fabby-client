import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const AddCraftItem = () => {

    const {user}=useContext(AuthContext)

    const handleCoffe=event=>{
        event.preventDefault()
        const form=event.target
        const UserName=form.UserName.value
        const userEmail=form.userEmail.value
        const itemName=form.itemName.value
        const subCategory=form.subCategory.value
        const shortDescription=form.shortDescription.value
        const price=form.price.value
        const rating=form.rating.value
        const customization=form.customization.value
        const time=form.time.value
        const stockStatus=form.stockStatus.value
        const photo=form.photo.value

        const addCraftData={UserName,userEmail,itemName,subCategory,shortDescription,price,rating,customization,time,stockStatus,photo}

        console.log(addCraftData);

        fetch('https://fabby-server.vercel.app/addCraftItem',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addCraftData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            toast.success("Added Succussfully")
            form.reset()
            
        })
        
    }
    
    return (
        <div>
            <div className='mb-[4em]'> 
                <h1 className='text-[2rem] font-bold my-[2em] text-center'><span className='border-b-2 shadow-md'>Add Craft Item</span></h1>
                <div className='text-[1.3rem] w-[80%] mx-auto border p-5 rounded-xl'>

                    <form onSubmit={handleCoffe}>
                    
                        {/* first row */}
                        <div className='flex gap-10 justify-center '>

                            <div className='flex flex-col gap-2  w-full'>
                                <label htmlFor="" className='text-left'>Your Name</label>
                                <input type="text" placeholder="Your name" defaultValue={user.displayName} name='UserName' className="input input-bordered w-full " />
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <label htmlFor="" className='text-left'>Your Email</label>
                                <input type="email" placeholder="Your Email" defaultValue={user.email} name='userEmail' className="input input-bordered w-full " />
                            </div>
                            
                        </div>
                        {/* 2nd row */}
                        <div className='flex gap-10 justify-center my-7'>

                            <div className='flex flex-col gap-2  w-full'>
                                <label htmlFor="" className='text-left'>Item Name</label>
                                <input type="text" placeholder="Item Name" name='itemName' className="input input-bordered w-full " />
                            </div>
                            <div className='flex flex-col gap-2 w-full mt-[2em]'>
                                <select name='subCategory' required className="select select-bordered w-full">
                                    <option disabled selected >Select your Sub Category</option>
                                    <option value={'embroidery'}>Embroidery</option>
                                    <option value={'Knitting and Crocheting'}>Knitting and Crocheting</option>
                                    <option value={'Quilting'}>Quilting</option>
                                    <option value={'Beadwork'}>Beadwork</option>
                                    <option value={'Tie-Dyeing'}>Tie-Dyeing</option>
                                    <option value={'Macrame'}>Macrame</option>
                                </select>
                            </div>
                            
                        </div>
                        {/* 3rd row */}
                        <div className='flex gap-10 justify-center my-7'>

                            <div className='flex flex-col gap-2  w-full'>
                                <label htmlFor="" className='text-left'>Short  Description</label>
                                <input type="text" placeholder="Short  Sescription" name='shortDescription' className="input input-bordered w-full " />
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <label htmlFor="" className='text-left'>Price</label>
                                <input type="text" placeholder="Price" name='price' className="input input-bordered w-full " />
                            </div>
                            
                        </div>
                        {/* 4th row */}
                        <div className='flex gap-10 justify-center my-7'>

                            <div className='flex flex-col gap-2  w-full'>
                                <label htmlFor="" className='text-left'>Rating</label>
                                <input type="text" placeholder="Rating" name='rating' className="input input-bordered w-full " />
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <label htmlFor="" className='text-left'>Customization</label>
                                <input type="text" placeholder="Yes or No" name='customization' className="input input-bordered w-full " />
                            </div>
                            
                        </div>
                        {/* 5th row */}
                        <div className='flex gap-10 justify-center '>

                            <div className='flex flex-col gap-2  w-full'>
                                <label htmlFor="" className='text-left'>Processing Time</label>
                                <input type="text" placeholder="Time" name='time' className="input input-bordered w-full " />
                            </div>
                            <div className='flex flex-col gap-2 w-full'>
                                <label htmlFor="" className='text-left'>Stock Status</label>
                                <input type="text" placeholder="In Stock or Made to Order" name='stockStatus' className="input input-bordered w-full " />
                            </div>
                            
                        </div>
                        {/* 6th row */}
                        <div className='my-7'>

                            <div className='flex flex-col gap-2 w-full'>
                                <label htmlFor="" className='text-left'>Photo URL</label>
                                <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered w-full " />
                            </div>

                        </div>
                        {/* Submit Button */}
                        <div>
                            <input type="submit" value="Add" className='font-lex text-[2rem] font-bold btn btn-block'/>
                        </div>
                    
                    </form>
                </div>
                
            </div>
        </div>
    );
};


export default AddCraftItem;