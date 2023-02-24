import { createSlice } from '@reduxjs/toolkit';

export const limitSlice = createSlice({
    name: "Limit",
    initialState: {
        limitForm: false,
        totalLimit: 780,
        remainingDays: 12
    },

    reducers: {
        openLimitForm: (state) => {
            state.limitForm = true;
        },
        changeLimit: (state, action) => {
            state.totalLimit = action.payload.newLimit;
            state.remainingDays = action.payload.newDate;
            state.limitForm = false;
        },
        closeForm: (state) => {
            state.limitForm = false;
        }
    }
})

export const { openLimitForm, changeLimit, closeForm } = limitSlice.actions;

export default limitSlice.reducer;