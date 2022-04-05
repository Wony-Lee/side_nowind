import { AnyAction, CombinedState, combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import login, { IUserState } from "./loginReducer";
import signup, { ISignupState } from "./signupReducer";

const rootReducer = (
  state: IState | undefined,
  action: AnyAction
): CombinedState<IState> => {
  switch (action.type) {
    case HYDRATE:
      return { ...action.payload };
    default: {
      const combineReducer = combineReducers({
        login,
        signup,
      });
      return combineReducer(state, action);
    }
  }
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

interface IState {
  login: IUserState;
  signup: ISignupState;
}
