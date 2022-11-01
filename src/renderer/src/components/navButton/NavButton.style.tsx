import styled from "@emotion/styled";

export const StyledNavButton = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  width: 100%;
  min-height: 36px;
  padding-left: 12px;
  border-radius: 8px;
  transition: background-color 200ms;
  background-color: ${({ theme: { hamburger }, isSelected }) =>
    isSelected ? hamburger : "transparent"};
  &:hover {
    background-color: ${({ theme: { hamburger } }) => hamburger};
  }
  &:active {
    background-color: ${({ theme: { navigation } }) => navigation};
  }
`;
