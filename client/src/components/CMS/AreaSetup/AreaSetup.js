import $ from "jquery";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import instance from "../../../base_url.js";
import AreaModal from "./AreaModal";
import "./AreaSetup.css";
import DistrictModal from "./DistrictModal";
import ThanaModal from "./ThanaModal";
import Select from "react-select";

const AreaSetup = () => {
  var value = [];
  const options = [];

  //initialize datatable
  window.setInterval(() => {
    $("#area_table").DataTable();
  }, 500);

  const [district, setdistrict] = useState([]);
  const [thana, setThana] = useState([]);
  const [area, setArea] = useState([]);
  const [cat, setCat] = useState([]);

  //////Update Purpose ///
  const [district_update, setdistrict_update] = useState([]);
  const [thana_update, setThana_update] = useState([]);
  /////Update Purpose ///

  function updatevalue(e) {
    var options = e;
    value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      value.push(options[i].value);
    }
  }

  const getDistrict = async () => {
    await instance.post("get-district").then((response) => {
      if (district.length == 0 && Number(response.data.length) > 0) {
        setdistrict(response.data);
        setdistrict_update(response.data);
      }
    });
  };

  const getThana = async () => {
    await instance.post("get-thana-area").then((response) => {
      if (thana.length == 0 && Number(response.data.length) > 0) {
        setThana(response.data);
        setThana_update(response.data);
      }
    });
  };

  const getArea = async () => {
    await instance.post("get-area-all").then((response) => {
      if (area.length == 0 && Number(response.data.length) > 0) {
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
          cat.map((val, key) => {});
        }
      });
  };

  const createArea = async () => {
    var district_id = document.getElementById("district_id_thana").value;
    var thana_id = document.getElementById("thana_id_thana").value;
    var area_name = document.getElementById("area_name").value;
    var category = value.toString();
    var delivery_charge = document.getElementById("delivery_charge").value;
    var over_delivery_fee = document.getElementById("over_delivery_fee").value;
    var area_name_bengali = document.getElementById("area_name_bengali").value;
    $("#create_area_alert").html(
      '<div className="alert alert-info alert-dismissible"><strong>Please Wait</div>'
    );
    await instance
      .post("create-area", {
        district_id: district_id,
        thana_id: thana_id,
        area_name: area_name,
        category: category,
        delivery_charge: delivery_charge,
        over_delivery_fee: over_delivery_fee,
        area_name_bengali:area_name_bengali
      })
      .then((response) => {
        $("#create_area_alert").html(
          '<div className="alert alert-success alert-dismissible"><strong>Added</div>'
        );
        window.location.href = "";
      });
  };

  const deleteArea = async (id) => {
    $("#create_area_alert").html(
      '<div className="alert alert-info alert-dismissible"><strong>Please Wait</div>'
    );
    await instance
      .post("delete-area", {
        area_id: id,
      })
      .then((response) => {
        "#create_area_alert".html(
          '<div className="alert alert-danger alert-dismissible"><strong>Deleted</div>'
        );
        window.location.href = "";
      });
  };

  const updateArea = async (districtId, thanaId, areaName, areaId,bn_area_name,dc,odc) => {
    $("#area_name_edit").val(areaName);
    $("#district_id_edit_area").val(districtId);
    $("#thana_id_edit_area").val(thanaId);
    $("#update_area_id").val(areaId);
    $("#area_name_edit_bn").val(bn_area_name);
    $("#delivery_charge_edit").val(dc);
    $("#over_delivery_fee_edit").val(odc);
  };

  getDistrict();
  getThana();
  getArea();
  getCat();

  if(cat.length>0 && options.length<=0){
    cat.map((val, key) => {
     return options.push({value: val.cat_id, label: val.cat_title}); 
    });
}

  return (
    <>
      <Helmet>
        <title>Area Setup</title>
        <meta name="description" content="Area Setup" />
      </Helmet>

      <div className="area__setup">
        <div className="container-fluid">
          <h1 className="area__setup__title">Area Setup</h1>

          {/* Create  Area  Name */}
          <div className="area__setup__container">
            <div className="area__setup__level"></div>
            <div id="create_area_alert"></div>
            <div className="area__setup__form">
              <label>Select District *</label>
              <select
                id="district_id_thana"
                className=" area__setup__select mb-3"
                aria-label="Default select example"
              >
                <option selected>Select District</option>
                {district.map((val, key) => {
                  return (
                    <option value={val.district_id}>{val.district_name}</option>
                  );
                })}
              </select>
              <label>Select Thana *</label>
              <select
                id="thana_id_thana"
                className=" area__setup__select mb-3"
                aria-label="Default select example"
              >
                <option selected>Select Thana</option>
                {thana.map((val, key) => {
                  return <option value={val.thana_id}>{val.thana_name}</option>;
                })}
              </select>
              <label>Area Name *</label>
              <input
                type="text"
                name="district"
                id="area_name"
                className="area__setup__input"
                placeholder="Enter Area Name"
              />
              <br />
              <label>Area Name (Bengali) *</label>
              <input
                type="text"
                name="district"
                id="area_name_bengali"
                className="area__setup__input"
                placeholder="Enter Area Name Bengali"
              />
              <br/>
              <label>Select Categories *</label>
              <Select
                isMulti
                name="category"
                id="category"
                options={options}
                className="basic-multi-select area__setup__input"
                classNamePrefix="select"
                onChange={updatevalue}
              />
              <br />
              <label>Delivery Charge *</label>
              <input
                type="text"
                name="delivery_charge"
                id="delivery_charge"
                className="area__setup__input"
                placeholder="Enter delivery charge"
              />
              <br />
              <label>Over Delivery Fee *</label>
              <input
                type="text"
                name="over_delivery_fee"
                id="over_delivery_fee"
                className="area__setup__input"
                placeholder="Enter amount for charge fee"
              />

              <button
                type="submit"
                className="area__setup__save__btn"
                onClick={() => createArea()}
              >
                Save
              </button>
            </div>
            <div className="area__setup__select__area">
              <select
                className="area__setup__select__inline mb-3 me-3"
                aria-label="Default select example"
              >
                <option selected>Select District</option>
                {district.map((val, key) => {
                  return (
                    <option value={val.district_id}>{val.district_name}</option>
                  );
                })}
              </select>
              <select
                className="area__setup__select__inline mb-3"
                aria-label="Default select example"
              >
                <option selected>Select Thana</option>
                {thana.map((val, key) => {
                  return <option value={val.thana_id}>{val.thana_name}</option>;
                })}
              </select>
            </div>
            <div className="area__setup__area__list">
              <br></br>
              <div className="table-responsive">
                <table id="area_table" className="display">
                  <thead>
                    <tr>
                      <th>SL</th>
                      <th>Area Name</th>
                      <th>Area Name Bangla</th>
                      <th>Thana Name</th>
                      <th>District Name</th>
                      <th>Categories</th>
                      <th>Delivery Charge</th>
                      <th>Over Delivery Free</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {area.map((val, key) => {
                      return (
                        <tr key={key}>
                          <td>{++key}</td>
                          <td>{val.area_name}</td>
                          <td>{val.bn_area_name}</td>
                          <td>{val.thana_name}</td>
                          <td>{val.district_name}</td>
                          <td>{val.categories}</td>
                          <td>{val.delivery_charge}</td>
                          <td>{val.over_delivery_charge}</td>
                          <td>
                            <div className="district__name__action">
                              <button
                                type="button"
                                className="area__setup__action__btn"
                                data-bs-toggle="modal"
                                data-bs-target="#areaModal"
                                onClick={() =>
                                  updateArea(
                                    val.district_id,
                                    val.thana_id,
                                    val.area_name,
                                    val.area_id,
                                    val.bn_area_name,
                                    val.delivery_charge,
                                    val.over_delivery_charge
                                  )
                                }
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                className="area__setup__action__btn"
                                onClick={() => deleteArea(val.area_id)}
                              >
                                {" "}
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
        </div>
      </div>

      <DistrictModal />
      <ThanaModal />
      <AreaModal />
    </>
  );
};

export default AreaSetup;
