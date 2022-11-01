import type { DetailedHTMLProps, HTMLAttributes } from "react";

type NavButtonProps = {
  icon: string;
  header: string;
  isOpen: boolean;
  isSelected: boolean;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export default NavButtonProps;
