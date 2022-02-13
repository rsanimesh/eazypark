import DemoModel from "./demoModel";

function AdminPanel() {
    return (
        <div>
            {/* How it Works Section */}
            <section className="p-md-5 bg-second">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md p-5">
                            <h1><b>Admin Panel</b></h1>
                            <p className="lh-base fst-normal">
                                Managing parking space is now just a click of a button.<br />
                                <br /> 1. Automate your parking space management
                                <br /> 2. Control the parking pricing model
                                <br /> 3. Manage check-in & check out along with QR scanning
                                <br /> 4. Manage devices and admin users
                                <br /> 5. Manage monthly & yearly parking pass
                            </p>

                            <a href="#" className="btn btn-base mt-3" data-bs-toggle="modal" data-bs-target="#demoModal">
                                <i className="bi bi-chevron-right"></i> Free Demo
                            </a>
                        </div>
                        <div className="col-md w3-animate-left">
                            <img src="img/adminEazyPark.jpeg" className="img-fluid shadow-lg" alt="" width="40%" style={{"marginLeft":"25%"}} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Features */}
            <section className="p-md-5 bg-light" id="benefits">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                    <div className="col-md d-none d-sm-block">
                            <img src="img/about-us.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md p-5">
                            <h2>Our Features</h2>
                            <p className="lh-base fst-normal"><br />
                                1. Digitize your parking space<br />
                                2. Easy to integrate within 7 to 10 days time<br />
                                3. Zero cost on boarding option<br />
                                4. Manage online booking and instant booking using app<br />
                                5. Receive robust reporting and enhanced security<br />
                                6. Say bye to manual tickets & cash based payments<br />
                                7. Ease of business by using updated technology
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <DemoModel/>
        </div>
    );
}

export default AdminPanel;