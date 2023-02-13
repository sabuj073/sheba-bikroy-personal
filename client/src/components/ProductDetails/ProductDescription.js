import React from "react";
import { useCart } from "react-use-cart";

const ProductDescription = (props) => {
  const { description } = props;
  const { return_policy } = props;
  const navigate = (type) => (e) => {
    e.preventDefault();
    var x = document.getElementsByClassName("navClass");
    var y = document.getElementsByClassName("nav__btn");
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      y[i].style.backgroundColor = "#D6D6D6";
      // y[i].style.color = '#fff';
    }
    e.target.style.backgroundColor = "#49b54a";
    document.getElementById(type).style.display = "block";
  };

  return (
    <div className="details__bottomLeft ">
      <div className="details__bottomLeftHeader">
        <div className="nav__btn" onClick={navigate("description")}>
          Description
        </div>
        <div className="nav__btn" onClick={navigate("reviews")}>
          Return Policy
        </div>
      </div>
      <div id="description" className="navClass details__bottomLeftContent">
        <h3>Description :</h3>
        <div className="">
          {description ? (
            <div
              className="text-justify"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>

      <div
        id="reviews"
        className="navClass details__bottomLeftContentRivews p-4"
        style={{ display: "none" }}
      >
        {return_policy ? (
          <div
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: return_policy }}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
