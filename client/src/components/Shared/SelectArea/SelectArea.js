import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { useLocation } from "react-router";
import cmsSidebarToggle from "../../../utils/cmsSidebarToggle";
import SelectAreaSelect from "./SelectNearestArea";
import SelectThana from "./SelectThana";
import "./SelectArea.css";
import { useHistory } from "react-router-dom";
import instance from "../../../base_url";

const SelectArea = () => {
  if (!localStorage.getItem("language")) {
    localStorage.setItem("language", "en");
  }
  var applicablelanguage = localStorage.getItem("language");
  if (document.getElementById("language")) {
    document.getElementById("language").value = applicablelanguage;
  }
  if (localStorage.getItem("language") === "en") {
    applicablelanguage = true;
  } else {
    applicablelanguage = false;
  }

  const location = useLocation();
  const [district, setdistrict] = useState([]);
  const [thana, setThana] = useState([]);
  const [area, setArea] = useState([]);
  const [district_id, setdistrict_id] = useState([]);
  const [thana_id, setThana_id] = useState([]);
  const [area_id, setArea_id] = useState([]);
  const getDistrict_change = async () => {
    await instance.post("get-district").then((response) => {
      if (district.length === 0) {
        setdistrict(response.data);
      }
    });
  };

  if (localStorage.getItem("location")) {
    var locationData = JSON.parse(localStorage.getItem("location"));
    if(document.getElementById("district_change")){
      document.getElementById("district_change").innerHTML = locationData.district_name;
    }
    if(document.getElementById("district_change")){
      document.getElementById("thana_change").innerHTML = locationData.thana_name;
    }
    if(document.getElementById("district_change")){
      document.getElementById("area_change").innerHTML = locationData.area_name;
    }
  }

  function setlanguage() {
    var language = document.getElementById("language").value;
    localStorage.setItem("language", language);
    window.location.reload(false);
  }

  function goto_home_change() {
    var district = document.getElementById("district_change").value;
    var thana = document.getElementById("thana_change").value;
    var area = document.getElementById("area_change").value;

    if (
      district !== null &&
      district !== "" &&
      thana !== null &&
      thana != "" &&
      area !== null &&
      area !== ""
    ) {
      var district_name = "";
      console.log(district_name);

      var thana_name = document.getElementById(
        "thana_change"
      ).innerHTML;
      console.log(thana_name);

      var area_name = document.getElementById("area_change" ).innerHTML;
      console.log(area_name);

      var location_data = {
        district: district,
        district_name: district_name,
        thana: thana,
        thana_name: thana_name,
        area: area,
        area_name: area_name,
      };
      setdistrict_id(district);
      setArea_id(area);
      setThana_id(thana);

      localStorage.setItem("location", JSON.stringify(location_data));
      if (localStorage.getItem("location")) {
        var locationData = JSON.parse(localStorage.getItem("location"));
        document.getElementById("district_change").value=locationData.district;
        console.log(locationData.district);
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

  const getThana_chnage = async () => {
    var filter_district = document.getElementById("district_change").value;
    await instance
      .post("get-thana", {
        type: filter_district,
      })
      .then((response) => {
        setThana(response.data);
      });
  };
  const getArea_change = async () => {
    var filter_thana = document.getElementById("thana_change").value;
    await instance
      .post("get-area", {
        type: filter_thana,
      })
      .then((response) => {
        setArea(response.data);
      });
  };
  getDistrict_change();

  return (
    <section className="select__area">
      <div className="select__area__flex">
        <div className="category__toggle">
          {location.pathname === "/" ? (
            <div
              className="home__sidebar__menu__category"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <GoThreeBars className="" />
              <span>Category</span>
            </div>
          ) : (
            <div
              onClick={() => cmsSidebarToggle()}
              className="home__sidebar__menu__category"
            >
              <GoThreeBars className="" />
              <span>Category</span>
            </div>
          )}
        </div>
        <div className="select__area__filter__wrapper">
          <div className="area__filter__btn__wrapper">
            <h3 className="select__area__title mobile-none"></h3>
            <h3 className="select__area__title" id="select__area__title">
              Please, Select Your Area
            </h3>
            <button
              className="btn btn-light btn-sm d-block d-lg-none"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Change
            </button>
          </div>

          <div className="d-none d-lg-flex">
            <div
              className="select__area__filter"
              aria-label="Default select example"
              id="district_change"
            >
            
            </div>
            <div
              className="select__area__filter"
              aria-label="Default select example"
              id="thana_change"
            >
            </div>
            <div
              className="select__area__filter"
              aria-label="Default select example"
              id="area_change"
            >
            </div>
            <button
              className="btn btn-light btn-sm d-block "
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Change
            </button>
            &nbsp;&nbsp;
            <select id="language" onChange={setlanguage}>
              <option value="en">English</option>
              <option value="bn">Bengali</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectArea;
