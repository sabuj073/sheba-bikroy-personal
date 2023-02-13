import React from "react";

const HomeInfo = (props) => {
  const { language } = props;
  return (
    <div className="main__home__info">
      <h4>
        {language
          ? "Sheba Bikroy is Your Online Supershop & Service"
          : "শেবা বিক্রয় আপনার অনলাইন সুপারশপ এবং পরিষেবা"}
      </h4>
      {/* <p className="text-secondary mb-0">
        {language
          ? "Express delivery at your door step within 90 minutes"
          : "90 মিনিটের মধ্যে আপনার দরজার ধাপে এক্সপ্রেস ডেলিভারি"}
      </p> */}
    </div>
  );
};

export default HomeInfo;
