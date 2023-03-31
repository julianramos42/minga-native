import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const read_myMangas = createAsyncThunk(
    'read_myMangas',
    async ({ page, categories, order, headers }) => {
        try{
            let response = await axios.get("https://minga-pjxq.onrender.com/api/mangas/me?page="+page+"&category="+categories+"&order="+order,headers)
            return { myMangas: response.data.mangas }
        }catch(error){
            return { myMangas: '' }
        }
    }
) 

const actions = { read_myMangas }
export default actions