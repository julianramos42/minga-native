import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from 'react-hot-toast'

let captureState = createAction(
    'captureState',
    ({ buttonState }) => {
        return {
            payload: {
                checked: buttonState,
            }
        }
    }
)

let read_all_authors = createAsyncThunk(
    'read_all_authors',
    async () => {
        try {
            let token = localStorage.getItem('token')
            let headers = { headers: { 'Authorization': `Bearer ${token}` } }
            let response = await axios.get('https://minga-pjxq.onrender.com/api/authors/admin',headers)
            return {
                activeAuthors: response.data.authorActive,
                inactiveAuthors: response.data.authorInactive,
            }
        } catch (error) {
            return { activeAuthors: [], inactiveAuthors: [] }
        }
    }
)
let read_all_company = createAsyncThunk(
    'read_all_company',
    async () => {
        try {
            let token = localStorage.getItem('token')
            let headers = { headers: { 'Authorization': `Bearer ${token}` } }
            let response = await axios.get('https://minga-pjxq.onrender.com/api/companies/admin', headers)
            return {
                activeCompanies: response.data.companyActive,
                inactiveCompanies: response.data.companyInactive
            }
        } catch (error) {
            return { activeCompanies: [], inactiveCompanies: [] }
        }
    }
)

let update_author_active = createAsyncThunk(
    'update_author_active ',
    async ({ _id, active }) => {
        try {
            let token = localStorage.getItem('token')
            let headers = { headers: { 'Authorization': `Bearer ${token}` } }
            let response = await axios.put(`https://minga-pjxq.onrender.com/api/authors/admin/${_id}`, { active: active },headers)
            toast.success('Author status changed')
            return {
                author: response.data.author,
                success: true,
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
        }
    }
)
let update_company_active = createAsyncThunk(
    'update_company_active ',
    async ({ _id, active }) => {
        try {
            let token = localStorage.getItem('token')
            let headers = { headers: { 'Authorization': `Bearer ${token}` } }
            let response = await axios.put(`https://minga-pjxq.onrender.com/api/companies/admin/${_id}`, { active: active }, headers)
            toast.success('Company status changed')
            return {
                company: response.data.company,
                success: true,
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
        }
    }
)

const actions = { captureState, read_all_authors, read_all_company, update_author_active, update_company_active }
export default actions