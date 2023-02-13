import React, { useState } from "react";
import instance from "../../base_url";
import NewProduct from "../Shared/Product/NewProduct";
import Title from "../Shared/Title/Title";
import Banner from "./CatBanner";

const Products = (props) => {
  const { language } = props;
  var area_id = "";

  const [product_cat, setCat] = useState([]);
  const getCat = async () => {
    await instance
      .post("main_home/get_cat_with_products", {
        key: "7fbaf493e3fe38a48934d93a3168926018adb657",
        area_id: area_id,
      })
      .then((response) => {
        if (product_cat.length === 0) {
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
    <section className="product__slider__section">
      {product_cat.map((val, key) => {
        return (
          <div key={key} className="container-fluid">
            <div className="row">
              <Title title={language ? val.cat_title : val.bn_cat_title} />

              <NewProduct cat_id={val.cat_id} area_id={area_id} />
            </div>
            <div className="pt-4">
              <Banner product={val} />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Products;
