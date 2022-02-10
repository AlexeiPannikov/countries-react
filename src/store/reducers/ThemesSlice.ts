import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export enum ThemesEnum {
    Light = "light",
    Dark = "dark",
};

interface ITheme {
    theme: ThemesEnum
}

const initialState: ITheme = {
    theme: ThemesEnum.Light
};

const themesSlice = createSlice({
    name: "themes",
    initialState,
    reducers: {
        setTheme(state, action: PayloadAction<ThemesEnum>) {
            state.theme = action.payload
        }
    }
})

export default themesSlice.reducer;
export const {setTheme} = themesSlice.actions