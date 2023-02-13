import React, { useState } from "react";
import AddProductForm from "./AddProductForm";
import swal from "sweetalert";


const AddProduct = () => {
  const [product, setProduct] = useState({});

  
  

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setProduct((state) => ({
      ...state,
      [name]: value,
    }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    document.getElementById("productform").reset();
    swal("Success!", "Product Created!", "success");
  };

  const onChange = (selectedOptions) => {
    console.log(selectedOptions);
  };
  return (
    <div className="add__product mt-3">
      <AddProductForm
        submitHandler={submitHandler}
        inputHandler={inputHandler}
        onChange={onChange}
      />
    </div>
  );
};

export default AddProduct;
