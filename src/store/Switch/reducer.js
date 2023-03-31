import { createReducer } from "@reduxjs/toolkit";
import checkActions from './actions'

const { switchActions } = checkActions

const initialState = {
    checked: true
}

const checkReducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            switchActions,
            (state, action) => {
                let newState = {
                    ...state,
                    checked: action.payload.checked
                }
                return newState
            }
        )
)

export default checkReducer