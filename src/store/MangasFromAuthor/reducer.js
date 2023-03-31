import { createReducer } from "@reduxjs/toolkit";
import mangasActions from './actions'

const { read_mangas_from_author } = mangasActions

const initialState = {
    mangas: []
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            read_mangas_from_author.fulfilled,
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