import React from 'react';
import Image from "next/image";
import Link from "next/link";
import notFound from '../assets/not_found_page.png'

const NotFoundPage = () => {
    return (
        <div className='text-center my-5'>
            <Image
                src={notFound}
                alt='not-found'
                className='max-w-[700px] mx-auto my-10'
            />
            <Link className='bg-rose-600 text-xl font-bold text-white px-5 py-2 rounded-md hover:rounded-full' href='/'>
                <button>Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFoundPage;