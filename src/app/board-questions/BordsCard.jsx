import React from 'react';

const BoardsCard = ({card}) => {

    const {year, boards} = card;

    return (
        <div className='text-center bg-rose-600 p-8 rounded-xl'>
            <h2 className='text-4xl font-bold text-white mb-5'>{year}</h2>
            <div className='grid gap-2'>
            {
                boards.map((board, i) => <button className='btn w-full' key={i} >{board}</button>)
            }
            </div>
        </div>
    );
};

export default BoardsCard;