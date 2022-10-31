import type { FC } from "react";
import type { NavProps } from "./Nav.types";
import { useState, useMemo } from "react";
import StyledNav from "./Nav.styles";
import NavHamburger from "../navHamburger/NavHamburger";

const Nav: FC<NavProps> = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledNav
      initial={{ width: "0px" }}
      animate={{ width: isOpen ? "200px" : "49px" }}
      transition={{ type: "spring", mass: 0.5, stiffness: 300, damping: 30 }}
    >
      <NavHamburger isOpen={isOpen} onClick={toggleIsOpen} />
    </StyledNav>
  );
};

export default Nav;
