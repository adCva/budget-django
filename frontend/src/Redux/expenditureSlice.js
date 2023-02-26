import { createSlice } from '@reduxjs/toolkit';

export const expenditureSlice = createSlice({
    name: "Expenditure",
    initialState: {
        deleteConfirm: false,
        deleteId: null,
        expData: []
    },

    reducers: {
        loadData: (state, action) => {
            let newItems = action.payload.newElement;
            state.expData = newItems
        },

        createData: (state, action) => {
            let newItem = action.payload.newElement;
            let existingItems = [...state.expData]
            existingItems.unshift(newItem);
            
            return {
                expData: [...existingItems]
            }
        },

        updateData: (state, action) => {
            let originalElements = [...state.expData];
            let incomingFile = action.payload.updatedElelemnt;
            let indexUpdate = originalElements.indexOf(originalElements.filter(el => el.id === incomingFile.id)[0]);
            originalElements.splice(indexUpdate, 1, incomingFile);

            state.expData = originalElements;
            
        },

        deleteData: (state, action) => {
            let existingItems = state.expData
            let remaningItems = existingItems.filter((el) => el.id !== action.payload.deleteId);

            return {
                expData: remaningItems
            }
        }
    }
})

export const { loadData, createData, updateData, deleteData } = expenditureSlice.actions;

export default expenditureSlice.reducer;