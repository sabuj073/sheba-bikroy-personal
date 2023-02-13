import React from "react";
import { useState } from "react";
import instance from "../../base_url.js";

const Notice = (props) => {
  const { info, language } = props;
  return (
    <div className="main__home__notice">
      <span className="main__home__notice__title">Notice</span>
      <span className="main__home__notice__content">
        <marquee width="100%">
          {info.map((val, key) => {
            return language ? val.notice : val.bn_notice;
          })}
        </marquee>
      </span>
    </div>
  );
};

export default Notice;
