import { useState } from "react";
import image from "../../../../assets/images/চাল-1.jpg";
import OrderTitle from "../../Components/OrderTitle/OrderTitle";
import AddProduct from "../AddProduct/AddProduct";
import styles from "./ProductList.module.css";
import $ from "jquery";
import instance from "../../../../base_url";

const ProductList = () => {
  //initialize datatable
  window.setInterval(() => {
    $("#product_table").DataTable();
  }, 500);

  const [product, setProduct] = useState([]);

  const getproduct = async () => {
    await instance
      .post("main_home/get-product-all", {
        key: "7fbaf493e3fe38a48934d93a3168926018adb657",
      })
      .then((response) => {
        if (product.length === 0) {
          setProduct(response.data);
        }
      });
  };

  const [isProductActive, setIsProductAction] = useState(true);
  getproduct();

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
          <div className="mb-3 d-flex ">
            <select
              className="me-2 form-select form-select-sm mb-2"
              name=""
              id=""
            >
              <option value="">Select Category</option>
            </select>
            <select
              className="me-2 form-select form-select-sm mb-2"
              name=""
              id=""
            >
              <option value="">Select Sub Category</option>
            </select>
            <select
              className="me-2 form-select form-select-sm mb-2"
              name=""
              id=""
            >
              <option value="">Select Child Category</option>
            </select>
          </div>
          <div className="table-responsive">
            <table
              id="product_table"
              className={`table ${styles.ProductTable} `}
            >
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
                {product.map((val, key) => {
                  return (
                    <tr>
                      <td> {key + 1} </td>
                      <td>
                        {" "}
                        <img
                          src={"../../../../" + val.product_image}
                          width="70px"
                          className="img-fluid"
                          alt=""
                        />{" "}
                      </td>
                      <td>{val.product_name}</td>
                      <td> {val.price} Tk </td>
                      <td>{val.stock}</td>
                      <td>{val.cat_title}</td>
                      <td>
                        <div className="d-flex">
                          <button
                            className="btn btn-primary btn-sm me-2"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#productModal"
                          >
                            Edit
                          </button>
                          <button className="btn btn-danger btn-sm me-2">
                            Delete
                          </button>
                          <button
                            className={`btn ${
                              isProductActive ? "btn-warning" : "btn-secondary"
                            } btn-sm`}
                          >
                            {isProductActive ? "Active" : "DeActive"}
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
        id="productModal"
        tabindex="-1"
        aria-labelledby="productModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="productModalLabel">
                Edit Product
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <AddProduct />
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

export default ProductList;
