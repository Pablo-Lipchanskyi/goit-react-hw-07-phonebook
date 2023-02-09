import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { nanoid } from "nanoid";

axios.defaults.baseURL = "https://63e4a86c4474903105eed7f3.mockapi.io/"

export const fetchList = createAsyncThunk(
    "contacts/fetch",
    async () => {
        const response = await axios.get("contacts")
        return response.data
    }
)
export const addListItem = createAsyncThunk(
    "contacts/addContact",
    async () => {
        const response = await axios.post("contacts/132123",{})
    }
)