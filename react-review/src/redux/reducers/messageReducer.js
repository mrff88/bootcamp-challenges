import { SET_MESSAGE } from "../constants";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        message: "hola",
      };

    default:
      return state;
  }
}
