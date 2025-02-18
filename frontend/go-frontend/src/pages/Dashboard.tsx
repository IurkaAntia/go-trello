import { useEffect, useState } from "react";
import { fetchBoards, getUsers, getCurrentUser } from "../api";
import Sidebar from "../components/Sidebar";
import { Menu, UserCircle } from "lucide-react";

const Dashboard = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [usersCount, setUsersCount] = useState(0);
    const [boards, setBoards] = useState<any[]>([]);
    const [tasksCompleted, setTasksCompleted] = useState(0);
    const [user, setUser] = useState<{ id: number; username: string; email: string } | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const users = await getUsers();
            const boardsData = await fetchBoards();
            const currentUser = await getCurrentUser();

            setUsersCount(users.length);
            setBoards(boardsData);
            setTasksCompleted(Math.floor(Math.random() * 100));
            setUser(currentUser);
        };

        fetchData();
    }, []);

    return (
        <div className="flex h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            {/* Sidebar */}
            <Sidebar menuOpen={menuOpen} toggleMenu={() => setMenuOpen(!menuOpen)} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-gray-900 shadow-md p-5 flex justify-between items-center">
                    <button onClick={() => setMenuOpen(true)} className="md:hidden">
                        <Menu size={28} />
                    </button>
                    <h1 className="text-2xl font-semibold">👋 Welcome {user ? user.username : "Guest"}!</h1>
                    <div className="flex items-center space-x-2">
                        <UserCircle size={30} />
                        {user ? <span className="font-medium">{user.email}</span> : <span>Loading...</span>}
                    </div>
                </header>

                {/* Content */}
                <main className="p-6 max-w-6xl mx-auto">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="glass-card">
                            <h2 className="text-lg font-semibold">Total Users</h2>
                            <p className="text-4xl font-bold">{usersCount}</p>
                        </div>
                        <div className="glass-card">
                            <h2 className="text-lg font-semibold">Boards</h2>
                            <p className="text-4xl font-bold">{boards.length}</p>
                        </div>
                        <div className="glass-card">
                            <h2 className="text-lg font-semibold">Tasks Completed</h2>
                            <p className="text-4xl font-bold">{tasksCompleted}</p>
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
