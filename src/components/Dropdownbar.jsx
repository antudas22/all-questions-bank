import React from 'react';
import { AiFillHome } from "react-icons/ai";
import { BiDownArrow, BiRightArrow } from "react-icons/bi";
import './dropdownbar.css';

const Dropdownbar = () => {
    return (
        <div className='menu-box'>
            <ul className='flex bg-[#e4e4e7] justify-between items-center p-1'>
            <li className='text-3xl cursor-pointer'><a href="#"><AiFillHome /></a></li>
            <li className='font-bold cursor-pointer'><a className='flex items-center gap-1' href="#">Board Exams <BiDownArrow/></a>
              <div className='sub-menu-1'>
                <ul>
                  <li><a href="#">SSC <BiRightArrow/></a></li>
                  <li><a href="#">HSC <BiRightArrow/></a></li>
                  <li><a href="#">Polytechnic College <BiRightArrow/></a></li>
                  <li><a href="#">Mats <BiRightArrow/></a></li>
                </ul>
              </div>
            </li>
            <li className='font-bold cursor-pointer'><a className='flex items-center gap-1' href="#">Admission Test <BiDownArrow/></a>
            <div className='sub-menu-1'>
                <ul>
                  <li><a href="#">Engineering Universities <BiRightArrow/></a></li>
                  <li><a href="#">Medical College/Universities</a></li>
                  <li><a href="#">Agriculture Universities</a></li>
                  <li><a href="#">Guccho Universities</a></li>
                  <li><a href="#">Nursing Universities</a></li>
                  <li><a href="#">Other Universities <BiRightArrow/></a></li>
                </ul>
              </div>
            </li>
            <li className='font-bold cursor-pointer'><a className='flex items-center gap-1' href="#">University Exams <BiDownArrow/></a>
            <div className='sub-menu-1'>
                <ul>
                  <li><a href="#">Engineering Universities <BiRightArrow/></a></li>
                  <li><a href="#">Medical College/Universities <BiRightArrow/></a></li>
                  <li><a href="#">Agriculture Universities <BiRightArrow/></a></li>
                  <li><a href="#">Science & Technology Universities <BiRightArrow/></a></li>
                  <li><a href="#">Nursing Universities <BiRightArrow/></a></li>
                  <li><a href="#">Textile Universities <BiRightArrow/></a></li>
                  <li><a href="#">General Universities <BiRightArrow/></a></li>
                </ul>
              </div>
            </li>
            <li className='font-bold cursor-pointer'><a className='flex items-center gap-1' href="#">Govt. Jobs <BiDownArrow/></a>
            <div className='sub-menu-1'>
                <ul>
                  <li><a href="#">BCS <BiRightArrow/></a></li>
                  <li><a href="#">PSC Jobs <BiRightArrow/></a></li>
                  <li><a href="#">Others <BiRightArrow/></a></li>
                </ul>
              </div>
            </li>
            <li className='font-bold cursor-pointer'><a className='flex items-center gap-1' href="#">Primary School Teacher <BiDownArrow/></a>
            <div className='sub-menu-1'>
                <ul>
                  <li><a href="#">Headmaster <BiRightArrow/></a></li>
                  <li><a href="#">Assistant Teacher <BiRightArrow/></a></li>
                </ul>
              </div>
            </li>
            <li className='font-bold cursor-pointer'><a className='flex items-center gap-1' href="#">School/College Teacher <BiDownArrow/></a>
            <div className='sub-menu-1'>
                <ul>
                  <li><a href="#">School <BiRightArrow/></a></li>
                  <li><a href="#">College <BiRightArrow/></a></li>
                </ul>
              </div>
            </li>
            <li className='font-bold cursor-pointer'><a className='flex items-center gap-1' href="#">Bank Job <BiDownArrow/></a>
            <div className='sub-menu-1'>
                <ul>
                  <li><a href="#">Bangladesh Bank <BiRightArrow/></a></li>
                  <li><a href="#">Combined Bank <BiRightArrow/></a></li>
                  <li><a href="#">Sonali Bank <BiRightArrow/></a></li>
                  <li><a href="#">Janata Bank <BiRightArrow/></a></li>
                  <li><a href="#">Rupali Bank <BiRightArrow/></a></li>
                  <li><a href="#">Agrani Bank <BiRightArrow/></a></li>
                  <li><a href="#">Other Govt. Bank <BiRightArrow/></a></li>
                  <li><a href="#">Non-Govt. Bank <BiRightArrow/></a></li>
                </ul>
              </div>
            </li>
            <li className='font-bold cursor-pointer'><a className='flex items-center gap-1' href="#">Model Test <BiDownArrow/></a>
            <div className='sub-menu-1'>
                <ul>
                  <li><a href="#">SSC <BiRightArrow/></a></li>
                  <li><a href="#">HSC <BiRightArrow/></a></li>
                </ul>
              </div>
            </li>
            </ul>
        </div>
    );
};

export default Dropdownbar;