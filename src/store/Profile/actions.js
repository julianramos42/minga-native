import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const read_author = createAsyncThunk("read_author", async () => {
  let token = localStorage.getItem("token");
  let headers = { headers: { "Authorization": `Bearer ${token}` } };
  let url = "https://minga-pjxq.onrender.com/api/authors/authors_me/me";
  try {
    let response = await axios.get(url, headers);
    return {
      author: response.data.author,
    };
  } catch (error) {
    return {
      author: {},
    };
  }
});

const update_author = createAsyncThunk("update_author", async ({ data }) => {
  let token = localStorage.getItem("token");
  let headers = { headers: { "Authorization": `Bearer ${token}` } };
  let url = "https://minga-pjxq.onrender.com/api/authors/authors_me/me";
  try {
    let response = await axios.put(url, data, headers);
    toast.success('Author info changed')
    return {
      author: response.data.author,
    };
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
});
const actions = { read_author, update_author };

export default actions;
