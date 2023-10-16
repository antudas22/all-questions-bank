import React from 'react';

const Navbar = () => {

    const menu = <>
        <li> <a href="/">Home</a> </li>
        <li> <a href="about">About Us</a> </li>
        <li> <a href="contact">Contact Us</a> </li>
        <li> <a href="blog">Blog</a> </li>
    </>

    return (
        <div className='py-3'>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {menu}
      </ul>
    </div>
    <a className='flex items-end' href='/'><h2 className='text-5xl font-bold text-rose-600'>aqb</h2><span className='font-2xl font-bold text-sky-400'>.COM</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-1">
    {menu}
    </ul>
  </div>
  <div className="navbar-end">
  <a className='bg-rose-600 text-xl font-bold text-white px-5 py-2 rounded-md hover:rounded-full' href="login">Login</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;