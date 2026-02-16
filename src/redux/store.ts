import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./slices/peopleSlice";
import formReducer from "./slices/formSlice";

export const store = configureStore({
    reducer: {
        people: peopleReducer,
        form: formReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
