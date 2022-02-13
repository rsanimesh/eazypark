function WhyChooseUs() {
    return ( 
        // Why Choose Us
        <section className="p-5 bg-second">
            <div className="container">
                {/* Section Heading */}
                <h2 className="text-center">Why Choose Us?</h2>
                <p className="text-center lead">
                    We are providing a Smart Parking Platform with a unique set of technology and data capabilities to solve parking management and congestion in our cities. Our solution will fit for any office, residences, commercial places and stand alone parking lots.
                </p>
    
                <div className="card-group text-center">
                    <div className="card m-md-3">
                    <i className="fa-solid fa-chalkboard-user h1 m-3"></i>
                        <div className="card-body">
                            <h5 className="card-title"><b>Admin Panel</b></h5>
                            <p className="card-text">We can digitize the manual parking booking management system. Complete automation with a strong report will be provided to customers.</p>
                        </div>
                    </div>
                    <div className="card m-md-3">
                    <i className="fa-solid fa-credit-card h1 m-3"></i>
                        <div className="card-body">
                            <h5 className="card-title"><b>Digital Payment</b></h5>
                            <p className="card-text">EazyPark can handle end to end payment processing via Cards, UPI & Wallets.</p>
                        </div>
                    </div>
                    <div className="card m-md-3">
                        <i className="fa-solid fa-shirt h1 m-3"></i>
                        <div className="card-body">
                            <h5 className="card-title"><b>Merchandise</b></h5>
                            <p className="card-text">Any car related parts and merchandises will be available for sale using EazyPark app and these will be applicable at a competitive pricing.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="card-group text-center">
                    <div className="card m-md-3">
                    <i className="fa-solid fa-cubes h1 m-3"></i>
                        <div className="card-body">
                            <h5 className="card-title"><b>Space Management</b></h5>
                            <p className="card-text">EazyPark provides complete control and flexibility to add, modify & update parking spaces and pricing with instant effect.
                            </p>
                        </div>
                    </div>
                    <div className="card m-md-3">
                    <i className="fa-solid fa-globe h1 m-3"></i>
                        <div className="card-body">
                            <h5 className="card-title"><b>Easy Integration</b></h5>
                            <p className="card-text">Using our solution any facility can go digital within 7 to 15 days time.</p>
                        </div>
                    </div>
                    <div className="card m-md-3">
                        <i className="fa-solid fa-people-carry-box h1 m-3"></i>
                        <div className="card-body">
                            <h5 className="card-title"><b>Value Added Services</b></h5>
                            <p className="card-text">EazyPark is a one stop shop for any car related value added services. For example, car insurance, washing, repairing and many more services will be provided by our team.</p>
                        </div>
                    </div>
                </div>
    
            </div>
        </section>
     );
}

export default WhyChooseUs;