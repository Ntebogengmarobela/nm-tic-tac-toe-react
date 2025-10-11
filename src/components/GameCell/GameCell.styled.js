import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
  border: none;
  /* height: 10rem;
  width: 10rem; */
  height: 5.5rem;
  width: 5.5rem;
  border-radius: 10px;
  box-shadow: 5px 10px ${(props) => props.theme.colors.tertiary};
  cursor: pointer;
`;