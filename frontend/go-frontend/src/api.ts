export const fetchUsers = async () => {
    const response = await fetch("/api/users");
    return response.json();
};

export const fetchBoards = async () => {
    const response = await fetch("/api/boards");
    return response.json();
};

export const createUser = async (user: any) => {
    const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    });
    return response.json();
};
