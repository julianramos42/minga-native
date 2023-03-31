import { createReducer } from "@reduxjs/toolkit";
import alertActions from "./actions";

const { open, close } = alertActions

const initialState = {
    icon: "success",
    text: "",
    visible: false
}

const alertReducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            open,
            (state, action) => {
                let newState = { 
                    ...state,
                    icon: action.payload.icon,
                    text: action.payload.text,
                    visible: action.payload.visible
                }
                return newState
            }
        )
        .addCase(
            close,
            (state, action) => {
                const newState = { 
                    ...state,
                    icon: action.payload.icon,
                    text: action.payload.text,
                    visible: action.payload.visible
                }
                return newState
            }
        )
)

export default alertReducer