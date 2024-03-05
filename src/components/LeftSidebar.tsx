import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import sidebarLinks from '../constants';
import type { INavLink } from '../types';

interface Props {
  isMenuHidden: boolean;
}

const LeftSidebar: React.FC = ({ isMenuHidden }: Props) => {
  const { pathname } = useLocation();
  return (
    <nav className={isMenuHidden ? 'leftsidebar-hidden ' : 'leftsidebar'}>
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
