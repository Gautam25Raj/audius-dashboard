"use client";

import { configureStore } from "@reduxjs/toolkit";

import songReducer from "./slice/songSlice";

export const store = configureStore({
  reducer: {
    song: songReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
