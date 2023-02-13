import PageLinks from "../PageLinks";
import "../style.css";

const ReturnPolicy = (props) => {
  const { info, language } = props;
  return (
    <div className="container">
      <div className="page__bg__img">
        <div className="page__img"></div>
        <div className="page__title">Return Policy</div>
        <PageLinks />
      </div>
      {info.map((val, key) => {
        return (
          <div key={key} className="page__content">
            {language ? val.return_policy : val.bn_return_policy}
          </div>
        );
      })}
    </div>
  );
};

export default ReturnPolicy;
