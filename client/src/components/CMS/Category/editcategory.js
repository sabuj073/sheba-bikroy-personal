import { useState } from "react";
import Input from "../Components/Input/Input";
import InputFile from "../Components/Input/InputFile";
import swal from "sweetalert";
import instance from "../../../base_url";
import $ from "jquery";

const CreateCategory = () => {
  const [category, setCategory] = useState({});
  const [categoryImage, setCategoryimage] = useState(null);
  const [categoryIcon, setCategoryIcon] = useState(null);
  var setCategoryimage_secure_url = "";
  var setCategoryIcon_secure_url = "";

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
      })
      .then((response) => {
        $("#create_area_alert").html("");
        document.getElementById("addvendorform").reset();
        swal("Success!", "Category Updated!", "success");
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
      category.meta_description
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

    console.log(setCategory);
  };

  return (
    <div className="create__category mt-3">
      <div id="create_area_alert"></div>
      <form
        id="addvendorform"
        className="create__category__form bg-white shadow-sm p-4"
        onSubmit={submithandeler}
      >
        <h2 className="cms__title mb-4">Create Category</h2>
        <Input
          label="Category Name"
          option="(English Language)"
          name="category_name"
          type="text"
          id="category_name"
          placeholder="Enter Category Name"
          onChange={inputHandler}
          required={true}
        />
        <Input
          label="Category Name"
          option="Bangla Language"
          name="category_bangla"
          type="text"
          id="category_bangla"
          placeholder="Enter Category Name (bangla)"
          onChange={inputHandler}
          required={true}
        />
        <Input
          label="Slug "
          name="slug"
          type="text"
          id="slug"
          placeholder="Enter Category Slug "
          onChange={inputHandler}
          required={true}
        />
        <Input
          label="Meta Title"
          name="meta_title"
          type="text"
          id="meta_title"
          placeholder="Enter Meta Title"
          onChange={inputHandler}
          required={true}
        />

        <Input
          label="Meta Description"
          name="meta_description"
          type="text"
          id="meta_description"
          placeholder="Enter Meta Description"
          onChange={inputHandler}
          required={true}
        />

        <InputFile
          label="Category Icon"
          name="category_icon"
          id="category_icon"
          onChange={categoryiconhandeler}
          multiple={false}
        />
        <InputFile
          label="Category Image"
          name="category_image"
          id="category_image"
          onChange={categoryimagehandeler}
          multiple={false}
        />

        <div className="text-center">
          <button type="submit" className="btn btn-success me-3">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
