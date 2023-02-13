import React, { useState } from "react";
import { Link } from "react-router-dom";
import instance from "../../base_url.js";

const Categories = (props) => {
  const { language } = props;
  var area_id = "";

  const [cat, setCat] = useState([]);
  const getCat = async () => {
    await instance
      .post("main_home/get_cat", {
        key: "7fbaf493e3fe38a48934d93a3168926018adb657",
        area_id: area_id,
      })
      .then((response) => {
        if (cat.length === 0) {
          setCat(response.data);
        }
      });
  };
  if (localStorage.getItem("location")) {
    var locationData = JSON.parse(localStorage.getItem("location"));
    area_id = locationData.area;
    getCat();
  }

  return (
    <div className="main__home__categories">
      <div className="main__home__title__wrapper">
        <span className="main__home__title">Our Product Categories</span>
      </div>

      <div className="row g-3">
        {cat.map((val, key) => {
          return (
            <div key={key} className="col-6 col-md-4">
              <Link
                to={"/category-vendor/" + val.cat_slug+"/"+val.cat_title}
                className="main__home__category transition"
              >
                <span className="main__home__category__name">
                  {language ? val.cat_title : val.bn_cat_title}
                </span>
                <img
                  src={val.cat_image}
                  alt={val.alt}
                  className="main__home__category__img"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
