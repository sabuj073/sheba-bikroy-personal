import { NavLink } from 'react-router-dom';

const PageLinks = () => {
    return (
        <div>
            <div className="page__links">
                <ul className="page__links__wrapper">
                    <li className="page__link">
                        <NavLink
                            to="/t/privacy-policy"
                            activeClassName="page__active"
                        >
                            Privacy Policy
                        </NavLink>
                    </li>
                    <li className="page__link">
                        <NavLink
                            to="/t/return-policy"
                            activeClassName="page__active"
                        >
                            Returns Policy
                        </NavLink>
                    </li>
                    <li className="page__link">
                        <NavLink
                            to="/t/exchange-policy"
                            activeClassName="page__active"
                        >
                            Exchange Policy
                        </NavLink>
                    </li>
                    <li className="page__link">
                        <NavLink
                            to="/t/terms-of-use"
                            activeClassName="page__active"
                        >
                            Terms of Use
                        </NavLink>
                    </li>
                    <li className="page__link">
                        <NavLink
                            to="/t/contact-us"
                            activeClassName="page__active"
                        >
                            Contact us
                        </NavLink>
                    </li>
                    <li className="page__link">
                        <NavLink to="/t/faq" activeClassName="page__active">
                            FAQ
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default PageLinks;
