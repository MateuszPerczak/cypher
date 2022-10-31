import type { FC } from "react";
import Icon from "../icon/Icon";
import StyledNavHamburger from "./NavHamburger.styles";
import type NavHamburgerProps from "./NavHamburger.types";

const NavHamburger: FC<NavHamburgerProps> = ({ isOpen, ...rest }): JSX.Element => {
  return (
    <StyledNavHamburger {...rest}>
      <Icon>{isOpen ? "\uE76B" : "\uE76C"}</Icon>
    </StyledNavHamburger>
  );
};

export default NavHamburger;
