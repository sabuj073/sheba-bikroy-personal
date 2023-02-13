import { useState } from "react";
import Input from "../Components/Input/Input";
import InputFile from "../Components/Input/InputFile";
import swal from "sweetalert";
import instance from "../../../base_url";
import Select from "react-select";
import $ from "jquery";

const CreateServiceCategory = () => {
  const [category, setCategory] = useState({});
  const [categoryImage, setCategoryimage] = useState(null);
  const [categoryIcon, setCategoryIcon] = useState(null);
  const [area_data, setArea] = useState([]);
  var setCategoryimage_secure_url = "";
  var setCategoryIcon_secure_url = "";

  const area = [];

  const getArea = async () => {
    await instance.post("get-area-all").then((response) => {
      if (area_data.length == 0 && Number(response.data.length) > 0) {
        setArea(response.data);
      }
    });
  };

  const createCategory = async (
    Categoryimage_secure_url,
    CategoryIcon_secure_url
  ) => {
    $("#create_area_alert").html(
      '<div className="alert alert-info alert-dismissible"><strong>Please Wait</div>'
    );
    await instance
      .post("create-category", {
        categoryIcon: CategoryIcon_secure_url,
        categoryImage: Categoryimage_secure_url,
        category_name: category.category_name,
        category_bangla: category.category_bangla,
        slug: category.slug,
        meta_title: category.meta_title,
        meta_description: category.meta_description,
        category_banner_1: category.category_banner_1,
        category_banner_2: category.category_banner_2,
        area_id:category.area_id,
        type:"service_category"
      })
      .then((response) => {
        $("#create_area_alert").html("");
        document.getElementById("addvendorform").reset();
        swal("Success!", "Category Created!", "success");
      });
  };

  const categoryimagehandeler = async (e) => {
    const files = e.target.files;
    setCategoryimage(files[0]);
  };

  const categoryiconhandeler = async (e) => {
    const files = e.target.files;
    setCategoryIcon(files[0]);
  };

  const uploadImage = async (files, data_path) => {
    const data = new FormData();
    data.append("file", files);
    data.append("upload_preset", "ml_default");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dvxrcnzae/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    if (data_path === "setCategoryimage_secure_url") {
      setCategoryimage_secure_url = file.secure_url;
    } else {
      setCategoryIcon_secure_url = file.secure_url;
    }
    if (setCategoryimage_secure_url && setCategoryIcon_secure_url) {
      createCategory(setCategoryimage_secure_url, setCategoryIcon_secure_url);
    } else {
      console.log("Please wait");
    }
  };

  const submithandeler = (e) => {
    e.preventDefault();
    if (
      categoryIcon &&
      categoryImage &&
      category.category_name &&
      category.category_bangla &&
      category.category_bangla &&
      category.slug &&
      category.meta_title &&
      category.meta_description &&
      category.category_banner_1
    ) {
      uploadImage(categoryIcon, "setCategoryIcon_secure_url");
      uploadImage(categoryImage, "setCategoryimage_secure_url");
    } else {
      console.log("All marked fields are Required");
    }
  };

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setCategory((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const fileHandler = (e) => {
    uploadImage_extra(e.target.files[0], e.target.name);
    // write file handler code ...
  };

  const uploadImage_extra = async (files, data_path) => {
    const data = new FormData();
    data.append("file", files);
    data.append("upload_preset", "ml_default");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dvxrcnzae/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setCategory((state) => ({
      ...state,
      [data_path]: file.secure_url,
    }));
  };

  getArea();
  if (area_data.length > 0 && area.length <= 0) {
    area_data.map((val, key) => {
      return area.push({ value: val.area_id, name: val.area_name });
    });
  }

  return (
    <div className="create__category mt-3">
      <div id="create_area_alert"></div>
      <form
        id="addvendorform"
        className="create__category__form bg-white shadow-sm p-4"
        onSubmit={submithandeler}
      >
        <h2 className="cms__title mb-4">Create Service Category</h2>
        <div className="mb-3 row d-none">
          <label className="col-sm-3 col-form-label">
            <span className="add__product__form__title">
              Select Area<span> *</span>
            </span>
          </label>
          <div className="col-md-9">
            <select
              className="form-select"
              name="area_id"
              id="area_id"
              onChange={inputHandler}
            >
              {area.map((option) => (
                <option key={option.name} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Input
          label="Category Name"
          option="(English Language)"
          name="category_name"
          type="text"
          placeholder="Enter Category Name"
          onChange={inputHandler}
          required={true}
        />
        <Input
          label="Category Name"
          option="Bangla Language"
          name="category_bangla"
          type="text"
          placeholder="Enter Category Name (bangla)"
          onChange={inputHandler}
          required={true}
        />
        <Input
          label="Slug "
          name="slug"
          type="text"
          placeholder="Enter Category Slug "
          onChange={inputHandler}
          required={true}
        />
        <Input
          label="Meta Title"
          name="meta_title"
          type="text"
          placeholder="Enter Meta Title"
          onChange={inputHandler}
          required={true}
        />

        <Input
          label="Meta Description"
          name="meta_description"
          type="text"
          placeholder="Enter Meta Description"
          onChange={inputHandler}
          required={true}
        />

        <InputFile
          label="Category Icon"
          name="category_icon"
          onChange={categoryiconhandeler}
          multiple={false}
          required={true}
        />
        <InputFile
          label="Category Image"
          name="category_image"
          onChange={categoryimagehandeler}
          multiple={false}
          required={true}
        />
        <InputFile
          label="Category Banner 1"
          name="category_banner_1"
          onChange={fileHandler}
          multiple={false}
          required={true}
        />


        <div className="text-center">
          <button type="submit" className="btn btn-success me-3">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateServiceCategory;
