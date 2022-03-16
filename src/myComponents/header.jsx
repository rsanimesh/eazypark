import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Header() {
    return ( 
   <header className="fixed-top shadow-lg">
    {/* Social Links  */}
    <div className="social-link bg-base">
            <div className="container">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-end bg-base">
                        <a href="https://www.instagram.com" target="_blank">
                            <i className="fa-brands fa-instagram mx-2"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank">
                            <i className="fa-brands fa-twitter mx-2"></i>
                        </a>
                        <a href="https://www.facebook.com" target="_blank">
                            <i className="fa-brands fa-facebook mx-2"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        {/* Navigation  */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white" style={{"opacity":"0.8"}}>
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src="incubermax_lg_logo.png" className="img-fluid me-3" style={{"width": "200px"}} alt="Logo" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link mx-1 nav-text">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle mx-1 nav-text" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                                Our Solutions
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="eazy-park">EazyPark</Link></li>
                                <li><Link className="dropdown-item" to="admin-panel">Admin Panel</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <HashLink to="/#aboutus" className="nav-link mx-1 nav-text">About Us</HashLink>
                        </li>
                        <li className="nav-item">
                            <a href="#footer" className="nav-link mx-1 nav-text">Contact Us</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>

   </header>
     );
}

export default Header;