import "server-only";
import DbConnect from './DbConnect';

export const getBoardsFromDb = async () => {
    const db = await DbConnect()
    const boardsCollection = db.collection('boardsWithYear');
    return boardsCollection.find({}).toArray();
}