import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const result = await registerUser(username, email, password);

        if (result.message === "User registered successfully") {
            alert("Registration successful! Please log in.");
            navigate("/login");
        } else {
            alert("Registration failed: " + result.error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-500 to-blue-500">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-semibold text-white text-center mb-6">
                    Create an Account
                </h2>
                <form onSubmit={handleRegister} className="space-y-5">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-white/20 text-white placeholder-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-white/20 text-white placeholder-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button
                        type="submit"
                        className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-blue-100 transition duration-300"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-center text-white text-sm mt-4">
                    Already have an account?{" "}
                    <span
                        className="text-white font-bold cursor-pointer hover:underline"
                        onClick={() => navigate("/login")}
                    >
            Login
          </span>
                </p>
            </div>
        </div>
    );
};

export default Register;
