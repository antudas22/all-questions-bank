import "server-only";
import { getBoardsFromDb } from "../services/boards.service";
import {cache} from 'react';

const getBoards = cache(() => {
    return getBoardsFromDb();
});

export default getBoards;