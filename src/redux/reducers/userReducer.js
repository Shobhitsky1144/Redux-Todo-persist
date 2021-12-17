import { AirTwoTone } from "@mui/icons-material";

const initialState = {
  data: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        data: [...state.data, action.message],
      };

    case "DELETE_TODO":
      return {
        ...state,
        data: [...state.data.filter((elem) => elem.id !== action.id)],
      };
    case "UPDATE_TODO":
      return {
        ...state,
        data: [
          ...state.data.filter((elem) => elem.id !== action.id),
          { task: action.message, id: action.id },
        ],
      };
    case "CLEAR":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};
export default userReducer;
