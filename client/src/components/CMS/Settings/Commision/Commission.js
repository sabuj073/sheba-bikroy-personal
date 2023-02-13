import './Commission.css';

const Commission = () => {
    return (
        <div className="container mt-3">
            <div className="commission create__category__form bg-white shadow-sm p-4">
                <h4 className="comOptionTitle">Commission Setup</h4>
                <div className="col-md-8 mx-auto">
                    <div className="comOption">
                        <h6 className="">Customer’s Regular Discount</h6>
                        <div className="comOptionGroup">
                            <input type="text" name="" id="" placeholder="Enter Commission" />
                            <button className="btn btn-success btn-sm mx-3">Save</button>
                            <button className="btn btn-warning btn-sm ">Edit</button>

                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider"></span>
                            </label>
                            <span className="ms-2">OFF/ON</span>
                        </div>
                    </div>
                    <div className="comOption">
                        <h6 className="">One Time Referance Commission</h6>
                        <div className="comOptionGroup">
                            <input type="text" name="" id="" placeholder="Enter Commission" />
                            <button className="btn btn-success btn-sm mx-3">Save</button>
                            <button className="btn btn-warning btn-sm ">Edit</button>

                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider"></span>
                            </label>
                            <span className="ms-2">OFF/ON</span>
                        </div>
                    </div>
                    <div className="comOption">
                        <h6 className="">Regular Referencer Commission</h6>
                        <div className="comOptionGroup">
                            <input type="text" name="" id="" placeholder="Enter Commission" />
                            <button className="btn btn-success btn-sm mx-3">Save</button>
                            <button className="btn btn-warning btn-sm ">Edit</button>

                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider"></span>
                            </label>
                            <span className="ms-2">OFF/ON</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commission