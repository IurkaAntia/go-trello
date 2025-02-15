
import Card from './Card';

const List = ({ list }: { list: { id: bigint; title: string; cards: { id: bigint; title: string; content: string }[] } }) => {
    return (
        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">{list.title}</h3>
            <div className="space-y-4">
                {list.cards.map((card) => (
                    <Card key={card.id} card={card} />
                ))}
            </div>
        </div>
    );
};

export default List;
