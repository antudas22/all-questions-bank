import React from 'react';
import { AiOutlineMessage } from "react-icons/ai";
import './leaveMessage.css'

const LeaveMessage = () => {
    return (
        <div className='relative leave-message flex justify-center items-center w-12 h-12 bg-rose-600 rounded-lg duration-1000'>
            <div className='message-box w-[280px]'>
            <div className='main-part flex items-start gap-2'>
            <input type="text" placeholder="Leave a Message..." className="input input-bordered input-sm w-full max-w-xs" />
            <button className='btn btn-sm' >Send</button>
            </div>
            </div>
                <AiOutlineMessage className='text-white text-3xl' />
        </div>
    );
};

export default LeaveMessage;