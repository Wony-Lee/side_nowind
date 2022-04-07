import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import LoginForm from "../components/Login/LoginForm";
import AppLayout from "../components/AppLayout";
import { RootState } from "../reducers";

const Login: React.FC = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.login);
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn) router.push("/");
  }, [isLoggedIn]);
  return (
    <AppLayout>
      <LoginForm />
    </AppLayout>
  );
};

export default Login;
