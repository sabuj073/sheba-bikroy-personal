import React, { useState } from "react";
import image from "../../../assets/images/category/1.GroceryorCooking.jpg";
import OrderTitle from "../Components/OrderTitle/OrderTitle";
import styles from "./Category.module.css";
import CreateCategory from "./editcategory";
import instance from "../../../base_url";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const getCat = async () => {
    await instance
      .post("main_home/get_cat-all-category", {
        key: "7fbaf493e3fe38a48934d93a3168926018adb657",
      })
      .then((response) => {
        if (categories.length === 0) {
          setCategories(response.data);
        }
      });
  };

  const updateCat = async(val) =>{
    console.log(val);
    document.getElementById("category_name").value = val.cat_title;
    document.getElementById("category_bangla").value = val.bn_cat_title;
    document.getElementById("slug").value = val.cat_slug;
    document.getElementById("meta_title").value = val.meta_title;
    document.getElementById("meta_description").value = val.meta_description;
  }

  const deletesubcat = async(val) =>{
      await instance
        .post("main_home/delete-cat", {
          id:val.cat_id,
          key: "7fbaf493e3fe38a48934d93a3168926018adb657",
        })
        .then((response) => {
            setCategories([]);
            getCat();
        });
  }
  
  getCat();
  return (
    <>
      <div className="container mt-3">
        <div className="add__product__form bg-white shadow-sm p-4">
          <OrderTitle
            title="Categories"
            length={categories.length}
            background="#ef6c00"
            isFilter={false}
          />
          <div className="table-responsive">
            <table className={`table ${styles.categoryTable} `}>
              <thead>
                <tr>
                  <th>SL</th>
                  <th> Main Category</th>
                  <th>Icon</th>
                  <th>Image</th>
                  <th>Banner</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td> {key} </td>
                      <td>{val.cat_title}</td>
                      <td>
                        {" "}
                        <img
                          src={val.cat_icon}
                          width="70px"
                          className="img-fluid"
                          alt=""
                        />{" "}
                      </td>
                      <td>
                        {" "}
                        <img
                          src={val.cat_image}
                          width="70px"
                          className="img-fluid"
                          alt=""
                        />{" "}
                      </td>
                      <td>
                        {" "}
                        <img
                          src={val.cat_banner}
                          width="70px"
                          className="img-fluid"
                          alt=""
                        />{" "}
                      </td>
                      <td>
                        <div className="d-flex justify-content-center">
                          <button
                            className="btn btn-primary btn-sm me-2"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#categoryModal"
                            onClick={() =>
                              updateCat(
                                val
                              )
                            }
                          >
                            Update
                          </button>
                          <button className="btn btn-danger btn-sm" onClick={() =>
                              deletesubcat(
                                val
                              )
                            }>
                            Delete
                          </button>
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

      <div
        class="modal fade"
        id="categoryModal"
        tabindex="-1"
        aria-labelledby="categoryModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="categoryModalLabel">
                Update Category
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <CreateCategory />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
