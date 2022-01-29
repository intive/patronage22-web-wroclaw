import styled from "styled-components";

export const StyledNavHeader = styled.header`
  position: fixed;
  border-bottom: 1px solid lightgrey;
  width: 100vw;
`;

export const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1536px;
  padding: 10px 15px;

  @media (min-width: 900px) {
    padding: 15px 30px;
  }
`;

export const SearchBarPlaceholder = styled.div`
  order: 1;
  margin-top: 5px;
  width: 100%;

  @media (min-width: 900px) {
    order: unset;
    margin-left: auto;
    margin-right: 20px;
    margin-top: unset;
    width: auto;
  }
`;

export const MenuPlaceholder = styled.div`
  margin-left: auto;

  @media (min-width: 900px) {
    margin-left: unset;
  }
`;
