import React from "react";
import styled from "styled-components";
import { Typography } from "./styles";

import { Card } from "@material-ui/core";
import { makeWeatherIconAddress } from "../makeWeatherIconAddress";

const Root = styled(Card)`
  margin: 20px;
  padding: 20px;
  flex: 1;
`;

const Header = styled.div`
  border-bottom: 1px solid black;
  margin: 20px;
`;

const ForecastCard = ({ EpochDate, Day, Temperature, isCelsius }) => {
  const getDayFromEpochDate = (EpochDate) => {
    var date = new Date(EpochDate * 1000).toLocaleDateString("en-us", {
      weekday: "long",
    });
    return date;
  };

  const convertFarenheitToCelsius = (val) => {
    return isCelsius ? (((val - 32) * 5) / 9).toFixed(1) : val;
  };

  return (
    <Root >
      <Header>
        <Typography>{getDayFromEpochDate(EpochDate)}</Typography>
      </Header>
      <img src={makeWeatherIconAddress(Day.Icon)} alt={Day.Icon} />
      <div>{`${convertFarenheitToCelsius(Temperature.Minimum.Value)} ${
        isCelsius ? "℃" : "℉"
      } |
     ${convertFarenheitToCelsius(Temperature.Maximum.Value)} ${
        isCelsius ? "℃" : "℉"
      }`}</div>
    </Root>
  );
};

export default ForecastCard;
