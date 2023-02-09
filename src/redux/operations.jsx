import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://63e4a86c4474903105eed7f3.mockapi.io/"

export const fetchContacts = createAsyncThunk(
    "contacts/fetch",
    async () => {
        const response = await axios.get("contacts")
        return response.data
    }
)
export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkAPI) => {
        try {
            const response = await axios.post("contacts", { ...newContact })
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
        
    }
)

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async ({id}, thunkAPI) => {
        try {
            const response = await axios.delete("contacts", { data: { id } })
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
        
    }
)