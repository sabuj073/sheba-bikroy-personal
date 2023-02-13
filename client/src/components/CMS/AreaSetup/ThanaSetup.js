import $ from "jquery";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import instance from "../../../base_url.js";
import AreaModal from "./AreaModal";
import "./AreaSetup.css";
import DistrictModal from "./DistrictModal";
import ThanaModal from "./ThanaModal";

const AreaSetup = () => {
  //initialize datatable
  window.setInterval(() => {
    $("#thana_table").DataTable();
  }, 500);

  const [district, setdistrict] = useState([]);
  const [thana, setThana] = useState([]);

  //////Update Purpose ///
  const [district_update, setdistrict_update] = useState([]);
  const [thana_update, setThana_update] = useState([]);
  /////Update Purpose ///

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

  const createThana = async () => {
    var district_id = document.getElementById("district_id").value;
    var thana_name = document.getElementById("thana_name").value;
    var thana_name_bn = document.getElementById("thana_name_bn").value;
    $("#create_thana_alert").html(
      '<div className="alert alert-info alert-dismissible"><strong>Please Wait</div>'
    );
    await instance
      .post("create-thana", {
        district_id: district_id,
        thana_name: thana_name,
        thana_name_bn:thana_name_bn
      })
      .then((response) => {
        $("#create_thana_alert").html(
          '<div className="alert alert-success alert-dismissible"><strong>Added</div>'
        );
        window.location.href = "";
      });
  };

  const deleteThana = async (id) => {
    $("#create_thana_alert").html(
      '<div className="alert alert-info alert-dismissible"><strong>Please Wait</div>'
    );
    await instance
      .post("delete-thana", {
        thana_id: id,
      })
      .then((response) => {
        $("#create_thana_alert").html(
          '<div className="alert alert-danger alert-dismissible"><strong>Deleted</div>'
        );
        window.location.href = "";
      });
  };

  const updateThana = async (districtId, thanaName, thanaId,bn_thana_name) => {
    $("#thana_name_edit").val(thanaName);
    $("#district_id_edit_thana").val(districtId);
    $("#thana_id_edit_thana").val(thanaId);
    $("#bn_thana_name").val(bn_thana_name);
  };

  getDistrict();
  getThana();

  return (
    <>
      <Helmet>
        <title>Area Setup</title>
        <meta name="description" content="Area Setup" />
      </Helmet>

      <div className="area__setup">
        <div className="container-fluid">
          <h1 className="area__setup__title">Tahana Setup</h1>

          {/* Create Thana Area */}
          <div className="area__setup__container">
            <div className="area__setup__level"></div>
            <div id="create_thana_alert"></div>
            <div className="area__setup__form">
              <select
                id="district_id"
                className="area__setup__select mb-3"
                aria-label="Default select example"
              >
                <option selected>Select District</option>
                {district.map((val) => {
                  return (
                    <option value={val.district_id}>{val.district_name}</option>
                  );
                })}
              </select>
              <input
                type="text"
                name="district"
                id="thana_name"
                className="area__setup__input"
                placeholder="Enter Thana Name"
              />
              <br/>
              <input
                type="text"
                name="district"
                id="thana_name_bn"
                className="area__setup__input"
                placeholder="Enter Thana Name Bengali"
              />
              <button
                type="submit"
                className="area__setup__save__btn"
                onClick={() => createThana()}
              >
                Save
              </button>
            </div>
            <div className="area__setup__select__area">
              <select
                className="area__setup__select__inline mb-3"
                aria-label="Default select example"
              >
                <option selected>Select District</option>
                {district.map((val, key) => {
                  return (
                    <option value={val.district_id}>{val.district_name}</option>
                  );
                })}
              </select>
            </div>
            <div className="area__setup__area__list">
              <br></br>
              <div className="table-responsive">
                <table id="thana_table" className="display">
                  <thead>
                    <tr>
                      <th>SL</th>
                      <th>Thana Name</th>
                      <th>Thana Name Bangla</th>
                      <th>District Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {thana.map((val, key) => {
                      return (
                        <tr key={key}>
                          <td>{++key}</td>
                          <td>{val.thana_name}</td>
                          <td>{val.bn_thana_name}</td>
                          <td>{val.district_name}</td>
                          <td>
                            <div className="district__name__action">
                              <button
                                type="button"
                                className="area__setup__action__btn"
                                data-bs-toggle="modal"
                                data-bs-target="#thanaModal"
                                onClick={() =>
                                  updateThana(
                                    val.district_id,
                                    val.thana_name,
                                    val.thana_id,
                                    val.bn_thana_name
                                  )
                                }
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                className="area__setup__action__btn"
                                onClick={() => deleteThana(val.thana_id)}
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
