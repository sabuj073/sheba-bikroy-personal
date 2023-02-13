import React from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { FaRegEnvelope, FaUser } from 'react-icons/fa';
import { GoThreeBars } from 'react-icons/go';
import { IoMdNotifications } from 'react-icons/io';
import { Link } from 'react-router-dom';
import avatar from '../../../assets/images/avatar.png';
import logo from '../../../assets/images/Sheba-Bikroy-Logo-2.png';
import '../../../assets/styles/cms/header.css';
import cmsSidebarToggle from '../../../utils/cmsSidebarToggle';
import { useHistory } from "react-router-dom";

const CMSHeader = () => {

	let history = useHistory();
	const logout = async () => {
        localStorage.removeItem("admin");
        history.push("/admin-login");
    }


	return (
		<div className="cms__header">
			<div className="cms__header__logo">
				<Link to="/cms">
					<img src={logo} alt="" className="img-fluid" />
				</Link>
			</div>
			<form className="cms__header__search__form">
				<GoThreeBars
					onClick={() => cmsSidebarToggle()}
					className="cms__header__bars"
				/>
				<input
					type="text"
					name="search"
					className="cms__header__search__input"
					placeholder="Search..."
				/>
			</form>
			<div className="cms__header__side__links">
				<div className="cms__header__link">
					<FaRegEnvelope className="cms__header__link__icon" />
				</div>
				<div className="cms__header__link">
					<IoMdNotifications className="cms__header__link__icon" />
				</div>
				<div className="cms__header__link">
					<img
						className="cms__header__link__img"
						src={avatar}
						alt=""
						data-bs-toggle="dropdown"
						aria-expanded="false"
					/>
					<ul className="dropdown-menu  dropdown-menu-dark">
						<li>
							<button className="dropdown-item" type="button">
								<FaUser
									style={{
										fontSize: '19px',
										marginRight: '10px',
									}}
								/>
								My Account
							</button>
						</li>
						<li>
							<button className="dropdown-item" type="button" onClick={logout}>
								<AiOutlineLogout
									style={{
										fontSize: '19px',
										marginRight: '10px',
									}}
								/>
								Logout
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CMSHeader;
