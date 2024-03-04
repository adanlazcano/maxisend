import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Entries } from "@/types";

const initialState: Entries = {
  data: {
    total: 0,
    entries: [],
  },
};

export const entriesSlice = createSlice({
  name: "entries",
  initialState,
  reducers: {
    setEntries: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export const entriesSelector = (state: RootState) => state.entries;
export const { setEntries } = entriesSlice.actions;

export default entriesSlice.reducer;
