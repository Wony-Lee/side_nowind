import React from "react";
import styled from "@emotion/styled";
import NavBar from "./Nav/NavBar";

const BaseLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyLayout = styled.div`
  max-width: 1024px;
  width: 100%;
`;

interface Props {}

const AppLayout: React.FC = ({ children }) => {
  return (
    <BaseLayout>
      <BodyLayout>
        <NavBar />
        {children}
        <div>footer</div>
      </BodyLayout>
    </BaseLayout>
  );
};

export default AppLayout;
