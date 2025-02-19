
import Card from './Card';

interface CardProps {
    id: bigint;
    title: string;
    content: string;
}

interface ListProps {
    id: bigint;
    title: string;
    cards: CardProps[];
}

const List = ({ list }: ListProps[]) => {
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
