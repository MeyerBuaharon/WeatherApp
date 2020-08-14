import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { currentWeatherApi } from "../../api";

const name = "weather";
const initialCityKey = "215854";

const fetchWeather = createAsyncThunk(`${name}/fetchWeather`, async () => {
  const response = await currentWeatherApi(initialCityKey);
  return response.data;
});

const initialState = [];

const weathers = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.fulfilled, (state, { payload, meta }) => {
      return payload.results;
    });
  },
});

export default {
  ...weathers,
  actions: { ...weathers.actions, fetchWeather },
};
