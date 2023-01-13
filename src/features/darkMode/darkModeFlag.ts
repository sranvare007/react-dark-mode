import { createSlice } from "@reduxjs/toolkit";

export const darkModeFlagSlice = createSlice({
  name: "darkModeFlag",
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleDarkMode } = darkModeFlagSlice.actions;

export default darkModeFlagSlice.reducer;
