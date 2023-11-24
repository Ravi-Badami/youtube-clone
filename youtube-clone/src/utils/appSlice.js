import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleOpen: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleOpen } = appSlice.actions;
export default appSlice.reducer;
