import PageLinks from "../PageLinks";
import "../style.css";

const TermsOfUse = (props) => {
  const { info, language } = props;
  return (
    <div className="container">
      <div className="page__bg__img">
        <div className="page__img"></div>
        <div className="page__title">Terms of Use</div>
        <PageLinks />
      </div>
      {info.map((val, key) => {
        return (
          <div key={key} className="page__content">
            {language ? val.terms : val.bn_terms}
          </div>
        );
      })}
    </div>
  );
};

export default TermsOfUse;
