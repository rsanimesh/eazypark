import { Link } from "react-router-dom";

function Products() {
    return ( 
        //Products
        <section className="p-5 bg-second text-dark">
            <div className="container">
                <h1 className="text-center">Our Solutions</h1>
                <div className="row text-center g-4">
    
                    <div className="col-md">
                        <div className="card bg-light text-dark shadow">
                            <div className="card-body text-center">
                                <div className="h1 mb-3">
                                <i className="fa-solid fa-laptop"></i>
                                </div>
                                <h3 className="card-title mb-3"><Link to="eazy-park" className="text-reset text-decoration-none">EazyPark</Link></h3>
                                <Link className="btn btn-base" to="eazy-park">Know More</Link>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-md">
                        <div className="card bg-light text-dark shadow">
                            <div className="card-body text-center">
                                <div className="h1 mb-3">
                                <i className="fa-solid fa-chalkboard-user"></i>
                                </div>
                                <h3 className="card-title mb-3"><Link to="admin-panel" className="text-reset text-decoration-none">Admin Panel</Link></h3>
                                <Link className="btn btn-base" to="admin-panel">Know More</Link>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        </section>
     );
}

export default Products;