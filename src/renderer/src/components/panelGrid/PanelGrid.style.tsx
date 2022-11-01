import styled from "@emotion/styled";
import Text from "../text/Text";

const StyledPanelGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto;
  padding-left: 26px;
`;

export const StyledText = styled(Text)`
  color: ${({ theme: { info } }) => info};
`;

export default StyledPanelGrid;
