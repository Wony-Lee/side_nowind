import { UserInfo, UserLogin } from "./interface/loginReducerInterface";

export const SET_USER_INFO = "SET_USER_INFO" as const;
export const SET_USER_LOGIN = "SET_USER_LOGIN" as const;
export const SET_USER_LOGOUT = "SET_USER_LOGOUT" as const;

export const setUserInfo = () => ({
  type: SET_USER_INFO,
});
type IsetUserLogin = {
  userId: string;
  password: string;
};
export const setUserLogin = ({ userId, password }: IsetUserLogin) => ({
  type: SET_USER_LOGIN,
  payload: {
    userid: userId,
    password: password,
  },
});
export const setUserLogout = () => ({
  type: SET_USER_LOGOUT,
});

export interface IUserState {
  user_info: UserInfo[];
  user_login: UserLogin;
  isLoggedIn: boolean;
}
export const initialState: IUserState = {
  user_login: {
    userId: "",
    password: "",
  },
  user_info: [
    {
      id: "",
      connect_id: "",
      connect_state: false,
      connect_date: "",
      tel: "",
    },
  ],
  isLoggedIn: false,
};

export type UserInfoAction =
  | ReturnType<typeof setUserInfo>
  | ReturnType<typeof setUserLogin>
  | ReturnType<typeof setUserLogout>;

const reducer = (state = initialState, action: UserInfoAction) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        // user_info: action.payload,
      };
    case SET_USER_LOGIN:
      console.log("payload =>", action.payload);
      return {
        ...state,
        user_login: action.payload,
        isLoggedIn: true,
      };
    case SET_USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default reducer;
