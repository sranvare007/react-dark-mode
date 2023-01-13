import { configureStore } from "@reduxjs/toolkit";
import darkModeFlagReducer from "../features/darkMode/darkModeFlag";

export default configureStore({
  reducer: {
    darkModeFlag: darkModeFlagReducer,
  },
});
