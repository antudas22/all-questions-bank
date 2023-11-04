import React from 'react';
import BoardsCard from './BordsCard';
import getBoards from '../../utils/getBoards';

const BoardsCards = async () => {

    const boardsCards = await getBoards();
    return (
        <div className='my-10'>
            <div className='grid gap-10 mx-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                boardsCards.map(card => <BoardsCard card={card} key={card._id} />)
            }
            </div>
        </div>
    );
};

export default BoardsCards;