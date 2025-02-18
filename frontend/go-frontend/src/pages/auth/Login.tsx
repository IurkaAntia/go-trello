import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await loginUser(username, password);

        if (result.token) {
            alert("Login successful!");
            // Save token to local storage (or context for auth state)
            localStorage.setItem("token", result.token);
            navigate("/dashboard");
        } else {
            alert("Login failed: " + result.error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-500 to-blue-500">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-semibold text-white text-center mb-6">
                    Welcome Back!
                </h2>
                <form onSubmit={handleLogin} className="space-y-5">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-white/20 text-white placeholder-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-white/20 text-white placeholder-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button
                        type="submit"
                        className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-blue-100 transition duration-300"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center text-white text-sm mt-4">
                    Don't have an account?{" "}
                    <span
                        className="text-white font-bold cursor-pointer hover:underline"
                        onClick={() => navigate("/register")}
                    >
            Sign Up
          </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
