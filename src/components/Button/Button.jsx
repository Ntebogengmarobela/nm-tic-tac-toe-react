import React from "react";
import { ButtonWrapper } from "./Button.styled";

const Button = ({ onClick, children, ...rest }) => {
  return (
    <ButtonWrapper onClick={onClick} {...rest}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
