import React from 'react';
import image from '../../../assets/images/category/1.GroceryorCooking.jpg';
import OrderTitle from '../Components/OrderTitle/OrderTitle';
import styles from './Category.module.css';
import CreateSubCategory from './CreateSubCategory';

const ChildCategories = () => {
    return (
        <>
            <div className="container mt-3">
                <div className="add__product__form bg-white shadow-sm p-4">
                    <OrderTitle
                        title="Child Categories"
                        length={223}
                        background="#333"
                        isFilter={false}
                    />
                    <div className="table-responsive">
                        <table className={`table ${styles.categoryTable} `}>
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th> Child Category</th>
                                    <th>Sub Category</th>
                                    <th> Category</th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> 1 </td>
                                    <td>Samsung</td>
                                    <td>Mobile</td>
                                    <td>Electronic</td>
                                    <td> <img src={image} width="70px" className="img-fluid" alt="" /> </td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-primary btn-sm me-2" type="button" data-bs-toggle="modal" data-bs-target="#childCategory">Update</button>
                                            <button className="btn btn-danger btn-sm">Delete</button>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div class="modal fade" id="childCategory" tabindex="-1" aria-labelledby="childCategoryLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="childCategoryLabel">Update Category</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <CreateSubCategory />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChildCategories;