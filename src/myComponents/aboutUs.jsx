function AboutUs() {
    return (    
        // About Us
        <section className="p-md-5 bg-light" id="aboutus">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md p-5">
                        <h2>About Us</h2>
                        <div className="lh-base fst-normal">
                            <p>
                                Revolutionize & organize parking business in Domestic as well as Global market. Digitize parking process and implement smart pre-booking of parking slots to avoid last minute rush and ensure hassle free parking - “Book as per your convenience”
                            </p>
                            <p>
                                Streamline and unify payment to avoid chaos and that too everything at the touch of a button through your Smartphone
                            </p>
                        </div>
                    </div>
                    <div className="col-md d-none d-sm-block">
                        <img src="img/about-us.png" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section> );
}

export default AboutUs;