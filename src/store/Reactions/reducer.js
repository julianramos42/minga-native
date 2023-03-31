import { createReducer } from "@reduxjs/toolkit";
import actions from './actions'

const { captureReactions } = actions

const initialState = {
    reactions: {}
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            captureReactions.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    reactions: action.payload.reactions
                }
                return newState
            }
        )
)

export default reducer