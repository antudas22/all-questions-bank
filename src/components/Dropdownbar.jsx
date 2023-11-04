import React from 'react';
import { AiFillHome } from "react-icons/ai";
import { BiDownArrow, BiRightArrow, BiLeftArrow } from "react-icons/bi";
import './dropdownbar.css';

const Dropdownbar = () => {
    return (
        <div className='menu-box'>
            <ul className='flex bg-[#e4e4e7] justify-between items-center rounded-md'>
            <li className='text-3xl cursor-pointer'><a href="#"><AiFillHome /></a></li>
            <li className='font-bold cursor-pointer'><a className='flex items-center gap-1' href="#">Board Exams <BiDownArrow/></a>
              <div className='sub-menu-1'>
                <ul>
                  <li className='hover-action'><a href="#">SSC <BiRightArrow/></a>
                  <div className="sub-menu-2">
                      <ul>
                        <li className='second-hover-action'><a href="#">Science</a>
                          <div className="sub-menu-3">
                            <ul>
                              <li><a className='w-[125px]' href="/board-questions/s-sci">Board Questions</a></li>
                              <li><a href="#">Test Paper</a></li>
                            </ul>
                          </div>
                        </li>
                        <li className='second-hover-action'><a href="#">Commerce</a>
                          <div className="sub-menu-3">
                            <ul>
                              <li><a className='w-[125px]' href="/board-questions/s-com">Board Questions</a></li>
                              <li><a href="#">Test Paper</a></li>
                            </ul>
                          </div>
                        </li>
                        <li className='second-hover-action'><a href="#">Humanities</a>
                          <div className="sub-menu-3">
                            <ul>
                              <li><a className='w-[125px]' href="/board-questions/s-hum">Board Questions</a></li>
                              <li><a href="#">Test Paper</a></li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className='hover-action'><a href="#">HSC <BiRightArrow/></a>
                    <div className="sub-menu-2">
                      <ul>
                        <li className='second-hover-action'><a href="#">Science</a>
                        <div className="sub-menu-3">
                            <ul>
                              <li><a className='w-[125px]' href="/board-questions/h-sci">Board Questions</a></li>
                              <li><a href="#">Test Paper</a></li>
                            </ul>
                          </div>
                        </li>
                        <li className='second-hover-action'><a href="#">Commerce</a>
                        <div className="sub-menu-3">
                            <ul>
                              <li><a className='w-[125px]' href="/board-questions/h-com">Board Questions</a></li>
                              <li><a href="#">Test Paper</a></li>
                            </ul>
                          </div>
                        </li>
                        <li className='second-hover-action'><a href="#">Humanities</a>
                        <div className="sub-menu-3">
                            <ul>
                              <li><a className='w-[125px]' href="/board-questions/h-hum">Board Questions</a></li>
                              <li><a href="#">Test Paper</a></li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className='hover-action'><a href="#">Polytechnic College <BiRightArrow/></a>
                    <div className="sub-menu-2">
                      <ul>
                        <li><a className='w-[145px]' href="#">1st Year Questions</a></li>
                        <li><a href="#">2nd Year Questions</a></li>
                        <li><a href="#">3rd Year Questions</a></li>
                        <li><a href="#">4th Year Questions</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className='hover-action'><a href="#">Mats <BiRightArrow/></a>
                  <div className="sub-menu-2">
                      <ul>
                        <li><a className='w-[145px]' href="#">1st Year Questions</a></li>
                        <li><a href="#">2nd Year Questions</a></li>
                        <li><a href="#">3rd Year Questions</a></li>
                        <li><a href="#">4th Year Questions</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className='font-bold cursor-pointer'><a className='flex items-center gap-1' href="#">Admission Test <BiDownArrow/></a>
            <div className='sub-menu-1'>
                <ul>
                  <li className='hover-action-2'><a href="#">Engineering Universities <BiRightArrow/></a>
                  <div className="sub-menu-2">
                      <ul>
                        <li><a className='w-[151px]' href="#">BUET</a></li>
                        <li><a href="#">DUET</a></li>
                        <li><a href="#">Engineering Guccho</a></li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="#">Medical College/Universities</a></li>
                  <li><a href="#">Agriculture Universities</a></li>
                  <li><a href="#">Guccho Universities</a></li>
                  <li><a href="#">Nursing Universities</a></li>
                  <li className='hover-action-2'><a href="#">Other Universities <BiRightArrow/></a>
                  <div className="sub-menu-2">
                      <ul>
                        <li><a className='w-[190px]' href="#">Dhaka University</a></li>
                        <li><a href="#">Jahangirnagar University</a></li>
                        <li><a href="#">Chattogram University</a></li>
                        <li><a href="#">Rajshahi University</a></li>
                        <li><a href="#">MIST University</a></li>
                        <li><a href="#">Others</a></li>
                      </ul>
                    </div>
                  </li>
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
                  <li className='hover-action-3'><a href="#">BCS <BiRightArrow/></a>
                  <div className="sub-menu-2">
                      <ul>
                        <li><a href="#">Preliminary</a></li>
                        <li><a href="#">Written</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className='hover-action-3'><a href="#">PSC Jobs <BiRightArrow/></a>
                  <div className="sub-menu-2">
                      <ul>
                        <li><a href="#">Preliminary</a></li>
                        <li><a href="#">Written</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className='hover-action-3'><a href="#">Others <BiRightArrow/></a>
                  <div className="sub-menu-2">
                      <ul>
                        <li><a href="#">Preliminary</a></li>
                        <li><a href="#">Written</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className='font-bold cursor-pointer'><a className='flex items-center gap-1' href="#">Primary School Teacher <BiDownArrow/></a>
            <div className='sub-menu-1'>
                <ul>
                  <li className='hover-action-4'><a href="#">Headmaster <BiRightArrow/></a>
                  <div className="sub-menu-2">
                      <ul>
                        <li><a href="#">Preliminary</a></li>
                        <li><a href="#">Written</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className='hover-action-4'><a href="#">Assistant Teacher <BiRightArrow/></a>
                  <div className="sub-menu-2">
                      <ul>
                        <li><a href="#">Preliminary</a></li>
                        <li><a href="#">Written</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className='font-bold cursor-pointer'><a className='flex items-center gap-1' href="#">School/College Teacher <BiDownArrow/></a>
            <div className='sub-menu-1'>
                <ul>
                  <li className='hover-action-5'><a href="#">School <BiRightArrow/></a>
                  <div className="sub-menu-2">
                      <ul>
                        <li><a href="#">Preliminary</a></li>
                        <li><a href="#">Written</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className='hover-action-5'><a href="#">College <BiRightArrow/></a>
                  <div className="sub-menu-2">
                      <ul>
                        <li><a href="#">Preliminary</a></li>
                        <li><a href="#">Written</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className='font-bold cursor-pointer'><a className='flex items-center gap-1' href="#">Bank Job <BiDownArrow/></a>
            <div className='sub-menu-1'>
                <ul>
                  <li className='hover-action-6'><a href="#">Bangladesh Bank <BiLeftArrow/></a>
                    <div className="sub-menu-2">
                      <ul>
                        <li><a href="#">Preliminary</a></li>
                        <li><a href="#">Written</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className='hover-action-6'><a href="#">Combined Bank <BiLeftArrow/></a>
                    <div className="sub-menu-2">
                      <ul>
                        <li><a href="#">Preliminary</a></li>
                        <li><a href="#">Written</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className='hover-action-6'><a href="#">Sonali Bank <BiLeftArrow/></a>
                    <div className="sub-menu-2">
                      <ul>
                        <li><a href="#">Preliminary</a></li>
                        <li><a href="#">Written</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className='hover-action-6'><a href="#">Janata Bank <BiLeftArrow/></a>
                    <div className="sub-menu-2">
                      <ul>
                        <li><a href="#">Preliminary</a></li>
                        <li><a href="#">Written</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className='hover-action-6'><a href="#">Rupali Bank <BiLeftArrow/></a>
                    <div className="sub-menu-2">
                      <ul>
                        <li><a href="#">Preliminary</a></li>
                        <li><a href="#">Written</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className='hover-action-6'><a href="#">Agrani Bank <BiLeftArrow/></a>
                    <div className="sub-menu-2">
                      <ul>
                        <li><a href="#">Preliminary</a></li>
                        <li><a href="#">Written</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className='hover-action-6'><a href="#">Other Govt. Bank <BiLeftArrow/></a>
                    <div className="sub-menu-2">
                      <ul>
                        <li><a href="#">Preliminary</a></li>
                        <li><a href="#">Written</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className='hover-action-6'><a href="#">Non-Govt. Bank <BiLeftArrow/></a>
                    <div className="sub-menu-2">
                      <ul>
                        <li><a href="#">Preliminary</a></li>
                        <li><a href="#">Written</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className='font-bold cursor-pointer'><a className='flex items-center gap-1' href="#">Model Test <BiDownArrow/></a>
            <div className='sub-menu-1'>
                <ul>
                  <li className='hover-action-7'><a href="#">SSC <BiLeftArrow/></a>
                  <div className="sub-menu-2">
                      <ul>
                        <li><a href="#">MCQ</a></li>
                        <li><a href="#">Creative</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className='hover-action-7'><a href="#">HSC <BiLeftArrow/></a>
                  <div className="sub-menu-2">
                      <ul>
                        <li><a href="#">MCQ</a></li>
                        <li><a href="#">Creative</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            </ul>
        </div>
    );
};

export default Dropdownbar;