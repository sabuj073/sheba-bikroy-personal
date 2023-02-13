import $ from 'jquery';
import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import '../../../assets/styles/cms/sidebar.css';
import cmsSidebarToggle from '../../../utils/cmsSidebarToggle';
import MenuItem from './MenuItem';
import allRoutes from './routes';

const Sidebar = () => {
    useEffect(() => {
        const width = $(window).width();
        const body = document.querySelector('body');

        if (width < 768) {
            body.classList.add('cms-enlarged');
        }

        $(window).on('resize', function () {
            if (width < 768) body.classList.add('cms-enlarged');
        });
    }, []);



    return (
        <div className="cms__sidebar">
            <div className="cms__sidebar__wrapper">
                <FaTimes
                    onClick={() => cmsSidebarToggle()}
                    className="cms__sidebar__times"
                />
                <ul className="cms__sidebar__menu__nav">
                    <li className="cms__sidebar__menu__title"> NAVIGATION </li>
                    {allRoutes.map((Route) => (
                        <MenuItem Route={Route} key={Route.title} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
