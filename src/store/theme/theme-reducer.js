import { SET_WHEME } from "./theme-actions";

export const themeReducer = (state = "light", { type, payload }) => {
  switch (type) {
    case SET_WHEME:
      return payload;
    default:
      return state;
  }
};
