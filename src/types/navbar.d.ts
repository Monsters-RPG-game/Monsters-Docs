export interface ITopNavbarProps {
  handleMenuHide: () => void;
  handleMobileMenu: () => void;
}


export interface IIconProps {
  icon: string;
  link: string;
  color: string;

}

export interface INavLink {
  route: string;
  label: string;
}

export interface IIconLink {
  link: string;
  icon: string;
  color: string;
  hover: string;
}

export interface ISidebar {
  isHidden: boolean;
}

export interface IMobileSidebar extends ISidebar {
  isHidden: boolean;
  toggleMenu: () => void;
}
