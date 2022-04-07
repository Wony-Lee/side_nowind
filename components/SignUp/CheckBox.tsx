import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { SET_ACCESS_OFF, SET_ACCESS_ON } from "../../reducers/signupReducer";
import { RootState } from "../../reducers";

const Layout = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  p {
    margin-left: 10px;
  }
  & input {
    display: none;
  }
  & input:checked + label {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 15px;
    background: #0067a5;
    color: white;
  }
`;
const Label = styled.label`
  border: 1px solid #0067a5;
  width: 25px;
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
`;

interface Props {
  text: string;
}

const CheckBox: React.FC<Props> = ({ text }) => {
  const { isAccessChecked } = useSelector((state: RootState) => state.signup);
  const dispatch = useDispatch();
  const handleValueChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        dispatch({
          type: SET_ACCESS_ON,
        });
      }
      if (!e.target.checked) {
        dispatch({
          type: SET_ACCESS_OFF,
        });
      }
    },
    [isAccessChecked]
  );
  console.log("redux", isAccessChecked);
  return (
    <Layout>
      <input
        type={"checkbox"}
        id={"checkbox_id"}
        onChange={handleValueChange}
      />
      <Label htmlFor={"checkbox_id"}>{isAccessChecked && "O"}</Label>
      <p>{text}</p>
    </Layout>
  );
};

export default React.memo(CheckBox);
