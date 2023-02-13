import $ from "jquery";
import React, { useEffect, useState } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import instance from "../../../../base_url.js";

const Getsubcategory = (props) => {
  const { cat_id,language } = props;
  const [subcategory, setsubCategory] = useState([]);

  const getsubCat = async () => {
    if (subcategory.length === 0) {
      await instance
        .post("main_home/get_sub_cat", {
          key: "7fbaf493e3fe38a48934d93a3168926018adb657",
          cat_id: cat_id,
        })
        .then((response) => {
          setsubCategory(response.data);
        });
    }
  };

  //getsubCat();

  return (
    <ul className="home__sidebar__menu__dropdown">
      {/* {subcategory?.map((category) => (
        <li className="home__sidebar__menu__dropdown__item">
          <NavLink
            to="/product-filter"
            className="home__sidebar__menu__dropdown__link"
          >
            <AiOutlineCaretRight className="home__sidebar__menu__dropdown__link__icon" />
            <span className="home__sidebar__menu__dropdown__link__name">
            {language ? category.sub_cat_name : category.sub_category_bangla}
            </span>
          </NavLink>
        </li>
      ))} */}
    </ul>
  );
};

export default Getsubcategory;
