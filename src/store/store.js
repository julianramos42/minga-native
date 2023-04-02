import { configureStore } from '@reduxjs/toolkit'
import textReducer from './SearchBar/reducer'
import chaptersReducer from './Chapters/reducer'
import captureState from './Captures/reducer'
import mangasReducer from './Mangas/reducer'
import categoriesReducer from './Categories/reducer'
import sortReducer from './Sort/reducer'
import reactionsReducer from './Reactions/reducer'
import bottomTabsReducer from './ReloadBottomTabs/reducer'
import mangaClickReducer from './MangaClicked/reducer'
import chapterClickReducer from './ChapterClicked/reducer'

export const store = configureStore({
    reducer: {
        text: textReducer,
        chapters: chaptersReducer,
        checked: captureState,
        mangas: mangasReducer,
        categories: categoriesReducer,
        order: sortReducer,
        reactions: reactionsReducer,
        bottomTabsReducer: bottomTabsReducer,
        mangaClickReducer: mangaClickReducer,
        chapterClickReducer: chapterClickReducer
    }
})
