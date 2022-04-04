import React from "react";
import styled from "@emotion/styled";
import NavBarItem from "./NavBarItem";

const List = styled.ul`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: midnightblue;
`;

interface Props {}

const NavBar: React.FC = () => {
  const category = [
    {
      id: 1,
      name: "홈",
    },
    {
      id: 2,
      name: "번호조회",
    },
    {
      id: 3,
      name: "애인등록",
    },
    {
      id: 4,
      name: "로그인",
    },
  ];
  return (
    <List>
      {category.map((item) => (
        <NavBarItem
          key={item.id}
          name={item.name}
          size={100 / category.length}
        />
      ))}
    </List>
  );
};

export default NavBar;
