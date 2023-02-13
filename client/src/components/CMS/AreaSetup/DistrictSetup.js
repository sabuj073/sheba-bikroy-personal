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
    $("#district_table").DataTable();
  }, 500);

  const [district, setdistrict] = useState([]);

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

  const createDistrict = async () => {
    var district_name = document.getElementById("district_name").value;
    var district_name_bn = document.getElementById("district_name_bn").value;
    $("#create_district_alert").html(
      '<div className="alert alert-info alert-dismissible"><strong>Please Wait</div>'
    );
    await instance
      .post("create-district", {
        name: district_name,
        name_bn:district_name_bn,
      })
      .then((response) => {
        $("#create_district_alert").html(
          '<div className="alert alert-success alert-dismissible"><strong>Added</div>'
        );
        window.location.href = "";
      });
  };

  const deleteDistrict = async (id) => {
    $("#create_district_alert").html(
      '<div className="alert alert-info alert-dismissible"><strong>Please Wait</div>'
    );
    await instance
      .post("delete-district", {
        id: id,
      })
      .then((response) => {
        $("#create_district_alert").html(
          '<div className="alert alert-danger alert-dismissible"><strong>Deleted</div>'
        );
        window.location.href = "";
      });
  };

  const updateDistrict = async (districtName, districtId,district_bn) => {
    $("#district_name_edit").val(districtName);
    $("#district_id_edit").val(districtId);
    $("#district_name_edit_bn").val(district_bn);
  };

  getDistrict();

  return (
    <>
      <Helmet>
        <title>Area Setup</title>
        <meta name="description" content="Area Setup" />
      </Helmet>

      <div className="area__setup">
        <div className="container-fluid">
          <h1 className="area__setup__title">District Setup</h1>
          <div className="area__setup__container">
            <div className="area__setup__level"></div>
            <div id="create_district_alert"></div>
            <div className="area__setup__form">
              <input
                type="text"
                name="district"
                id="district_name"
                className="area__setup__input"
                placeholder="Enter District Name"
              />
              <br/>
              <input
                type="text"
                name="district"
                id="district_name_bn"
                className="area__setup__input"
                placeholder="Enter District Name (Bengali)"
              />
              <button
                type="submit"
                className="area__setup__save__btn"
                onClick={() => createDistrict()}
              >
                Save
              </button>
            </div>
            <div className="area__setup__area__list">
              <br></br>
              <div className="table-responsive">
                <table id="district_table" className="display">
                  <thead>
                    <tr>
                      <th>SL</th>
                      <th>District Name</th>
                      <th>District Name Bangla</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {district.map((val, key) => {
                      return (
                        <tr key={key}>
                          <td>{++key}</td>
                          <td>{val.district_name}</td>
                          <td>{val.bn_district_name}</td>
                          <td>
                            <div className="district__name__action">
                              <button
                                type="button"
                                className="area__setup__action__btn"
                                data-bs-toggle="modal"
                                data-bs-target="#districtModal"
                                onClick={() =>
                                  updateDistrict(
                                    val.district_name,
                                    val.district_id,
                                    val.bn_district_name
                                  )
                                }
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                className="area__setup__action__btn"
                                onClick={() => deleteDistrict(val.district_id)}
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
