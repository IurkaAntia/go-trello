import List from '../components/List.tsx';

const Board = ({ board }: { board: { title: string; lists: { id: string; title: string; cards: { [key: string]: any; id: string }[] }[] } }) => {
    return (
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-4xl mx-auto mt-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{board.title}</h2>
            <div className="space-y-6">
                {board.lists.map((list) => (
                    <List key={list.id} list={list} />
                ))}
            </div>
        </div>
    );
};

export default Board;
