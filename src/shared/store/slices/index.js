import favorites from "./favorite";
import weather from "./weather";

export const actions = {
  ...favorites.actions,
  ...weather.actions,
};

export const reducers = {
  favorites: favorites.reducer,
  weather: weather.reducer,
};
