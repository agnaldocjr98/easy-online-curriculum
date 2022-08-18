import { configureStore } from "@reduxjs/toolkit";
import curriculum from "./slices/curriculum";

export const store = configureStore({
  reducer: {
    curriculum,
  },
});
