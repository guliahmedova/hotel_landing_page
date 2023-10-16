import logo from '../assets/images/logo.svg';

const Navbar = () => {
    return (
        <header className='header'>
            <div className="container">
                <nav className='navbar'>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Newsletter</a>
                    <a href="#">
                        <img src={logo} alt="" />
                    </a>
                    <a href="#">Rooms</a>
                    <a href="#">Services</a>
                    <a href="#">Pricing</a>
                </nav>
            </div>
        </header>
    )
}

export default Navbar