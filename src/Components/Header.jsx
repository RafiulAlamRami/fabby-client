import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { AuthContext } from '../Provider/AuthProvider';
import { Tooltip } from 'react-tooltip';
import { toast } from 'react-toastify';



const Header = () => {

    const [theme, setTheme] = useState('light')
    const {user,logOut}=useContext(AuthContext)

    const links=<>

    <li className='text-[1.5rem] font-lex font-normal text-[#150b2bb2] border-2 rounded-xl'><NavLink to='/'><span className='p-[.5em] '>Home</span></NavLink></li>
    <li className='ml-[1em] text-[1.5rem] font-lex font-normal text-[#150b2bb2] border-2 rounded-xl'><NavLink to='/allArtAndCraftItems'><span className='p-[.5em] '>All Art & Craft Items</span></NavLink></li>

    { user &&
        <>
            <li className='mx-[1em] text-[1.5rem] font-lex font-normal text-[#150b2bb2] border-2 rounded-xl'><NavLink to='/addCraftItem'><span className='p-[.5em] '>Add Craft Item</span></NavLink></li>
        
            <li className='mr-[1em] text-[1.5rem] font-lex font-normal text-[#150b2bb2] border-2 rounded-xl'><NavLink to='/myArtAndCraftList'><span className='p-[.5em] '>My Art & Craft List</span></NavLink></li>
        </>
    }

</>
    

  // update state on toggle
  const handleToggle = e => {
    if (e.target.checked) {
      setTheme('dim')
    } else {
      setTheme('light')
    }
  }

  // set theme state in localStorage on mount & also update localStorage on state change
  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')

    // add custom data-theme attribute
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])

  const handleLogout=()=>{
    logOut()
    .then((result)=>{
        toast.warn("Logged out !")
    })
    .catch(error=>{
        toast.error("Something Wromg")
    })
}

    return (
        <div>
            <div className="navbar bg-base-100 mt-[3em]">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links
                        }
                    </ul>
                    </div>
                    <Link to='/'><span className='font-lex text-[3rem] font-bold text-[#150B2B]'>Fabby</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className=''>
                        <label className="cursor-pointer grid place-items-center mr-[1em]">

                            <input 

                                type='checkbox'
                                onChange={handleToggle}
                                className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'

                            />

                            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </div>
                    {
                        user?

                            <>

                                {/* <div className="dropdown dropdown-end z-50">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li><a>Logout</a></li>
                                    </ul>
                                </div> */}
                                {/* <Link to='/login' onClick={handleLogout} className='ml-[1em] text-[1.5rem] font-lex font-normal text-[#150b2bb2] border-2 rounded-xl py-[.5em] px-[.8em]'>Logout</Link> */}
                                {/* <a data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!">
                                    ◕‿‿◕
                                </a> */}
                                <a id="my-tooltip" >
                               
                                    <div className="dropdown dropdown-hover z-10 ">
                                        <div tabIndex={0} role="button" className="m-1">
                                            <div className="w-12 rounded-full">
                                                <img className='rounded-full' alt="Image" src={`${user.photoURL}`} />
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow  bg-base-100 rounded-box border-2">
                                            <Link to='/login' onClick={handleLogout} className='text-[1.2rem] p-[.1em]'>Logout</Link>
                                        {/* <li><a>Item 2</a></li> */}
                                        </ul>
                                    </div>
                                </a>
                                <Tooltip key={"top"} place='top' content={user.displayName}  anchorSelect="#my-tooltip" />
                            </>
                            :
                            <>
                                <Link to='/login' className='ml-[1em] text-[1.5rem] font-lex font-normal text-[#150b2bb2] border-2 rounded-xl py-[.5em] px-[.8em]'>Login</Link>

                                <Link to='/register' className='ml-[1em] text-[1.5rem] font-lex font-normal text-[#150b2bb2] border-2 rounded-xl py-[.5em] px-[.8em]'>Register</Link>
                        
                            </>
                    }
                    {/* <Link to='/login' className='ml-[1em] text-[1.5rem] font-lex font-normal text-[#150b2bb2] border-2 rounded-xl py-[.5em] px-[.8em]'>Login</Link>
                    <Link to='/register' className='ml-[1em] text-[1.5rem] font-lex font-normal text-[#150b2bb2] border-2 rounded-xl py-[.5em] px-[.8em]'>Register</Link> */}
                </div>
            </div>
        </div>
    );
};

export default Header;