import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";


const read_one_chapter = createAsyncThunk(
    'read_one_chapter',
    async ({ manga_id }) => {
        try {
            let response = await axios.get("https://minga-pjxq.onrender.com/api/chapters/all/" + manga_id)
            return {
                chapters: response.data.chapters,
                title: response.data.chapters[0]?.manga_id.title
            }
        } catch (error) {
            return {
                chapters: [],
                title: ""
            }
        }
    }
)
const delete_one_chapter = createAsyncThunk(
    'delete_one_chapter',
    async ({ _id, headers }) => {

        try {
            let response = await axios.delete("https://minga-pjxq.onrender.com/api/chapters/" + _id, headers)
            toast.success('Chapter deleted successfully')
            return { _id: _id }
        } catch (error) {
            if (error.response.data === 'Unauthorized') {
                toast.error('You need to Login')
            } else {
                if (typeof error.response.data.message === 'string') {
                    toast.error(error.response.data.message)
                } else {
                    error.response.data.message.forEach(err => toast.error(err))
                }

            }
            return { chapters: [] }
        }
    }
)
const edit_one_chapter = createAsyncThunk(
    'edit_one_chapter',
    async ({ _id, data, headers }) => {
        try {
            let response = await axios.put("https://minga-pjxq.onrender.com/api/chapters/" + _id, data, headers)
            toast.success('Chapter edited successfully')
            return {
                chapter: response.data.chapter
            }
        } catch (error) {
            if (error.response.data === 'Unauthorized') {
                toast.error('You need to Login')
            } else {
                if (typeof error.response.data.message === 'string') {
                    toast.error(error.response.data.message)
                } else {
                    error.response.data.message.forEach(err => toast.error(err))
                }
            }
            return { chapters: [] }
        }
    }
)
const getInfo = createAsyncThunk(
    'getInfo',
    async ({ order, chapter }) => {
        try {
            return {
                order,
                chapter
            }
        } catch (error) {
            return {
                order: null,
                chapter: {}
            }
        }
    }
)

const actions = { read_one_chapter, delete_one_chapter, edit_one_chapter, getInfo }
export default actions 