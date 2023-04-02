import { configureStore } from '@reduxjs/toolkit'
// import alertReducer from './Alert/reducer'
import textReducer from './SearchBar/reducer'
import chaptersReducer from './Chapters/reducer'
import captureState from './Captures/reducer'
import mangasReducer from './Mangas/reducer'
import categoriesReducer from './Categories/reducer'
import sortReducer from './Sort/reducer'
// import mangasFromAuthorReducer from './MangasFromAuthor/reducer'
// import checkReducer from './Switch/reducer'
// import editReducer from './EditChapter/reducer'
// import myMangasReducer from './MyMangas/reducer'
// import modalReducer from './RenderEditModal/reducer'
// import modalDeleteReducer from './RenderDeleteModal/reducer'
// import renderCommentsModal from './RenderCommentsModal/reducer'
// import getComents from './Comments/reducer'
import reactionsReducer from './Reactions/reducer'
// import favouritesMangasReducer from './FavouritesMangas/reducer'
// import authorReducer from './Profile/reducer'
// import logoutReducer from './LogoutReload/reducer'
// import checkoutMPReducer from './CheckoutMP/reducer'
// import panelAdminReducer from './PanelAdmin/reducer'
// import verifyReducer from "./User/reducer";
import bottomTabsReducer from './ReloadBottomTabs/reducer'
import mangaClickReducer from './MangaClicked/reducer'
import chapterClickReducer from './ChapterClicked/reducer'

export const store = configureStore({
    reducer: {
        // alert: alertReducer,
        text: textReducer,
        chapters: chaptersReducer,
        checked: captureState,
        mangas: mangasReducer,
        categories: categoriesReducer,
        order: sortReducer,
        // mangas_from_author:  mangasFromAuthorReducer,
        // check: checkReducer,
        // editchapter: editReducer,
        // myMangas: myMangasReducer,
        // commentsModal: renderCommentsModal,
        // comments: getComents,
        // modalState: modalReducer,
        // modalDeleteState: modalDeleteReducer,
        reactions: reactionsReducer,
        // author: authorReducer,
        // favouritesMangas: favouritesMangasReducer,
        // logoutState: logoutReducer,
        // checkout: checkoutMPReducer,
        // panelAdmin : panelAdminReducer,
        // user: verifyReducer,
        bottomTabsReducer: bottomTabsReducer,
        mangaClickReducer: mangaClickReducer,
        chapterClickReducer: chapterClickReducer
    }
})
