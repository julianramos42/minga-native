import { createReducer } from "@reduxjs/toolkit";
import actions from './actions'

const { logoutReload } = actions

const initialState = {
    state: false
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            logoutReload,
            (state, action) => {
                let newState = {
                    ...state,
                    state: action.payload.state
                }
                return newState
            }
        )
)

export default reducer