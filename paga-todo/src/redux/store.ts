import { Banks } from "@/models/banks";
import { configureStore } from "@reduxjs/toolkit";
import { bankSlice } from "./states/bank";

export interface AppStore {
    bank: Banks[]
}

export default configureStore<AppStore>({
    reducer: {
        bank: bankSlice.reducer
    }
})