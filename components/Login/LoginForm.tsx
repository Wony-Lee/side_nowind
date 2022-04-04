import React from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  border: 1px solid gold;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
  & label {
    border: 1px solid red;
    margin: 10px;
  }
`;

const Input = styled.input`
  //border: 0;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button<{ isConfirm: boolean }>`
  width: 120px;
  height: 35px;
  border-radius: 8px;
  margin: 5px;
  border: 0px;
  background-color: ${({ isConfirm }) => (isConfirm ? "midnightblue" : "red")};
  color: white;
`;

const LoginForm: React.FC = () => {
  return (
    <div>
      로그인
      <Form>
        <InputBox>
          <label>ID</label>
          <Input type={"text"} placeholder={"ID"} />
          <label>PASSWORD</label>
          <Input type={"password"} placeholder={"PASSWORD"} />
        </InputBox>
        <ButtonBox>
          <Button isConfirm={true}>로그인</Button>
          <Button isConfirm={false}>뒤로가기</Button>
        </ButtonBox>
      </Form>
    </div>
  );
};

export default LoginForm;
