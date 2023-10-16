import adultsIcon from '../assets/images/adutls.svg';
import childrenIcon from '../assets/images/children.svg';
import downArrow from '../assets/images/downArrow.svg';

const BookRoom = () => {
    return (
        <div className="book-room">
            <div className="container">
                <div className="book-room-box">
                    <h1 className='book-room_title'>Book a Room</h1>
                    <p className='book-room_text'>Discover the perfect space for you!</p>

                    <div className="filters">
                        <div className='flex f-column'>
                            <span className='title | mb-1'>Date</span>
                            <input type="date" className='date-input' />
                        </div>

                        <div className='flex f-column'>
                            <span className='title | mb-1'>Person</span>

                            <div className='flex gap-1'>
                                <div className='select-box | flex align-center gap-1'>
                                    <div className='flex align-center gap-1'>
                                        <img src={adultsIcon} alt="" />
                                        <span>Adults</span>
                                    </div>
                                    <div className='flex align-center gap-05'>
                                        <span>2</span>
                                        <img src={downArrow} alt="" />
                                    </div>
                                </div>


                                <div className='select-box | flex align-center gap-1'>
                                    <div className='flex align-center gap-1'>
                                        <img src={childrenIcon} alt="" />
                                        <span>Children</span>
                                    </div>
                                    <div className='flex align-center gap-05'>
                                        <span>0</span>
                                        <img src={downArrow} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <button className='button'>BOOK NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookRoom