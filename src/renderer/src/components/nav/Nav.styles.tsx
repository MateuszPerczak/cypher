import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledNav = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding: 4px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${({ theme: { navigation } }) => navigation};
  border-right: 1px solid ${({ theme: { border } }) => border};
`;

export default StyledNav;
