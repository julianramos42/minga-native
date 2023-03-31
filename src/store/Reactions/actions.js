import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const captureReactions = createAsyncThunk(
    'captureReactions',
    async ({ mangaId,headers }) => {
        try{
            let response = await axios.get("https://minga-pjxq.onrender.com/api/reactions/?manga_id="+mangaId,headers)
            return { reactions: response.data.message }
        }catch(error){
            return { reactions: {} }
        }
    }
) 

const actions = { captureReactions }
export default actions