import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isOpen: false,
    header: '',
    description: '',
    onYes: () => {
        alert('haha');
    }
}

const alertDialogSlice = createSlice({  
    name: 'alertDialog',
    initialState,
    reducers: {
        showDialog: (state, {payload}) => {
            state.isOpen = true
            state.header = payload.header
        },
        hideDialog: (state) => {
            state.isOpen = false
            state.header = ''
            state.description = ''
            state.onYes = () => {

            }
        }
    }, 
});

export default alertDialogSlice.reducer

export const { showDialog, hideDialog } = alertDialogSlice.actions