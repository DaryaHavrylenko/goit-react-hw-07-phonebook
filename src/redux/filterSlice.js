import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = '';

const filterSlice = createSlice({
    name: "filter",
    initialState: initialFilterState,
    reducers:{
        filterContact(state, action) {
            return (state = action.payload.toLowerCase());
        }
    }
})

export const {filterContact} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;