import { useState } from 'react';
import image from '../../../../assets/images/চাল-1.jpg';
import OrderTitle from '../../../CMS/Components/OrderTitle/OrderTitle';
import AddProduct from '../AddProduct/AddProduct';
import styles from './Products.module.css';

const Products = () => {
    const [isProductActive, setIsProductAction] = useState(true);

    return (
        <>
            <div className="container mt-3">
                <div className="add__product__form bg-white shadow-sm p-4">
                    <OrderTitle
                        title="All Products"
                        length={3}
                        background="#004a7c"
                        isFilter={false}
                    />
                    <div className="mb-3 d-flex " >
                        <select className="me-2 form-select form-select-sm mb-2" name="" id="">
                            <option value="">Select Category</option>
                        </select>
                        <select className="me-2 form-select form-select-sm mb-2" name="" id="">
                            <option value="">Select Sub Category</option>
                        </select>
                        <select className="me-2 form-select form-select-sm mb-2" name="" id="">
                            <option value="">Select Child Category</option>
                        </select>

                    </div>
                    <div className="table-responsive">
                        <table className={`table ${styles.ProductTable} `}>
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Category</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> 1 </td>
                                    <td> <img src={image} width="70px" className="img-fluid" alt="" /> </td>
                                    <td>Apple iPad 2020 MYL92CH/A 10.2" 8th Gen Wi-Fi 32GB Space Gray</td>
                                    <td> 2,330 Tk  </td>
                                    <td>22</td>
                                    <td>Electronic, Mobile, Samsung  </td>
                                    <td>
                                        <div className="d-flex">
                                            <button className="btn btn-primary btn-sm me-2" type="button" data-bs-toggle="modal" data-bs-target="#productModal">Edit</button>
                                            <button className="btn btn-danger btn-sm me-2">Delete</button>
                                            <button className={`btn ${isProductActive ? 'btn-warning' : 'btn-secondary'} btn-sm`}>
                                                {isProductActive ? 'Active' : 'DeActive'}
                                            </button>

                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td> 2 </td>
                                    <td> <img src={image} width="70px" className="img-fluid" alt="" /> </td>
                                    <td>Apple iPad 2020 MYL92CH/A 10.2" 8th Gen Wi-Fi 32GB Space Gray</td>
                                    <td> 2,330 Tk  </td>
                                    <td>22</td>
                                    <td> Electronic </td>
                                    <td>
                                        <div className="d-flex">
                                            <button className="btn btn-primary btn-sm me-2" type="button" data-bs-toggle="modal" data-bs-target="#productModal">Edit</button>
                                            <button className="btn btn-danger btn-sm me-2">Delete</button>
                                            <button className={`btn ${isProductActive ? 'btn-warning' : 'btn-secondary'} btn-sm`}>
                                                {isProductActive ? 'Active' : 'DeActive'}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td> 3 </td>
                                    <td> <img src={image} width="70px" className="img-fluid" alt="" /> </td>
                                    <td>Apple iPad 2020 MYL92CH/A 10.2" 8th Gen Wi-Fi 32GB Space Gray</td>
                                    <td> 2,330 Tk  </td>
                                    <td>22</td>
                                    <td> Electronic </td>
                                    <td>
                                        <div className="d-flex">
                                            <button className="btn btn-primary btn-sm me-2" type="button" data-bs-toggle="modal" data-bs-target="#productModal">Edit</button>
                                            <button className="btn btn-danger btn-sm me-2">Delete</button>
                                            <button className={`btn ${isProductActive ? 'btn-warning' : 'btn-secondary'} btn-sm`}>
                                                {isProductActive ? 'Active' : 'DeActive'}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="productModalLabel">Edit Product</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <AddProduct />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products