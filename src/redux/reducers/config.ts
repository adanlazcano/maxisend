import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IConfig } from "@/types";
import { INIT_VALUE_TITLE } from "@/constants";

const initialState: IConfig = {
  title: INIT_VALUE_TITLE,
  error : ""
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      return {
        ...state,
        title: action.payload,
      };
    },
    setError: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
  },
});

export const configSelector = (state: RootState) => state.config;
export const { setTitle,setError } = configSlice.actions;

export default configSlice.reducer;
