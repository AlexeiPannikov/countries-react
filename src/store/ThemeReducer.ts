interface IAction {
    type: string;
    payload: string;
}

export enum ThemesEnum  {
    Light = "light",
    Dark = "dark",
};

const defaultState: ThemesEnum = ThemesEnum.Light;

const SET_THEME = "SET_THEME";

export const themeReducer = (state = defaultState, action: IAction) => {
    switch (action.type) {
        case SET_THEME:
            return action.payload;
        default:
            return state
    }
}

export const setThemeAction = (payload: ThemesEnum) => ({type: SET_THEME, payload} as IAction);