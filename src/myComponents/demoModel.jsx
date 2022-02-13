function DemoModel() {
    return (
        //Demo Model
        <div className="modal fade" id="demoModal" tabIndex="-1">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-fullscreen-md-down">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Request for Demo</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label">Name:</label>
                                <input type="text" className="form-control" id="recipient-name" placeholder="Your Name" />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Email:</label>
                                <input type="text" className="form-control" placeholder="Your Email Id" />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Phone:</label>
                                <input type="text" className="form-control" placeholder="Your Phone Number" />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Subject:</label>
                                <input type="text" className="form-control" defaultValue="Request for Demo of Eazypark" />
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">Message:</label>
                                <textarea className="form-control"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-base">Send message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DemoModel;