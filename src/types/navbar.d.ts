export interface ITopNavbarProps {
  handleMenuHide: () => void;
  handleMobileMenu: () => void;
}

export interface INavLink {
  route: string;
  label: string;
}

export interface ISidebar {
  isHidden: boolean;
}

export interface IMobileSidebar extends ISidebar {
  isHidden: boolean;
  toggleMenu: () => void;
}
