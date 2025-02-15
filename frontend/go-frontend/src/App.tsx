import { useState, useEffect } from 'react';
import Board from './components/Board';
import List from './components/List';
import {fetchBoards} from "./api.ts";

const App = () => {
    interface ListType {
        id: string;
        title: string;
        cards: { id: string; title: string; content: string }[];
    }

    interface BoardType {
        id: string;
        name: string;
        lists: ListType[];
    }

    const [boards, setBoards] = useState<BoardType[]>([]);
    const [loading, setLoading] = useState(true);

    // Fetch data from backend


    // UseEffect to fetch data when the component mounts
    useEffect(() => {
        fetchBoards().then(r => {
            setBoards(r);
        }).then(() => setLoading(false));
    }, []);

    // Loading state
    if (loading) {
        return <div className="text-center">Loading...</div>;
    }
    
    return (
        <div className="App p-8 bg-gray-200 min-h-screen">
            <h1 className="text-4xl font-bold mb-8">Trello-like App</h1>
            <div className="flex space-x-8">
                {boards.map(board => (
                    <div key={board.id} className="flex flex-col space-y-4">
                        <Board board={board} />

                        <div className="flex space-x-4" key={board.id}>
                            {board.lists && board.lists.map(list => (
                                <List key={list.id} list={list} />

                            ))}


                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
