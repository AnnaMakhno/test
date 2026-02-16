import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type Person from "../../types/persone";

type PeopleState = Person[];

const initialState: PeopleState = [];

const peopleSlice = createSlice({
    name: "people",
    initialState,
    reducers: {
        addPerson: (state, action: PayloadAction<Person>) => {
            state.push(action.payload);
        },
        deletePerson: (state, action: PayloadAction<string>) => {
            return state.filter((person) => person.id !== action.payload);
        },
    },
});

export const { addPerson, deletePerson } = peopleSlice.actions;
export const selectPeople = (state: { people: PeopleState }) => state.people;

export default peopleSlice.reducer;
