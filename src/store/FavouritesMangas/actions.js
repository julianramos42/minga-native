import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const read_favouritesMangas = createAsyncThunk(
    'read_favouritesMangas',
    async ({ page, categories, order, headers }) => {
        try{
            let response = await axios.get("https://minga-pjxq.onrender.com/api/reactions?name=love&page="+page+"&category="+categories+"&order="+order,headers)
            return { favouritesMangas: response.data.message }
        }catch(error){
            return { favouritesMangas: '' }
        }
    }
) 

const actions = { read_favouritesMangas }
export default actions