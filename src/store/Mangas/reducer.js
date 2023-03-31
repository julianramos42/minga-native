import { createReducer } from "@reduxjs/toolkit";
import mangasActions from './actions'

const { read_mangas } = mangasActions

const initialState = {
    mangas: []
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            read_mangas.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    mangas: action.payload.mangas
                }
                return newState
            }
        )
)

export default reducer