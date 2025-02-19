interface CardProps {
    id: bigint;
    title: string;
    content: string;

}


const Card = ({ card }: CardProps ) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow">
            <h4 className="text-lg font-semibold text-gray-800">{card.title}</h4>
            <p className="text-gray-600 mt-2">{card.content}</p>
        </div>
    );
};

export default Card;
