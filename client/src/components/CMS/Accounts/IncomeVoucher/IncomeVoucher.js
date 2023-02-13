import { useState } from "react";
import '../CostVoucher/CostVoucher.css';


const IncomeVoucher = () => {
    const [payTo, setPayTo] = useState({});

    const inputHandler = (event) => {
        const { name, value } = event.target;
        setPayTo((state) => ({ ...state, [name]: value }))
    }

    return (
        <div className="container mt-3">
            <div className="costVoucher create__category__form bg-white shadow-sm p-3">
                <h3 className="mb-4"> Income Voucher </h3>
                <div className="my-5">
                    <div className="py-4 px-2 rounded-2" style={{ border: '1px solid #eee' }}>
                        <div className="pb-4">
                            <h5> Create The Income Sector</h5>
                            <div action="" className="d-flex justify-content-center">
                                <input className="form-control" type="text" name="" id="" />
                                <button type="submit" className="btn btn-primary btn-sm ms-2">Create</button>
                            </div>
                        </div>
                        <div className="date-filer">
                            <div className="inputGroup">
                                <label htmlFor="">Date: </label>
                                <input type="date" name="" id="" />
                            </div>

                            <div className="inputGroup">
                                <label htmlFor="">Voucher: </label>
                                <input type="text" />
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="received" class="form-label">Received From: </label>
                            <input type="text" class="form-control" id="received" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="mobile" class="form-label">Mobile Number: </label>
                            <input type="text" class="form-control" id="mobile" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Income Selector: </label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                    </div>
                </div>
                <div className="table-responsive">
                    <table class="table table-bordered Table">
                        <thead class="">
                            <tr>
                                <th>SL</th>
                                <th>Description</th>
                                <th colspan="2">Quantity</th>
                                <th>Rate</th>
                                <th>Taka</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> 1 </td>
                                <td>
                                    <textarea className="customInput" name="" id="" placeholder="Write Description ...." />
                                </td>
                                <td>
                                    <input className="customInput" type="text" name="" id="" placeholder="Enter Amount" />
                                </td>
                                <td>
                                    <input className="customInput" type="text" placeholder="Write pac, pic, & others" />
                                </td>
                                <td> <input className="customInput" type="text" name="" id="" placeholder="Enter Amount" /> </td>
                                <td>
                                    <input className="customInput" type="text" placeholder="Total Amount" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-center py-2">
                        <button className="btn btn-success btn-sm">Add More</button>
                    </div>
                </div>

                <div className="totalSection">
                    <div className="totalPart">
                        <div className="titleSec">Total</div>
                    </div>
                    <div className="priceSec">2020</div>
                </div>

                <div className="voucherSign">
                    <div>
                        <input type="text" placeholder="Enter Name" />
                        <div className="border-das"></div>
                        <div className="authorSign">Authorizes Singature</div>
                        <button className="btn btn-success mt-3">Save</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default IncomeVoucher