import { useEffect, useState } from "react";
import { fetchBoards } from "../api";

const Dashboard = () => {

    const [boards, setBoards] = useState<any[]>([]);


    useEffect(() => {
        const fetchData = async () => {

            const boardsData = await fetchBoards();


            setBoards(boardsData);
        };

        fetchData().then(r => r);
    }, []);

    return (
        <div className="flex h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            {/* Sidebar */}

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}

                {/* Content */}
                <main className="p-6 max-w-6xl mx-auto">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                        <div className="glass-card">
                            <h2 className="text-lg font-semibold">Boards</h2>
                            <p className="text-4xl font-bold">{boards.length}</p>
                        </div>

                    </div>

                    {/* Boards Section */}
                    <h2 className="text-3xl font-semibold mt-10 mb-4">Your Boards</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {boards.length > 0 ? (
                            boards.map((board) => (
                                <div key={board.id} className="board-card">
                                    <h3 className="font-semibold text-lg">{board.name}</h3>
                                    <p className="text-sm text-gray-300">{board.description || "No description"}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-400">No boards available.</p>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
