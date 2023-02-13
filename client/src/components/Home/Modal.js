import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import instance from "../../base_url.js";

const Modal = () => {
  const history = useHistory();
  if (localStorage.getItem("location")) {
    var locationData = JSON.parse(localStorage.getItem("location"));
    try {
      document.getElementById("select__area__title").innerHTML =
        locationData.area_name +
        ", " +
        locationData.thana_name +
        ", " +
        locationData.district_name;
    } catch {}
  }
  const [district, setdistrict] = useState([]);
  const [thana, setThana] = useState([]);
  const [area, setArea] = useState([]);
  const getDistrict = async () => {
    await instance.post("get-district").then((response) => {
      if (district.length === 0) {
        setdistrict(response.data);
      }
    });
  };

  function goto_home() {
    var district = document.getElementById("district").value;
    var thana = document.getElementById("thana").value;
    var area = document.getElementById("area").value;

    if (
      district !== null &&
      district !== "" &&
      thana !== null &&
      thana != "" &&
      area !== null &&
      area !== ""
    ) {
      var district_name = document.getElementById(
        "district_" + district
      ).innerHTML;
      console.log(district_name);

      var thana_name = document.getElementById("thana_" + thana).innerHTML;
      console.log(thana_name);

      var area_name = document.getElementById("area_" + area).innerHTML;
      console.log(area_name);

      var location_data = {
        district: district,
        district_name: district_name,
        thana: thana,
        thana_name: thana_name,
        area: area,
        area_name: area_name,
      };

      localStorage.setItem("location", JSON.stringify(location_data));
      if (localStorage.getItem("location")) {
        var locationData = JSON.parse(localStorage.getItem("location"));
        document.getElementById("select__area__title").innerHTML =
          locationData.area_name +
          ", " +
          locationData.thana_name +
          ", " +
          location_data.district_name;
      }
      window.location.href = "/home";
    }
  }
  const getThana = async () => {
    var filter_district = document.getElementById("district").value;
    await instance
      .post("get-thana", {
        type: filter_district,
      })
      .then((response) => {
        setThana(response.data);
      });
  };
  const getArea = async () => {
    var filter_thana = document.getElementById("thana").value;
    await instance
      .post("get-area", {
        type: filter_thana,
      })
      .then((response) => {
        setArea(response.data);
      });
  };
  getDistrict();

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="area__select__modal__dismiss">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <form className="area__select__modal">
            <h3>Please Select Your Area</h3>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              id="district"
              onChange={getThana}
            >
              <option value="">Select District</option>
              {district.map((val, key) => {
                return (
                  <option
                    key={key}
                    id={"district_" + val.district_id}
                    value={val.district_id}
                  >
                    {val.district_name}
                  </option>
                );
              })}
            </select>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              id="thana"
              onChange={getArea}
            >
              <option value="">Select Thana</option>
              {thana.map((val, key) => {
                return (
                  <option
                    key={key}
                    id={"thana_" + val.thana_id}
                    value={val.thana_id}
                  >
                    {val.thana_name}
                  </option>
                );
              })}
            </select>
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              id="area"
            >
              <option value="">Select Nearest Area</option>
              {area.map((val, key) => {
                return (
                  <option
                    key={key}
                    id={"area_" + val.area_id}
                    value={val.area_id}
                  >
                    {val.area_name}
                  </option>
                );
              })}
            </select>
            <div className="text-end">
              <button
                onClick={goto_home}
                type="button"
                className="btn btn-light"
                data-bs-dismiss="modal"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
