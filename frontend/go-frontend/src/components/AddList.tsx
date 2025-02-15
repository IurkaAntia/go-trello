import React, { useState } from "react";

const AddList = ({ boardId, onAddList }: { boardId: number; onAddList: (newList: { id: number; title: string }) => void }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim() === "") return;

        try {
            const response = await fetch("/api/lists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, board_id: boardId }),
            });

            if (!response.ok) {
                throw new Error("Failed to add list");
            }

            const newList = await response.json();
            onAddList(newList);
            setTitle("");
        } catch (error) {
            console.error("Error adding list:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="List Title"
                required
                className="border p-2 rounded"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
                Add List
            </button>
        </form>
    );
};

export default AddList;
