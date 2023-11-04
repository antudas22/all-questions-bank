import BoardsCards from '@/app/board-questions/BoardsCards'
export const metadata = {
    title: "Board Group - AQB"
}

const AllQuestions = ({params}) => {
    return (
        <div>
            All Questions {params.slug}
            <BoardsCards />
        </div>
    );
};

export default AllQuestions;