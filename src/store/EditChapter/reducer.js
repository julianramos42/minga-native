import { createReducer } from "@reduxjs/toolkit";
import actions from './actions'

const { read_one_chapter, delete_one_chapter, edit_one_chapter, getInfo } = actions

const initialState = {
    chapters: [],
    title: "",
    order: null,
    chapter:{}
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            read_one_chapter.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    chapters: action.payload.chapters,
                    title: action.payload.title,
                    chapter: {},
                    order: null
                }
                return newState
            }
        )
        .addCase(
            delete_one_chapter.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    chapters: state.chapters.filter(chapter => chapter._id !== action.payload._id),
                    order: null,
                    chapter: {}
                }
                return newState
            }
        )
        .addCase(
            edit_one_chapter.fulfilled,
            (state, action) => {
                let editChapters = []
                for (let chapter of state.chapters){
                    if(chapter._id === action.payload.chapter._id ){
                        editChapters.push(action.payload.chapter)
                    }else{
                        editChapters.push(chapter)
                    }
                }
                let newState = {
                    ...state,
                    chapters: editChapters,
                    chapter: action.payload.chapter
              
                }
                return newState
            }
        )
        .addCase(
            getInfo.fulfilled,
            (state,action)=>{
                let newState = {
                    ...state,
                    order: action.payload.order,
                    chapter: action.payload.chapter
                }
                return newState
            }
        )
)

export default reducer