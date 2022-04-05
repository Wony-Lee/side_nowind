import React, { useCallback, useEffect } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { SET_USER_LOGOUT } from "../../reducers/loginReducer";

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
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: RootState) => state.login);
  const handleLocation = useCallback(() => {
    if (name === "홈") router.push("/");
    if (name === "번호조회") router.push("/search");
    if (name === "애인등록") router.push("/insert");
    if (name === "로그인") router.push("login");
  }, []);
  const handleLogout = useCallback(() => {
    dispatch({
      type: SET_USER_LOGOUT,
    });
  }, [isLoggedIn, name]);
  return (
    <Item size={size} onClick={handleLocation}>
      {isLoggedIn && name === "로그인" ? (
        <p onClick={handleLogout}>로그아웃</p>
      ) : (
        name
      )}
    </Item>
  );
};

export default NavBarItem;
