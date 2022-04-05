import React, { FormEvent, useCallback, useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../../reducers";
import useInputs from "../../hooks/useInputs";
import { SET_USER_LOGIN } from "../../reducers/loginReducer";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 10%;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin-bottom: 20px;
  & label {
    //margin: 10px;
    margin-bottom: 10px;
    font-weight: bold;
  }
`;

const Input = styled.input`
  width: 200px;
  height: 40px;
  padding: 15px;
  margin-bottom: 20px;
  border: 0;
  border-bottom: 1px solid #ddd;
  //outline: none;
  box-sizing: border-box;
  //border-radius: 8px;
  box-shadow: 0px 0px 20px 2px rgba(155, 155, 155, 0.5);
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button<{ isConfirm: boolean }>`
  width: 120px;
  height: 35px;
  border-radius: 8px;
  margin: 15px;
  border: 0px;
  background-color: #0067a5;

  color: white;
  &:hover {
    background-color: ${({ isConfirm }) => (isConfirm ? "#ffb2ff" : "#66bb6a")};
  }
`;

interface IuseInputs {
  id: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { user_info } = useSelector((state: RootState) => state.login);
  const router = useRouter();
  const dispatch = useDispatch();
  const [loginInput, handleChangeInput, setLoginInput] = useInputs({
    userId: "",
    password: "",
  });
  const { userId, password } = loginInput;

  const handleOnSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (userId === "test" && password === "test123") {
        dispatch({
          type: SET_USER_LOGIN,
          payload: loginInput,
        });
        router.push("/");
      } else {
        setLoginInput({
          userId: "",
          password: "",
        });
      }
    },
    [userId, password]
  );

  const handleSignUpLocation = useCallback(() => {
    router.push("/signup");
  }, []);

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <InputBox>
          <label htmlFor={"userId"}>ID</label>
          <Input
            type={"text"}
            placeholder={"ID"}
            name={"userId"}
            value={userId}
            onChange={handleChangeInput}
          />
          <label htmlFor={"password"}>PASSWORD</label>
          <Input
            type={"password"}
            placeholder={"PASSWORD"}
            name={"password"}
            value={password}
            onChange={handleChangeInput}
          />
        </InputBox>
        <ButtonBox>
          <Button isConfirm={true}>로그인</Button>
          <Button isConfirm={false} onClick={handleSignUpLocation}>
            회원가입
          </Button>
        </ButtonBox>
      </Form>
    </div>
  );
};

export default LoginForm;
