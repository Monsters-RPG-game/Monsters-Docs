import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import sidebarLinks from '../constants';
import type { INavLink, ISidebar } from '../types';

const LeftSidebar: React.FC<ISidebar> = ({ isHidden }) => {
  const { pathname } = useLocation();
  return (
    <nav className={isHidden ? 'leftsidebar-hidden ' : 'leftsidebar'}>
      <ul className="flex flex-col  ">
        {sidebarLinks.map((link: INavLink) => {
          const isActive = pathname === link.route;
          return (
            <NavLink
              to={link.route}
              key={link.label}
              className={`leftsidebar-link group ${isActive && 'text-rose-600'}`}
            >
              <li>{link.label}</li>
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default LeftSidebar;
