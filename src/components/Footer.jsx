import logo from '../assets/images/logo.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">

                <div className="footer-column">
                    <div className='form | flex f-column'>
                        <h1>Newsletter & Special Promo</h1>
                        <form action="#">
                            <input type="email" placeholder="Enter your email here" />
                            <button className="button">Subscribe</button>
                        </form>
                    </div>

                    <div className="footer-nav">
                        <a href="#">About us</a>
                        <a href="#">Contact</a>
                        <a href="#">Location</a>

                        <a href="#">FAQ</a>
                        <a href="#">Term of Use</a>
                        <a href="#">Privacy Police</a>

                        <a href="#">Services & Facilities</a>
                        <a href="#">Careers</a>
                        <a href="#">How to book</a>
                    </div>
                </div>

                <div className="copyright">© Copyright Booking Hotels. All right reserved.</div>
            </div>
        </footer>
    )
}

export default Footer;