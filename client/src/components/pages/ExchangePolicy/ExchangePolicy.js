import PageLinks from "../PageLinks";
import "../style.css";

const ExchangePolicy = (props) => {
  const { info, language } = props;
  return (
    <div className="container pt-1">
      <div className="page__bg__img">
        <div className="page__img"></div>
        <div className="page__title">Exchange Policy</div>
        <PageLinks />
      </div>
      {info.map((val, key) => {
        return (
          <div key={key} className="page__content">
            {language ? val.exchange_policy : val.bn_exchange_policy}
          </div>
        );
      })}
    </div>
  );
};

export default ExchangePolicy;
