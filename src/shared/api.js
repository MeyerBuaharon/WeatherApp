import axios from "axios";
import Swal from "sweetalert2";

const API_KEY = "Da5G3U1uGXGQPGrF0azGdAJy1C8kCdux";

const api = axios.create({
  baseURL: "https://dataservice.accuweather.com/",
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

const alertError = (msg) => {
  Swal.fire({
    title: "Error!",
    text: msg,
    icon: "error",
    confirmButtonText: "OK",
  });
};

const exceeded_50_requests =
  "Error, you have exceeded number of requests, please contact the admin to refresh calls";

export const getFiveDaysWeatherApi = (city) =>
  api
    .get(`forecasts/v1/daily/5day/${city}?apikey=${API_KEY}`)
    .then((res) => res)
    .catch((error) => alertError(exceeded_50_requests));

export const currentWeatherApi = (city) =>
  api
    .get(`currentconditions/v1/${city}?apikey=${API_KEY}`)
    .then((res) => res)
    .catch((error) => alertError(exceeded_50_requests));

export const autoCompleteApi = (query) =>
  api
    .get(`locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}`)
    .then((res) => res)
    .catch((error) => alertError(exceeded_50_requests));

export const GeolocationEndpointApi = (lat, lon) =>
  api
    .get(
      `locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${lat}%2C${lon}`
    )
    .then((res) => res)
    .catch((error) => alertError(exceeded_50_requests));
