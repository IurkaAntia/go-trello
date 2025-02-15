const DeleteList = ({ listId, onDeleteList }: { listId: number; onDeleteList: (listId: number) => void }) => {
    const handleDelete = async () => {
        try {
            const response = await fetch(`/api/lists/${listId}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Failed to delete list");
            }

            onDeleteList(listId);
        } catch (error) {
            console.error("Error deleting list:", error);
        }
    };

    return (
        <button onClick={handleDelete} className="bg-red-500 text-white px-2 py-1 rounded">
            Delete
        </button>
    );
};

export default DeleteList;
