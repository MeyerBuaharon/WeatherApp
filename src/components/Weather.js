import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  autoCompleteApi,
  getFiveDaysWeatherApi,
  currentWeatherApi,
  GeolocationEndpointApi,
} from "../shared/api";
import { TextField, CircularProgress } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import FiveDayWeatherForecast from "./FiveDayWeatherForecast";

const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const LoaderContainer = styled.div`
  display: flex;
  height: 200px;
  justify-content: center;
  align-items: center;
`;

const Weather = ({ isCelsius }) => {
  const [weather, setWeather] = useState();
  const [autoComplete, setAutoComplete] = useState();
  const [searchBar, setSearchBar] = useState("");
  const [selectedCountry, setSelectedCountry] = useState();
  const [fiveDay, setFiveDay] = useState();

  useEffect(() => {
    autoCompleteApi(searchBar).then((res) => setAutoComplete(res));
  }, [searchBar]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        GeolocationEndpointApi(
          position.coords.latitude,
          position.coords.longitude
        ).then((res) => setSelectedCountry(res));
      });
    } else
      GeolocationEndpointApi(32.0853, 34.7818).then((res) =>
        setSelectedCountry(res)
      );
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      getFiveDaysWeatherApi(selectedCountry.Key).then((res) => setFiveDay(res));
      currentWeatherApi(selectedCountry.Key).then((res) => setWeather(res));
    }
  }, [selectedCountry]);

  return (
    <Container>
      <h1>Weather Forecast</h1>
      <Autocomplete
        options={autoComplete || []}
        getOptionLabel={(option) => option.LocalizedName}
        style={{ width: 300 }}
        onInputChange={(e) => setSearchBar(e.target.value)}
        onChange={(e, value) => value && setSelectedCountry(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for Locations"
            variant="outlined"
          />
        )}
      />
      {fiveDay && weather ? (
        <FiveDayWeatherForecast
          isCelsius={isCelsius}
          selectedCountry={selectedCountry}
          fiveDay={fiveDay}
          weather={weather}
        />
      ) : (
        <LoaderContainer>
          <CircularProgress />
        </LoaderContainer>
      )}
    </Container>
  );
};

export default Weather;
