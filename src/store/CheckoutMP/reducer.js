import { createReducer } from "@reduxjs/toolkit";
import actions from './actions'
const { checkoutMP } = actions

const initiateState= {
    checkout: ""
}
const reducer = createReducer(
    initiateState,
    (builder) => builder
    .addCase(
        checkoutMP,
        (state,action) => {
            let newState = {
                ...state,
                checkout : action.payload.checkout 
            }
            return newState
        }
    )
)

export default reducer