
import {Menu, UserCircle} from "lucide-react";
import {useEffect, useState} from "react";
import Sidebar from "../components/Sidebar.tsx";
import {getCurrentUser} from "../api.ts";



const Header = () => {
    const [user, setUser] = useState<{ id: number; username: string; email: string } | null>(null);

    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        const fetchData = async () => {

            const currentUser = await getCurrentUser();
            setUser(currentUser);
        };

        fetchData();
    }, []);

    return (
        <>
            <header className="bg-gray-900 shadow-md p-5 flex justify-between items-center">
        <Sidebar menuOpen={menuOpen} toggleMenu={() => setMenuOpen(!menuOpen)} />
                <button onClick={() => setMenuOpen(true)} className="md:hidden">
                    <Menu size={28} />
                </button>
                <h1 className="text-2xl font-semibold">👋 Welcome {user ? user.username : "Guest"}!</h1>
                <div className="flex items-center space-x-2">
                    <UserCircle size={30} />
                    {user ? <span className="font-medium">{user.email}</span> : <span>Loading...</span>}
                </div>
            </header>
        </>
    );
};

export default Header;