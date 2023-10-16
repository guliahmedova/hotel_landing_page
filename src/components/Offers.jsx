import offers from "../assets/const/offers"
import adultsIcon from '../assets/images/adutls.svg';

const Offers = () => {
    return (
        <div className="offers">
            <div className="container">
                <h3 className="offers-title">Special Offers</h3>
                <div className="offers-sub-title | flex align-center">
                    <div className="flex f-column">
                        <h1 className="sub-title">Best offer of the month</h1>
                        <p className="sub-desc">Experience Fantastic Benefits and Obtain Better
                            Rates When You <br /> Make a Direct Booking on Our Official Website</p>
                    </div>
                    <a href="#" className="view-all-link">View all</a>
                </div>

                <div className="offer-cards">
                    {
                        offers.map(item => (
                            <div key={item.id} className="offer-card">
                                <img src={item.img} alt="" className="img" />
                                <div className="card-body">
                                    <span className="category">{item.category}</span>
                                    <div className="card-title">
                                        <h1 className="title">{item.title}</h1>
                                        <div className="flex align-center gap-05">
                                            <img src={adultsIcon} alt="" />
                                            <span>{item.count}</span>
                                        </div>
                                    </div>

                                    <p className="desc">{item.desc}</p>
                                </div>

                                <div className="card-footer">
                                    <span className="price">{item.price}</span><span className="time">/{item.time}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Offers