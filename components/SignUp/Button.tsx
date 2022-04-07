import React, { ReactChild } from "react";
import styled from "@emotion/styled";

const Layout = styled.button`
  width: 120px;
  padding: 10px;
  box-sizing: border-box;
  background-color: ${(props) => (props.disabled ? "#ddd" : "#0067a5")};
  color: white;
  //color: ${(props) => (props.disabled ? "white" : "white")};
  border: 0;
  border-radius: 12px;
  outline: none;
  &:active {
    background-color: ${(props) => !props.disabled && "#f48fb1"};
  }
`;

interface Props {
  disabled: boolean;
  handler: () => void; // e: React.MouseEvent<HTMLElement>
  text: string;
}

const Button: React.FC<Props> = ({ disabled, handler, text }) => {
  return (
    <Layout disabled={disabled} onClick={handler}>
      {text}
    </Layout>
  );
};

export default React.memo(Button);
