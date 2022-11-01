import type { FC } from "react";
import Icon from "../icon/Icon";
import Text from "../text/Text";
import { StyledNavButton } from "./NavButton.style";
import type NavButtonProps from "./NavButton.types";

const NavButton: FC<NavButtonProps> = ({
  icon,
  header,
  isOpen,
  isSelected,
  ...rest
}: NavButtonProps): JSX.Element => {
  return (
    <StyledNavButton isSelected={isSelected} {...rest}>
      <Icon>{icon}</Icon>
      {isOpen && <Text>{header}</Text>}
    </StyledNavButton>
  );
};

export default NavButton;
