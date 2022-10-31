import styled from "@emotion/styled";

const StyledNavHamburger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  min-height: 36px;
  border-radius: 8px;
  transition: background-color 200ms;
  &:hover {
    background-color: ${({ theme: { hamburger } }) => hamburger};
  }
  &:active {
    background-color: ${({ theme: { navigation } }) => navigation};
  }
`;

export default StyledNavHamburger;
