export interface ThemeState{
    theme: string
}

export interface ActionType{
    type: string,
    payload: any
}

export enum ThemeActionTypes{
    SET_THEME = "SET_THEME"
}

export enum Themes{
    Dark = "dark",
    Light = "light"
}

export const setTheme = (theme: Themes) : ActionType => {
    return{
        type: ThemeActionTypes.SET_THEME,
        payload: theme
    }
}