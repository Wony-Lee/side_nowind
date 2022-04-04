import React, { useCallback } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  name: string;
  size: number;
  // userInfo: [UserInfo];
}

// interface UserInfo {
//   userId: string;
//   userName: string;
//   userPassword: string;
//   userTel: string;
//   userAddress: string;
//   isLoggedIn: boolean;
// }

const Item = styled.li<{ size: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size}%;
  color: white;
  height: 100%;

  cursor: pointer;
  &:hover {
    color: gray;
  }
`;

const NavBarItem: React.FC<Props> = ({ name, size }) => {
  const router = useRouter();
  const handleLocation = useCallback(() => {
    if (name === "홈") router.push("/");
    if (name === "번호조회") router.push("/search");
    if (name === "애인등록") router.push("/insert");
    if (name === "로그인") router.push("login");
  }, []);
  return (
    <Item size={size} onClick={handleLocation}>
      {name}
    </Item>
  );
};

export default NavBarItem;
