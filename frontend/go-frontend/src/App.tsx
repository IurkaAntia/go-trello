import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/Dashboard";
import Board from "./pages/Boards.tsx";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import PublicRoute from "./components/auth/PublicRoute";
import Layout from "./pages/Layout.tsx"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />

                {/* Public Routes (Redirect logged-in users) */}
                <Route element={<PublicRoute />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Route>
                {/* Protected Routes (Require Auth) */}
                <Route element={<ProtectedRoute />}>
                    <Route element={<Layout/>}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/board/:id" element={<Board />} />
                        <Route path="/boards" element={<Board />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
