import { types } from "../types/types";

const initialState = {
    theme: false,
}

export const themeReducer = ( state = initialState, action:any ) => {
    switch (action.type) {
        case types.themeLight:
            return {
                ...state,
                theme: true
            }
        case types.themeDark:
            return {
                ...state,
                theme: false
            }
        default:
            return state;
    }
}