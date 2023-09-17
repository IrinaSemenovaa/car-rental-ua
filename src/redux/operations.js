import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6501afb6736d26322f5c2007.mockapi.io";

const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async ({ page, limit }, thunkAPI) => {
    try {
      const params = {
        page,
        limit,
      };

      const response = await axios.get("/cars", { params });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export { fetchCars };
