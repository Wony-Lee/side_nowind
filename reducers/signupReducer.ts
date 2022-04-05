export const SET_ACCESS_ON = "SET_ACCESS_ON" as const;
export const SET_ACCESS_OFF = "SET_ACCESS_OFF" as const;

export const setAccessOn = () => ({
  type: SET_ACCESS_ON,
});
export const setAccessOff = () => ({
  type: SET_ACCESS_OFF,
});

export interface ISignupState {
  isAccessChecked: boolean;
}

const initialState: ISignupState = {
  isAccessChecked: false,
};

export type SignupAction =
  | ReturnType<typeof setAccessOn>
  | ReturnType<typeof setAccessOff>;

const reducer = (state = initialState, action: SignupAction) => {
  switch (action.type) {
    case SET_ACCESS_ON:
      return {
        ...state,
        isAccessChecked: true,
      };
    case SET_ACCESS_OFF:
      return {
        ...state,
        isAccessChecked: false,
      };
    default:
      return state;
  }
};

export default reducer;
