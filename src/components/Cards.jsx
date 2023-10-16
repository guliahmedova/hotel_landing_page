import cards from '../assets/const/cards';

const Cards = () => {
    return (
        <div className='cards-container'>
            <div className="container">
                <div className="cards">
                    {cards.map(item => (
                        <div className='card' key={item.id}>
                            <img src={item.img} alt="" className='card-img' />
                            <span className='card-title'>{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cards