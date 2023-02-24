import { createSlice } from '@reduxjs/toolkit';

export const globalVarSlice = createSlice({
    name: "Global",
    initialState: {
        addFormOpened: false,
        editFormOpened: false,
        accordionOpened: false,
        filterBy: "All"
    },

    reducers: {
        changeFilter: (state, action) => {
            state.filterBy = action.payload.newFilter;
            state.accordionOpened = state.filterBy === "All" ? false : true;
        },
        openAccordion: (state, action) => {
            state.accordionOpened = action.payload.accordion;
        },
        openAddItemForm: (state) => {
            state.addFormOpened = true;
        },
        closeAddItemForm: (state) => {
            state.addFormOpened = false;
        }
    }
})

export const { changeFilter, openAccordion, openAddItemForm, closeAddItemForm } = globalVarSlice.actions;

export default globalVarSlice.reducer;