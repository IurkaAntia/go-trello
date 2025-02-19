export const getUsers = async () => {
    const response = await fetch("/api/users", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
    });
    return response.json();
};
//
// export const getUserById = async (id: string) => {
//     const response = await fetch(`/api/users/${id}`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${localStorage.getItem("token")}`,
//         }
//     })
//     return response.json();
// }
//
// export const loginUser = async (username: string, password: string) => {
//
//     const response = await fetch("/login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({username, password})
//     })
//     return response.json();
// }
//
// export const registerUser = async (username: string, email: string, password: string) => {
//     try {
//         const response = await fetch("/register", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ username, email, password }),
//         });
//
//         return await response.json();
//     } catch (error) {
//         console.error("Registration error:", error);
//         return { error: "Something went wrong. Please try again." };
//     }
// };
//
//
//










import axios from "axios";

const API_URL = "http://localhost:8080"; // Make sure this is correct for your backend

// Register API function
export const registerUser = async (username: string, email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/register`, {
            username,
            email,
            password,
        });
        return response.data; // Ensure you return the response for success or error
    } catch (error: any) {
        return { error: error.response?.data?.message || "Something went wrong" };
    }
};

// Login API function
export const loginUser = async (username: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            username,
            password,
        });
        const token = response.data.token; // Adjust depending on your response structure

        // Store the token in localStorage
        localStorage.setItem('token', token);

        return response.data; // Return the response (token)
    } catch (error: any) {
        return { error: error.response?.data?.message || "Invalid credentials" };
    }
};


export const fetchBoards = async () => {
    const token =  localStorage.getItem('token');
    try {
        const response = await axios.get("/api/boards", {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch boards:", error);
    }
};

export const getCurrentUser = async () => {
    const token = localStorage.getItem('token');  // Retrieve token from localStorage

    if (token) {
        try {
            const response = await axios.get('http://localhost:8080/api/me', {
                headers: {
                    Authorization: `Bearer ${token}`,  // Send token in Authorization header
                },
            });
            console.log('User data:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error fetching current user:', error);
        }
    } else {
        console.log('No token found in localStorage');
    }
};

