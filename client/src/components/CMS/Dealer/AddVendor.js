import React, { useState } from "react";
import Select from "react-select";
import Input from "../Components/Input/Input";
import InputFile from "../Components/Input/InputFile";
import swal from "sweetalert";
import instance from "../../../base_url";
import $ from "jquery";

const AddVendor = () => {
  const [addDealer, setAddDealer] = useState({});
  const [district_data, setdistrict] = useState([]);
  const [thana_data, setThana] = useState([]);
  const [area_data, setArea] = useState([]);
  const [cat, setCat] = useState([]);


  var local_area_title = "local_area";
  var local_thana_title = "local_thana";
  var local_district_title = "local_district";




  const getDistrict = async () => {
    await instance.post("get-district").then((response) => {
      if (district_data.length == 0 && Number(response.data.length) > 0) {
        setdistrict(response.data);
      }
    });
  };

  const getThana = async () => {
    await instance.post("get-thana-area").then((response) => {
      if (thana_data.length == 0 && Number(response.data.length) > 0) {
        setThana(response.data);
      }
    });
  };

  const getArea = async () => {
    await instance.post("get-area-all").then((response) => {
      if (area_data.length == 0 && Number(response.data.length) > 0) {
        setArea(response.data);
      }
    });
  };

  const getCat = async () => {
    await instance
      .post("main_home/get_cat-all", {
        key: "7fbaf493e3fe38a48934d93a3168926018adb657",
      })
      .then((response) => {
        if (cat.length === 0) {
          setCat(response.data);
        }
      });
  };

  const district = [];

  const thana = [];

  const area = [];

  const categories = [];
  var district_value = [];
  var area_value = [];
  var thana_value = [];

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setAddDealer((state) => ({
      ...state,
      [name]: value,
    }));
    console.log(addDealer);
    onChange();
  };

  getDistrict();
  getThana();
  getArea();
  getCat();

  if(cat.length>0 && categories.length<=0){
    cat.map((val, key) => {
     return categories.push({value: val.cat_id, name: val.cat_title}); 
    });
}
if(district_data.length>0 && district.length<=0){
  district_data.map((val, key) => {
   return district.push({value: val.district_id, label: val.district_name}); 
  });
}

if(thana_data.length>0 && thana.length<=0){
  thana_data.map((val, key) => {
   return thana.push({value: val.thana_id, label: val.thana_name}); 
  });
}

if(area_data.length>0 && area.length<=0){
  area_data.map((val, key) => {
   return area.push({value: val.area_id, label: val.area_name}); 
  });
}

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
    setAddDealer((state) => ({
      ...state,
      [data_path]: file.secure_url,
    }));
    onChange();
  };



  const create_vendor = async () => {

    $("#create_area_alert").html(
      '<div className="alert alert-info alert-dismissible"><strong>Please Wait</div>'
    );
    await instance
      .post("main_home/create-vendor", {
        company_name: addDealer.company_name,
        dealer_name: addDealer.dealer_name,
        father_name: addDealer.father_name,
        mother_name: addDealer.mother_name,
        email: addDealer.email,
        phone: addDealer.phone,
        NID:addDealer.NID,
        permanent_address:addDealer.permanent_address,
        present_address:addDealer.present_address,
        local_categories:addDealer.local_categories,
        local_area:addDealer.local_area,
        local_thana:addDealer.local_thana,
        local_district:addDealer.local_district,
        provider_photo:addDealer.provider_photo,
        nid_photo:addDealer.nid_photo,
        trade_photo:addDealer.trade_photo,
        categoryCommission:addDealer.categoryCommission,
        key:"7fbaf493e3fe38a48934d93a3168926018adb657"
      })
      .then((response) => {
        document.getElementById("addvendorform").reset();
        swal("Success!", "Vendor Created!", "success");
      });
  };


  const submitHandler = (event) => {
    event.preventDefault();
    create_vendor();
    console.log(addDealer);
  };
  const onChange = () => {
    var local_categories = document.getElementById("categories").value.toString();

    setAddDealer((state) => ({
      ...state,
      ["local_categories"]: local_categories,
    }));

    console.log(addDealer);

    if(addDealer.company_name && addDealer.dealer_name && addDealer.father_name && addDealer.mother_name && addDealer.email
      && addDealer.phone && addDealer.NID && addDealer.permanent_address && addDealer.present_address && addDealer.local_categories && addDealer.local_area  && addDealer.local_thana  && addDealer.local_district  && addDealer.provider_photo && addDealer.nid_photo && addDealer.trade_photo){
        document.getElementById("submit_btn").disabled = false;
    }
  };

  function district_updatevalue(e) {
    var options = e;
    district_value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      district_value.push(options[i].value);
    }

    setAddDealer((state) => ({
      ...state,
      [local_district_title]: district_value.toString(),
    }));
    onChange();
  }

  function thana_updatevalue(e) {
    var options = e;
    thana_value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      thana_value.push(options[i].value);
    }
    setAddDealer((state) => ({
      ...state,
      [local_thana_title]: thana_value.toString(),
    }));
    onChange();
  }

  function area_updatevalue(e) {
    var options = e;
    area_value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      area_value.push(options[i].value);
    }
    setAddDealer((state) => ({
      ...state,
      [local_area_title]: area_value.toString(),
    }));
    onChange();
  }


  return (
    <div className="add__dealer container mt-3">
      <form
        id="addvendorform"
        className="add__dealer__form bg-white shadow-sm p-4"
        onSubmit={submitHandler}
      >
        <h2 className="cms__title">Add New Vendor (Form)</h2>

        <div className="information pb-4">
          <span>Personal Information</span>
        </div>

        <Input
          label="Shop/ Company Name"
          type="text"
          id="company_name"
          name="company_name"
          placeholder="Enter Shop/Company Name"
          onChange={inputHandler}
          required={true}
        />

        <Input
          label="Vendor Name"
          type="text"
          id="dealer_name"
          name="dealer_name"
          placeholder="Enter Vendor Name"
          onChange={inputHandler}
          required={true}
        />
        <Input
          label="Father's Name"
          type="text"
          id="father_name"
          name="father_name"
          placeholder="Enter Father's Name"
          onChange={inputHandler}
          required={true}
        />

        <Input
          label="Mother's Name"
          type="text"
          id="mother_name"
          name="mother_name"
          placeholder="Enter Mother's Name"
          onChange={inputHandler}
          required={true}
        />

        <Input
          label="E-mail Address"
          type="email"
          name="email"
          id="email"
          placeholder="Enter E-mail Address"
          onChange={inputHandler}
        />

        <Input
          label="Mobile Number"
          type="text"
          name="phone"
          id="phone"
          placeholder="Enter Mobile Number"
          onChange={inputHandler}
          required={true}
        />

        <Input
          label="NID Number"
          type="text"
          name="NID"
          id="nid"
          placeholder="Enter NID Number"
          onChange={inputHandler}
          required={true}
        />

        <Input
          label="Permanent Address"
          type="text"
          id="permanent_address"
          name="permanent_address"
          placeholder="Enter Permanent Address"
          onChange={inputHandler}
          required={true}
        />
        <Input
          label="Present Address"
          type="text"
          id="present_address"
          name="present_address"
          placeholder="Enter Present Address"
          onChange={inputHandler}
          required={true}
        />

        <InputFile
          label="Upload Provider Photo"
          name="provider_photo"
          id="provider_photo"
          onChange={fileHandler}
          required={true}
        />

        <InputFile
          label="Upload NID"
          name="nid_photo"
          id="upload_nid"
          onChange={fileHandler}
          required={true}
        />

        <InputFile
          label="Upload Trade Licence"
          name="trade_photo"
          id="trade_license"
          onChange={fileHandler}
          required={true}
        />

        <div className="mb-3 row">
          <label for="" className="col-sm-3 col-form-label">
            Choose Business Area
            <span style={{ color: "#ff0000", fontSize: "18px" }}> *</span>
          </label>
          <div className="col-sm-9">
            <div className="row">
              <div className="col-md-6">
                <span>District</span>
                <Select
                  isMulti
                  name="district"
                  id="district"
                  options={district}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={district_updatevalue}
                />
              </div>
              <div className="col-md-6">
                <span>Thana</span>
                <Select
                  isMulti
                  name="thana"
                  id="thana"
                  options={thana}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={thana_updatevalue}
                />
              </div>
              <div className="col-md-12 mt-2">
                <span>Nearest Area</span>
                <Select
                  isMulti
                  name="area"
                  id="area"
                  options={area}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={area_updatevalue}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3 row">
          <label for="" className="col-sm-3 col-form-label">
            Choose Product Categories
            <span style={{ color: "#ff0000", fontSize: "18px" }}> *</span>
          </label>

          <div className="col-md-9">
            <div className="row">
              <div className="col-6">
                <select className="form-select" name="categories" id="categories">
                  {categories.map((option) => (
                    <option key={option.name} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  name="categoryCommission"
                  id="categoryCommission"
                  className="form-control"
                  onChange={inputHandler}
                  placeholder="Enter Category Commission"
                />
              </div>
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-primary btn-sm mt-3">Add More</button>
            </div>
          </div>
        </div>

        <div className="text-center mt-3">
          <button disabled type="submit" className="btn btn-success me-3" id="submit_btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVendor;
