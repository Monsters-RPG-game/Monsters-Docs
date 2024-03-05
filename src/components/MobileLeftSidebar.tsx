import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import sidebarLinks from '../constants';
import type { INavLink } from '../types';

interface Props {
  isMobileHidden: boolean;
  handleMobileMenu: () => void;
}

const MobileLeftSidebar: React.FC = ({ isMobileMenuHidden, handleMobileMenu }: Props) => {
  const { pathname } = useLocation();
  return (
    <nav className={isMobileMenuHidden ? 'leftsidebar_mobile-hidden ' : 'leftsidebar_mobile'}>
      <ul className="flex flex-col  ">
        {sidebarLinks.map((link: INavLink) => {
          const isActive = pathname === link.route;
          return (
            <NavLink
              to={link.route}
              key={link.label}
              className={`leftsidebar-link  group ${isActive && 'text-rose-600'}`}
              onClick={handleMobileMenu}
            >
              <li className="">{link.label}</li>
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileLeftSidebar;
