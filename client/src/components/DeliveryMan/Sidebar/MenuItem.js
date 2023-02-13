import { useState } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const MenuItem = ({ Route }) => {
    const [show, setShow] = useState(false);
    const showHandler = () => {
        setShow(!show);
    }
    return (
        <li key={Route.id} className="cms__sidebar__menu dropdown">
            <NavLink onClick={showHandler} exact to={`${Route.link}`} className="cms__sidebar__menu__link">
                <Route.Icon className="cms__sidebar__menu__link__icon" />
                <span className="cms__sidebar__menu__link__name">
                    {Route.title}
                </span>
                {Route.subRoutes.length !== 0 && <FiChevronRight className="cms__sidebar__menu__link__right" style={{ transform: `${show ? 'rotate(90deg)' : 'rotate(0deg)'}` }} />}
            </NavLink>
            <ul className="cms__sidebar__menu__dropdown" style={{ display: `${show ? 'block' : 'none'}` }}>
                {Route.subRoutes.map((subRoute) => (
                    <li key={subRoute.id} className="cms__sidebar__menu__dropdown__item">
                        <NavLink
                            to={`/delivery-man/${subRoute.link}`}
                            className="cms__sidebar__menu__dropdown__link"
                        >
                            <AiOutlineCaretRight className="cms__sidebar__menu__dropdown__link__icon" />
                            <span className="cms__sidebar__menu__dropdown__link__name">
                                {subRoute.title}
                            </span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </li>
    )
}

export default MenuItem