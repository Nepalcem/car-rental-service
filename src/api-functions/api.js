import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const BASE_URL = 'https://650560a4ef808d3c66eff89e.mockapi.io/cars';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/adverts`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);