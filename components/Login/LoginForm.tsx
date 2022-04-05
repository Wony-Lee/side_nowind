import React, { FormEvent, useCallback, useState } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../../reducers";
import useInputs from "../../hooks/useInputs";
import { SET_USER_LOGIN } from "../../reducers/loginReducer";

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
          <Button isConfirm={false}>뒤로가기</Button>
        </ButtonBox>
      </Form>
    </div>
  );
};

export default LoginForm;
