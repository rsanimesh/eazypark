import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="pt-5 pb-2 px-5 px-sm-0 bg-base text-light" id="footer">
            <div className="d-sm-flex justify-content-around align-items-stretch">
                <div>
                    <div className="mt-3 mt-md-0 mb-1">COMPANY</div>
                    <small>
                        <a href="#aboutus">About Us</a><br />
                        <a href="#footer">Contact Us</a>
                    </small>
                </div>
                <div>
                    <div className="mt-3 mt-md-0 mb-1">SOLUTIONS</div>
                    <small>
                        <a href="eazy_index.html">EazyPark</a><br />
                        <a href="admin_panel.html">Admin Panel</a>
                    </small>
                </div>
                <div>
                    <div className="mt-3 mt-md-0 mb-1">RESOURCES</div>
                    <small>
                        <Link to="terms-and-conditions" target="_blank">Terms & Conditions</Link><br />
                        <Link to="privacy-policy" target="_blank">Privacy Policy</Link><br />
                        <Link to="refund-policy" target="_blank">Refund Policy</Link><br />
                        <Link to="cancellation-policy" target="_blank">Cancellation Policy</Link>
                    </small>
                </div>
                <div>
                    <div className="mt-3 mt-md-0 mb-1">For queries</div>
                    <small>connect@incubermax.com</small>
                    <div className="mt-3 mb-1">Helpline: +91-7499-668-870</div>

                    <div className="social-link">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-base">
                                <a href="https://www.instagram.com" target="_blank">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href="https://twitter.com" target="_blank">
                                    <i className="fa-brands fa-twitter ms-2"></i>
                                </a>
                                <a href="https://www.facebook.com" target="_blank">
                                    <i className="fa-brands fa-facebook ms-2"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center">
                    <div className="mt-3 mt-md-0 mb-1">
                        <button className="btn btn-dark btn-icon-text shadow-lg">
                            <i className="fa-brands fa-google-play fa-xl"></i>
                            <span className="d-inline-block text-left">
                                Google Play
                            </span>
                        </button>
                    </div>
                    <img src="img/qrcode.png" className="img-fluid bg-white" alt="" width="120px" height="80px" />
                </div>

            </div>
        </footer>
    );
}

export default Footer;