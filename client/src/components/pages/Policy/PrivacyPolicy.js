import PageLinks from "../PageLinks";
import "../style.css";

const PrivacyPolicy = (props) => {
  const { info, language } = props;
  return (
    <div className="container">
      <div className="page__bg__img">
        <div className="page__img"></div>
        <div className="page__title">Privacy Policy</div>
        <PageLinks />
      </div>
      {info.map((val, key) => {
        return (
          <div key={key} className="page__content">
            {language ? val.privacy_policy : val.bn_privacy_policy}
          </div>
        );
      })}
    </div>
  );
};

export default PrivacyPolicy;
