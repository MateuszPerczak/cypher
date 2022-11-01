import type { FC } from "react";
import type { NavProps } from "./Nav.types";
import { useState, useMemo } from "react";
import StyledNav from "./Nav.styles";
import NavHamburger from "../navHamburger/NavHamburger";
import { Position, Route, routes } from "@renderer/routes/routes";
import NavSpacer from "../navSpacer/NavSpacer";
import NavButton from "../navButton/NavButton";

const Nav: FC<NavProps> = ({ page, setPage }): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const items = useMemo(
    () =>
      routes.reduce(
        (accumulator, route) => {
          accumulator[route.position].push(route);
          return accumulator;
        },
        {
          top: [],
          bottom: [],
        } as { [key in Position]: Route[] },
      ),
    [routes],
  );

  return (
    <StyledNav
      initial={false}
      animate={{ width: isOpen ? "200px" : "49px" }}
      transition={{ type: "spring", mass: 0.2, stiffness: 300, damping: 20 }}
    >
      <NavHamburger isOpen={isOpen} onClick={toggleIsOpen} />
      {items.top.map(({ header, ...rest }, index) => (
        <NavButton
          header={header}
          key={`nav-button-top-${index}`}
          onClick={() => setPage(header)}
          isOpen={isOpen}
          isSelected={page === header}
          {...rest}
        />
      ))}
      <NavSpacer />
      {items.bottom.map(({ header, ...rest }, index) => (
        <NavButton
          header={header}
          key={`nav-button-bottom-${index}`}
          onClick={() => setPage(header)}
          isOpen={isOpen}
          isSelected={page === header}
          {...rest}
        />
      ))}
    </StyledNav>
  );
};

export default Nav;
