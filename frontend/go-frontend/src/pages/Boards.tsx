import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import List from "../components/List";
import {fetchBoards} from "../api.ts";

interface Board {
    id: bigint;
    title: string;
    lists: {
        id: bigint;
        title: string;
        cards: { id: bigint; title: string; content: string }[];
    }[];
}

const Boards = () => {
    const navigate = useNavigate();
    const [boards, setBoards] = useState<Board[]>([]);

    useEffect(()  => {
        const loadBoards = async () => {
            const data = await fetchBoards();
            if (data) {
                setBoards(data);
            }
        };
        loadBoards();
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Boards</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {boards.length > 0 ? (
                    boards.map((board) => (
                        <div
                            key={board.id}
                            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
                            onClick={() => navigate(`/board/${board.id}`)}
                        >
                            <h3 className="text-2xl font-semibold text-gray-700">{board.title}</h3>
                            {board.lists.map((list) => (
                                <List key={list.id} list={list} />
                            ))}
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No boards available.</p>
                )}
            </div>
        </div>
    );
};

export default Boards;
