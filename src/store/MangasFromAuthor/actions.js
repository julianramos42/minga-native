import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const read_mangas_from_author = createAsyncThunk(
    'read_mangas_from_author',
    async ({ id, mangaOrder, headers }) => {
        try{
            let response = await axios.get("https://minga-pjxq.onrender.com/api/mangas/authors/"+id+"?new="+mangaOrder, headers)
            return { mangas: response.data.mangas }
        }catch(error){
            return { mangas: '' }
        }
    }
) 

const actions = { read_mangas_from_author }
export default actions