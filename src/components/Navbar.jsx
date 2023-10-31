"use client"

import Link from 'next/link';
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  // const { displayName, photoURL} = user || {};

  const handleLogout = () => {
    logOut()
    .then(() => {})
    .catch(error => console.error(error))
  }

    const menu = <>
        <li className='w-full lg:w-auto'><Link href="/">Home</Link></li>
        <li className='w-full lg:w-auto'><Link href="about">About Us</Link></li>
        <li className='w-full lg:w-auto'><Link href="contact">Contact Us</Link></li>
        <li className='w-full lg:w-auto'><Link href="blog">Blogs</Link></li>
                 
          {
            user ? <button onClick={handleLogout} className='bg-rose-600 hover:bg-rose-600 text-xl font-bold text-white px-5 py-2 rounded-md hover:rounded-full' >Logout</button>
            :
            <Link className='bg-rose-600 hover:bg-rose-600 lg:text-xl lg:font-bold text-white lg:px-5 py-1 lg:py-2 rounded-md hover:rounded-full w-full lg:w-auto' href="login">Login</Link>
          }
    </>

    return (
        <div className='py-3'>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm items-center dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-1 text-center">
        {menu}
      </ul>
    </div>
    <Link className='flex items-end' href='/'><h2 className='text-5xl font-bold text-rose-600'>aqb</h2><span className='font-2xl font-bold text-sky-400'>.COM</span></Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal items-center px-1 gap-1 text-center">
    {menu}
    </ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;