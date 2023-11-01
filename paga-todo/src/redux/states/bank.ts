import { LocalStorageTypes, Banks } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Banks[] = []



export const bankSlice = createSlice({
    name: 'bank',
    initialState: getLocalStorage(LocalStorageTypes.BANK) ? JSON.parse(getLocalStorage(LocalStorageTypes.BANK) as string) : initialState,
    reducers: {
        addBank: (state, action ) =>{
            setLocalStorage(LocalStorageTypes.BANK, state)
            return action.payload
        }
    }
})

export const { addBank } = bankSlice.actions