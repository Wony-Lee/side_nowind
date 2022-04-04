import React from "react";
import styled from "@emotion/styled";
import LoginForm from "../components/Login/LoginForm";
import AppLayout from "../components/AppLayout";

const Login: React.FC = () => {
  return (
    <AppLayout>
      <LoginForm />
    </AppLayout>
  );
};

export default Login;
