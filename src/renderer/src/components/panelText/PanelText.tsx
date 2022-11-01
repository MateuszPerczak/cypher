import type { FC } from "react";
import type PanelTextProps from "./PanelText.types";
import Text from "../text/Text";
import StyledPanelText from "./PanelText.style";

const PanelText: FC<PanelTextProps> = ({ header, children }): JSX.Element => {
  return (
    <StyledPanelText>
      <Text>{header}</Text>
      {children}
    </StyledPanelText>
  );
};

export default PanelText;
