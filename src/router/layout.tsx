import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LeftSidebar from '../components/LeftSidebar';
import TopNavbar from '../components/TopNavbar';
import MobileLeftSidebar from '../components/MobileLeftSidebar';

const RootLayout: React.FC = () => {
  const [isMenuHidden, setIsMenuHidden] = useState<boolean>(false);
  const [isMobileMenuHidden, setIsMobileMenuHidden] = useState<boolean>(false);

  const handleMenuHide = (): void => {
    setIsMenuHidden(!isMenuHidden);
  };

  const handleMobileMenu = (): void => {
    setIsMobileMenuHidden(!isMobileMenuHidden);
  };

  return (
    <div className="w-full flex flex-col  ">
      <TopNavbar handleMenuHide={handleMenuHide} handleMobileMenu={handleMobileMenu} />
      <main className=" flex">
        <LeftSidebar isMenuHidden={isMenuHidden} />
        <MobileLeftSidebar isMobileMenuHidden={isMobileMenuHidden} handleMobileMenu={handleMobileMenu} />
        <section className="flex flex-1 h-full overflow-scroll custom-scrollbar  ">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default RootLayout;
