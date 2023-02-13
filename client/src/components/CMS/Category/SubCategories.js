import React, { useState } from "react";
import image from '../../../assets/images/category/1.GroceryorCooking.jpg';
import OrderTitle from '../Components/OrderTitle/OrderTitle';
import styles from './Category.module.css';
import CreateSubCategory from './CreateSubCategory';
import instance from "../../../base_url";

const SubCategories = () => {
    const [subcategories, setsubCategories] = useState([]);
    const getsubCat = async () => {
    await instance
      .post("main_home/get_sub_cat_all", {
        key: "7fbaf493e3fe38a48934d93a3168926018adb657",
      })
      .then((response) => {
        if (subcategories.length === 0) {
            setsubCategories(response.data);
        }
      });
  };
  getsubCat();

  const deletesubcat = async(val) =>{
    await instance
      .post("main_home/delete-sub-cat", {
        id:val.sub_cat_id,
        key: "7fbaf493e3fe38a48934d93a3168926018adb657",
      })
      .then((response) => {
        setsubCategories([]);
        getsubCat();
      });
}

    return (
        <>
            <div className="container mt-3">
                <div className="add__product__form bg-white shadow-sm p-4">
                    <OrderTitle
                 setsubCategories       title="Sub Categories"
                        length={subcategories.length}
                        background="#673ab7"
                        isFilter={false}
                    />
                    <div className="table-responsive">
                        <table className={`table ${styles.categoryTable} `}>
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th> Sub Category</th>
                                    <th> Sub Category (BN)</th>
                                    <th>Category</th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {subcategories.map((val, key) => {
                  return (
                                <tr>
                                    <td> {key+1} </td>
                                    <td>{val.sub_cat_name}</td>
                                    <td>{val.sub_category_bangla}</td>
                                    <td>{ val.cat_title } </td>
                                    <td> <img src={val.category_image} width="70px" className="img-fluid" alt="" /> </td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-primary btn-sm me-2" type="button" data-bs-toggle="modal" data-bs-target="#subCategoriesModal">Update</button>
                                            <button className="btn btn-danger btn-sm" onClick={() =>
                              deletesubcat(
                                val
                              )
                            }>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div class="modal fade" id="subCategoriesModal" tabindex="-1" aria-labelledby="subCategoriesModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="subCategoriesModalLabel">Update Sub Category</h5>
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

export default SubCategories;