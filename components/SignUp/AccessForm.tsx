import React from "react";
import styled from "@emotion/styled";
import TextForm from "./TextForm";
import CheckBox from "./CheckBox";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 0 auto;
`;

const AccessForm: React.FC = () => {
  const { isAccessChecked } = useSelector((state: RootState) => state.signup);
  return (
    <Layout>
      <TextForm />
      <CheckBox text={"이용약관에 동의합니다."} />
      <button disabled={!isAccessChecked}>다음으로</button>
    </Layout>
  );
};

export default AccessForm;
