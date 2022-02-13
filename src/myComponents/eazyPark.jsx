import DemoModel from "./demoModel";

function EazyPark() {
    return (
        <div>
            {/* Intro Section  */}
            <section className="p-md-5">
                <div className="text-center">
                    <h1><b>EazyPark</b></h1>
                    <p>Eazy, Convinient, Fast parking solution</p>
                    <a href="#" className="btn btn-base" data-bs-toggle="modal" data-bs-target="#demoModal">Demo</a>
                </div>
                <div className="my-5 text-center">
                    <video src="img/parking.mp4" className="img-fluid" autoPlay={true} muted={true} loop={true}></video>
                </div>
            </section>

            {/* How it Works Section  */}
            <section className="p-md-5 bg-second">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md w3-animate-left">
                            <img src="img/eazypark.gif" alt="" width="40%" style={{ "marginLeft": "25%" }} />
                        </div>
                        <div className="col-md p-5">
                            <h2>How it Works</h2>
                            <p className="lh-base fst-normal">
                                It's simple four step for your parking.<br /> <br /> 1. One Time vehicle registration
                                <br /> 2. Find & book parking slot<br /> 3. Tap to check-in & check out<br /> 4. Complete payment using UPI
                            </p>
                            <a href="#" className="btn btn-base mt-3" data-bs-toggle="modal" data-bs-target="#demoModal">
                                <i className="bi bi-chevron-right"></i> Free Demo
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Features */}
            <section className="p-md-5 bg-light" id="benefits">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md p-5">
                            <h2>Our Features</h2>
                            <p className="lh-base fst-normal">
                                <br /> 1. Book parking well in advance by using our EazyPark app
                                <br /> 2. Avoid the hassel of finding a parking spot during crowded hours
                                <br /> 3. Book parking on daily, weekly and monthly basis
                                <br /> 4. Purchase insurance and any other car related services using our app
                                <br /> 5. Get rewards and loyalty points for using our app
                                <br /> 6. Pay using UPI & cash
                            </p>
                        </div>
                        <div className="col-md d-none d-sm-block">
                            <img src="img/about-us.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us  */}
            <section className="p-md-5 bg-second">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md w3-animate-left">
                            <img src="img/eazypark.gif" alt="" width="40%" style={{ "marginLeft": "25%" }} />
                        </div>
                        <div className="col-md p-3">
                            <h2>Why Us?</h2>
                            <p className="lh-lg fst-normal">
                                <br /> 1. Say bye to the hassel of finding a proper parking during a busy & congested hours
                                <br /> 2. If your society does not provide enough parking space, use EazyPark for monthly parking facility
                                <br /> 3. Use our digital payment via UPI
                                <br /> 4. Why take a chance of scratch and major damages by parking overnight at roadside
                                <br /> 5. Get surprise rewards by refering friends and using EazyPark app regularly
                                <br /> 6. Go digital and create Atmanirbhar Bharat
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <DemoModel/>

        </div>
    );
}

export default EazyPark;