import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Select from "react-select";
import Input from "../../Components/Input/Input";
import InputFile from "../../Components/Input/InputFile";
import SelectBox from "../../Components/Input/SelectBox";
import styles from "./AddProduct.module.css";

const AddProductForm = ({ submitHandler, inputHandler, onChange }) => {
  const [description, setDescription] = useState("Hello There");
  const categories = [
    { id: 1, value: "electronic", name: "Electronic" },
    { id: 2, value: "fashion", name: "Fashion" },
    { id: 3, value: "baby", name: "Baby" },
  ];
  const subCategories = [
    { id: 1, value: "mobile", name: "mobile" },
    { id: 2, value: "t-shirt", name: "t-shirt" },
    { id: 3, value: "mam", name: "Mam" },
  ];
  const childCategories = [
    { id: 1, value: "mobile", name: "mobile" },
    { id: 2, value: "t-shirt", name: "t-shirt" },
    { id: 3, value: "mam", name: "Mam" },
  ];
  const productCondition = [
    { id: 1, value: "new", name: "New" },
    { id: 2, value: "recent", name: "Recent" },
    { id: 3, value: "old", name: "Old" },
  ];

  const options = [
    { value: "red", label: "red" },
    { value: "blue", label: "blue" },
    { value: "darkcyan", label: "darkcyan" },
  ];

  return (
    <form
      id="productform"
      onSubmit={submitHandler}
      className="add__product__form bg-white shadow-sm p-4"
    >
      <h2 className="cms__title mb-4">Add Product</h2>
      <Input
        label="Product Name/ Title"
        option="(English Language)"
        name="product_name"
        type="text"
        required={true}
        placeholder="Enter Product Name"
        onChange={inputHandler}
      />

      <Input
        label="Product Name/ Title"
        option="(Bangla Language) (optional)"
        name="product_name_bangla"
        type="text"
        placeholder="Enter Product Name (bangla)"
        onChange={inputHandler}
      />
      <Input
        label="Product Name/ Title"
        option="(Banglish Language) (optional)"
        name="product_name_banglish"
        type="text"
        placeholder="Enter Product Name (banglish)"
        onChange={inputHandler}
      />

      <Input
        label="Brand Name"
        option="(optional)"
        name="brand"
        type="text"
        placeholder="Brand Name"
        onChange={inputHandler}
      />

      <SelectBox
        label="Category"
        name="category"
        required={true}
        options={categories}
        onChange={inputHandler}
      />

      <SelectBox
        label="Select Sub Category"
        name="sub_category"
        options={subCategories}
        onChange={inputHandler}
      />
      <SelectBox
        label="Select Child Category"
        name="child_category"
        options={childCategories}
        onChange={inputHandler}
      />

      <InputFile
        label="Current Features Image"
        name="featureImage"
        onChange={inputHandler}
        required={true}
      />

      <InputFile
        label="Product Gallery"
        option="Multiple Image (optional)"
        name="featureImage"
        onChange={inputHandler}
        multiple={true}
      />

      <Input
        label="Youtube Video URL"
        option="(optional)"
        name="youtube_url"
        type="text"
        placeholder="Enter Youtube Video URL"
        onChange={inputHandler}
      />
      <SelectBox
        label="Product Condition"
        name="productCondition"
        options={productCondition}
        onChange={inputHandler}
        option="(optional)"
      />

      <Input
        label="Product  Measurements"
        option="(optional)"
        name="product_size_check"
        type="text"
        placeholder="Enter Product Sizes"
        onChange={inputHandler}
      />

      <Input
        label="Delivery Time"
        option="(optional)"
        name="product_size_check"
        type="text"
        placeholder="Delivery Time"
        onChange={inputHandler}
      />

      <div className="mb-3 row">
        <label for="product_colors" className="col-sm-3 col-form-label">
          <span className="add__product__form__title">Product Colors</span>
          <span className="text-secondary text__small">
            (Choose Your Favourite Color.)
          </span>
        </label>
        <div className="col-sm-9">
          <div className="row">
            <div className="col-md-4">
              <Select
                isMulti
                name="category"
                options={options}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={onChange}
              />
            </div>
            <div className="col-md-8">
              <div className={styles.productColorWrapper}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Color Name"
                />
                <input
                  type="text"
                  className="form-control ms-2"
                  placeholder="Enter Price"
                />

                <button type="button" className={styles.colorButton}>
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Input
        label="Product Stock"
        option="Leave Empty will Show Always Available (optional)"
        name=""
        type="text"
        placeholder=" e.g. 15"
        onChange={inputHandler}
      />
      <Input
        label="Product Regular Price"
        option="(optional)"
        name=""
        type="text"
        placeholder="e.g. 00"
        onChange={inputHandler}
      />
      <Input
        label="Product Selling Price"
        option="(optional)"
        name=""
        type="text"
        placeholder="e.g. 00"
        onChange={inputHandler}
        required={true}
      />
      <Input
        label="Product Buying Price"
        option="(In Taka)"
        name="buying_price"
        type="text"
        placeholder="e.g. 200 tk"
        onChange={inputHandler}
      />

      <div className="mb-3 row">
        <label for="meta_description" className="col-sm-3 col-form-label">
          <span className="add__product__form__title ">
            Product Description
          </span>
        </label>
        <div className="col-sm-9">
          <CKEditor
            className="height"
            editor={ClassicEditor}
            data={description}
            name="description"
            onChange={(event, editor) => {
              const data = editor.getData();
              setDescription(data);
              // console.log({ event, editor, data });
            }}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="meta_description" className="col-sm-3 col-form-label">
          <span className="add__product__form__title ">
            Product Term and Condition
          </span>
        </label>
        <div className="col-sm-9">
          <CKEditor
            className="height"
            editor={ClassicEditor}
            data={description}
            name="description"
            onChange={(event, editor) => {
              const data = editor.getData();
              setDescription(data);
              // console.log({ event, editor, data });
            }}
          />
        </div>
      </div>

      <div className="form-check py-3 h4 text-center">
        <label className="form-check-label" for="seo">
          <span style={{ fontWeight: "600" }}>Allow Product SEO</span>
        </label>
      </div>

      <Input
        label="Product Mega Title"
        option="Write meta Separated by Comma [,] (optional)"
        name=""
        type="text"
        placeholder="Meta Title"
        onChange={inputHandler}
      />
      <Input
        label="Product Meta Tags"
        option="Write meta Separated by Comma [,] (optional)"
        name=""
        type="text"
        placeholder="Meta Tags"
        onChange={inputHandler}
      />

      <div className="mb-3 row">
        <label for="meta_description" className="col-sm-3 col-form-label">
          <span className="add__product__form__title ">
            Product Meta Description
          </span>
          <span className="text-secondary text__small"> (optional) </span>
        </label>
        <div className="col-sm-9">
          <textarea
            type="text"
            rows="3"
            className="form-control"
            id="meta_description"
            placeholder="Meta Description "
          />
        </div>
      </div>

      <div className="text-center">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
