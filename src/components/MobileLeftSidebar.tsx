import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import sidebarLinks from '../constants';
import type { IMobileSidebar, INavLink } from '../types';

const MobileLeftSidebar: React.FC<IMobileSidebar> = ({ isHidden, toggleMenu }) => {
  const { pathname } = useLocation();
  return (
    <nav className={`${isHidden ? 'leftsidebar_mobile-hidden ' : 'leftsidebar_mobile'} flex flex-col justify-between`}>
      <ul className="flex flex-col  ">
        {sidebarLinks.map((link: INavLink) => {
          const isActive = pathname === link.route;
          return (
            <NavLink
              to={link.route}
              key={link.label}
              className={`leftsidebar-link  group ${isActive && 'text-rose-600'}`}
              onClick={toggleMenu}
            >
              <li className="">{link.label}</li>
            </NavLink>
          );
        })}
      </ul>
      <div>
        Designed with love
        <NavLink className="block leftsidebar-link group" to="https://github.com/HurasAdam">
          HurasAdam
        </NavLink>
      </div>
    </nav>
  );
};

export default MobileLeftSidebar;
