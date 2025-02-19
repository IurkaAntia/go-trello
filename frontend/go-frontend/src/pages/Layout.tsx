import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer.tsx";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet /> {/* Renders the protected routes here */}
            </main>
            <Footer/>
        </>
    );
};

export default Layout;