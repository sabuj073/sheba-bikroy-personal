import $ from "jquery";
import React, { useEffect, useState } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import image from "../../../../assets/images/icons/1.GroceryIcon.png";
import instance from "../../../../base_url.js";
import Subcategory from './subcategory';
import "./Sidebar.css";

const FinalSidebar = () => {
  var area_id = "";
  if (localStorage.getItem("language") === "en") {
    var language = true;
  } else {
    language = false;
  }

  const [categories, setCategories] = useState([]);
  const getCat = async () => {
    await instance
      .post("main_home/get_cat", {
        key: "7fbaf493e3fe38a48934d93a3168926018adb657",
        area_id: area_id,
      })
      .then((response) => {
        if (categories.length === 0) {
          setCategories(response.data);
        }
      });
  };
  if (localStorage.getItem("location")) {
    var locationData = JSON.parse(localStorage.getItem("location"));
    area_id = locationData.area;
    getCat();
  }

  useEffect(() => {
    const width = $(window).width();
    const body = document.querySelector("body");

    if (width < 768) {
      body.classList.add("cms-enlarged");
    }

    $(window).on("resize", function () {
      if (width < 768) body.classList.add("cms-enlarged");
    });
  }, []);

  return (
    <div className="home__sidebar">
      <div className="home__sidebar__wrapper">
        <ul className="home__sidebar__menu__nav add-background">
          <li className="home__sidebar__menu__title">Special Deals</li>

          <li className="home__sidebar__menu">
            <NavLink to="#" className="home__sidebar__menu__link">
              <img
                src={image}
                alt=""
                className="home__sidebar__menu__link__icon"
              />
              <span className="home__sidebar__menu__link__name">New Seal</span>
            </NavLink>
          </li>

          <li className="home__sidebar__menu">
            <NavLink to="#" className="home__sidebar__menu__link">
              <img
                src={image}
                alt=""
                className="home__sidebar__menu__link__icon"
              />
              <span className="home__sidebar__menu__link__name">New Seal</span>
            </NavLink>
          </li>

          <li className="home__sidebar__menu">
            <NavLink to="#" className="home__sidebar__menu__link">
              <img
                src={image}
                alt=""
                className="home__sidebar__menu__link__icon"
              />
              <span className="home__sidebar__menu__link__name">New Seal</span>
            </NavLink>
          </li>
        </ul>
        <ul className="home__sidebar__menu__nav">
          <li className="home__sidebar__menu__title">All Categories</li>

          {categories?.map((category) => (
            <li className="home__sidebar__menu dropdown">
              <NavLink to="#" className="home__sidebar__menu__link">
                <img
                  src={category.cat_icon}
                  alt=""
                  className="home__sidebar__menu__link__icon"
                />
                <span className="home__sidebar__menu__link__name">
                  {language ? category.cat_title : category.bn_cat_title}
                </span>
                <FiChevronRight className="home__sidebar__menu__link__right" />
              </NavLink>
              <Subcategory cat_id={category.cat_id} language={language}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FinalSidebar;
