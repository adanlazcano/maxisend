import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import configReducer from "@/redux/reducers/config";
import entriesReducer from "@/redux/reducers/entries";

export const store = configureStore({
  reducer: {
    config: configReducer,
    entries: entriesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
