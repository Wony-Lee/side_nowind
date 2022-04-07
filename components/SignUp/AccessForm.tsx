import React, { useCallback } from "react";
import styled from "@emotion/styled";
import TextForm from "./TextForm";
import CheckBox from "./CheckBox";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import Button from "./Button";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  & div {
    margin-bottom: 5px;
  }
`;

const AccessForm: React.FC = () => {
  const { isAccessChecked } = useSelector((state: RootState) => state.signup);
  const handleNext = useCallback(() => {
    console.log("Hello World");
  }, []);
  return (
    <Layout>
      <TextForm />
      <div>
        <CheckBox text={"이용약관에 동의합니다."} />
      </div>
      <Button
        disabled={!isAccessChecked}
        handler={handleNext}
        text={"다음으로"}
      ></Button>
    </Layout>
  );
};

export default React.memo(AccessForm);
