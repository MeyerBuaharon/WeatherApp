import React from "react";
import styled from "styled-components";

import ForecastCard from "../shared/components/ForecastCard";
import CurrentWeather from "../shared/components/CurrentWeather";

const Root = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  margin: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const ForecastContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const FiveDayWeatherForecast = ({
  fiveDay,
  weather,
  selectedCountry,
  isCelsius,
}) => {
  return (
    <Root>
      <CurrentWeather
        weather={weather}
        id={selectedCountry.Key}
        city={selectedCountry.LocalizedName}
        country={selectedCountry.Country.LocalizedName}
        headline={fiveDay.Headline}
        fiveDay={fiveDay}
      />
      <ForecastContainer>
        {fiveDay.DailyForecasts.map((forecast) => (
          <ForecastCard
            key={forecast.Date}
            {...forecast}
            isCelsius={isCelsius}
          />
        ))}
      </ForecastContainer>
    </Root>
  );
};

export default FiveDayWeatherForecast;
