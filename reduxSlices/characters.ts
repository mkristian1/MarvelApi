import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../store";
import { ICategory } from "../types";

const charactersSlice = createSlice({
    name: 'charactersSlice',
    initialState: {
        characters: {
            count: 0,
            limit: 10,
            offset: 0,
            total: 0,
            results: []
        } as ICategory,
        loading: false as boolean,
    },
    reducers: {
        setCharacterData: (state, action: PayloadAction<ICategory>) => {
            state.characters = action.payload
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {

            return {
                ...state,
                ...action.payload.characters,
            };
        },
    },

})

export const { setCharacterData, setLoading } = charactersSlice.actions;

export const selectCharacters = (state: AppState) => state.characters;

export default charactersSlice.reducer;