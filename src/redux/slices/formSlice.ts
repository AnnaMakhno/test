import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type Person from "../../types/persone";

interface FormState {
    draft: Person;
}

const initialState: FormState = {
    draft: {
        id: "",
        name: "",
        email: "",
        birthdate: "",
        meetingTime: "",
    },
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        updateField: (
            state,
            action: PayloadAction<{ field: keyof Person; value: string }>,
        ) => {
            state.draft[action.payload.field] = action.payload.value;
        },
        resetForm: (state) => {
            state.draft = initialState.draft;
        },
    },
});

export const { updateField, resetForm } = formSlice.actions;
export default formSlice.reducer;
