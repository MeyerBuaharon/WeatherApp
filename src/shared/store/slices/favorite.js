import { createSlice } from "@reduxjs/toolkit";

const name = "favorites";

const initialState = [];

const favorites = createSlice({
  name,
  initialState,
  reducers: {
    addToFavorites(state, { payload }) {
      if (state.find((item) => item.cityKey === payload.cityKey) === undefined)
        return [...state, payload];
      return state;
    },
    removeFromFavorites(state, { payload }) {
      const newState = state.filter((val) => val.cityKey !== payload);
      return [...newState];
    },
  },
});

export default favorites;
