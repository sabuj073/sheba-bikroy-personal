import { useState } from "react";
import Input from "../Components/Input/Input";
import InputFile from "../Components/Input/InputFile";
import SelectBox from "../Components/Input/SelectBox";
import instance from "../../../base_url";
import swal from "sweetalert";
import Categories from './../../MainHome/Categories';
import $ from "jquery";

const CreateSubCategory = () => {
    const [subCategory, setSubCategory] = useState({});
    const [categories_data, setCategories] = useState([]);
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

  const fileHandler = (e) => {
    uploadImage(e.target.files[0],e.target.name);
    // write file handler code ...
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
    setSubCategory((state) => ({
      ...state,
      [data_path]: file.secure_url,
    }));
    onChange();
  };

    const inputHandler = (event) => {
        const { name, value } = event.target;
        setSubCategory((state) => ({
            ...state,
            [name]: value
        }))
        console.log(subCategory);
        onChange();
    };
    getCat();

    const categories = [];
    if(categories_data.length>0 && categories.length<=0){
        categories_data.map((val, key) => {
            return categories.push({value: val.cat_id, name: val.cat_title});  
           });

        console.log(categories);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        create_sub_category();

    }

    const create_sub_category = async () => {

        $("#create_sub_alert").html(
          '<div className="alert alert-info alert-dismissible"><strong>Please Wait</div>'
        );
        await instance
          .post("main_home/create-sub-category", {
            sub_category_name: subCategory.sub_category_name,
            sub_category_bangla: subCategory.sub_category_bangla,
            category: subCategory.category,
            slug: subCategory.slug,
            meta_title: subCategory.meta_title,
            meta_description: subCategory.meta_description,
            category_image:subCategory.category_image,
            category_icon:subCategory.category_icon,
            key:"7fbaf493e3fe38a48934d93a3168926018adb657"
          })
          .then((response) => {
            document.getElementById("addvendorform").reset();
            swal("Success!", "Sub Category Created!", "success");
          });
      };

    const onChange = () => {
    
    
        if(subCategory.sub_category_name && subCategory.sub_category_bangla && subCategory.category && subCategory.slug && subCategory.meta_title
          && subCategory.meta_description ){
            document.getElementById("submit_btn").disabled = false;
        }
      };

    return (
        <div className="create__category mt-3">
            <div id="create_sub_alert"></div>
            <form
                onSubmit={submitHandler}
                className="create__category__form bg-white shadow-sm p-4"
                id="addvendorform"
            >
                <h2 className="cms__title mb-4">Create Sub Category</h2>

                <Input
                    label="Sub Category Name "
                    option="(English Language)"
                    name="sub_category_name"
                    type="text"
                    placeholder="Enter Sub Category Name"
                    onChange={inputHandler}
                    required={true}
                />

                <Input
                    label="Sub Category Name"
                    option="(Bangla Language) (optional)"
                    name="sub_category_bangla"
                    type="text"
                    placeholder="Enter Sub Category Name (bangla)"
                    onChange={inputHandler}
                    required={false}
                />
                <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">
                <span className="add__product__form__title">Select Category<span> *</span></span>
                </label>
                <div className="col-md-9">
                <select className="form-select"label="Select Category"
                    name="category"
                    required={true}>
                  {categories.map((option) => (
                    <option key={option.name} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
                </div>
                </div>


                <Input
                    label="Sub Category Slug"
                    name="slug"
                    type="text"
                    placeholder="Enter Sub Category Slug"
                    onChange={inputHandler}
                    required={true}
                />


                <Input
                    label="Meta Title"
                    name="meta_title"
                    type="text"
                    placeholder="Enter Meta Title"
                    onChange={inputHandler}
                    required={false}
                />

                <Input
                    label="Meta Description"
                    name="meta_description"
                    type="text"
                    placeholder="Enter Meta Description"
                    onChange={inputHandler}
                    required={false}
                />

                <InputFile
                    label="Sub Category Image"
                    name="category_icon"
                    onChange={fileHandler}
                    multiple={false}
                    required={true}
                />
                <InputFile
                    label="Sub Category Banner Image"
                    name="category_image"
                    onChange={fileHandler}
                    multiple={false}
                    required={true}
                />

                <div className="text-center">
                    <button disabled type="submit" id="submit_btn" className="btn btn-success me-3">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateSubCategory;
