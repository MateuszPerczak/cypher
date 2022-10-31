import type { DetailedHTMLProps, HTMLAttributes } from "react";

type NavHamburgerProps = {
  isOpen: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default NavHamburgerProps;
