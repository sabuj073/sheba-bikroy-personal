import React, { useState } from "react";
import Slider from "react-slick";
import { useCart } from "react-use-cart";
import instance from "../../../base_url";
import Product from "./Product";

const NewProduct = (props) => {
  const { vendor_id, cat_id,  } = props;
  const { updateItemQuantity } = useCart();
  const { getItem } = useCart();


  var area_id = "";

  if (localStorage.getItem("language") === "en") {
    var language = true;
  } else {
    language = false;
  }

  if (localStorage.getItem("location")) {
    var locationData = JSON.parse(localStorage.getItem("location"));
    area_id = locationData.area;
  }

  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    await instance
      .post("main_home/get_category_products", {
        key: "7fbaf493e3fe38a48934d93a3168926018adb657",
        area_id: area_id,
        cat_id: cat_id,
        vendor_id:vendor_id
      })
      .then((response) => {
        if (products.length === 0) {
          setProducts(response.data);
        }
      });
  };

  if (area_id !== null && cat_id !== null) {
    getProducts();
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="row">
        {products.map((product, key) => (
          <Product
            product={product}
            updateItemQuantity={updateItemQuantity}
            getItem={getItem}
            key={key}
            language={language}
          />
        ))}
    </div>
  );
};

export default NewProduct;
