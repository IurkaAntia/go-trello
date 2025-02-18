import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative">
            {/* Burger Icon */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 rounded-lg bg-gray-800 hover:bg-gray-700 focus:outline-none transition">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Sidebar Menu */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-gray-900 shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300">
                        <X size={28} />
                    </button>
                </div>

                {/* Menu Items */}
                <ul className="text-white text-lg space-y-4 px-6">
                    <li><Link to="/dashboard" className="block p-2 hover:bg-gray-700 rounded">🏠 Dashboard</Link></li>
                    <li><Link to="/boards" className="block p-2 hover:bg-gray-700 rounded">📋 Boards</Link></li>
                    <li><Link to="/tasks" className="block p-2 hover:bg-gray-700 rounded">✅ Tasks</Link></li>
                    <li><Link to="/settings" className="block p-2 hover:bg-gray-700 rounded">⚙️ Settings</Link></li>
                    <li><button className="w-full text-left p-2 hover:bg-red-700 rounded">🚪 Logout</button></li>
                </ul>
            </div>

            {/* Overlay when open */}
            {isOpen && <div className="fixed inset-0 bg-black opacity-50" onClick={() => setIsOpen(false)}></div>}
        </nav>
    );
};

export default Sidebar;
