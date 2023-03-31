import { createReducer } from "@reduxjs/toolkit";
import mangasActions from './actions'

const { read_favouritesMangas } = mangasActions

const initialState = {
    favouritesMangas: []
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            read_favouritesMangas.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    favouritesMangas: action.payload.favouritesMangas
                }
                return newState
            }
        )
)

export default reducer