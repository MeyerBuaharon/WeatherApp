import React from "react";
import styled from "styled-components";

import actions from "../store/actions";
import CloseOutlined from "@material-ui/icons/CloseOutlined";
import { Card } from "@material-ui/core";
import { makeWeatherIconAddress } from "../makeWeatherIconAddress";
import { useDispatch } from "react-redux";
import { Typography } from "./styles";

const Root = styled(Card)`
  position: relative;
  margin: 20px;
  padding: 20px;
  flex: 1;
`;

const Header = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const FavoriteCard = ({
  cityKey,
  cityName,
  icon,
  temperature,
  isCelsius,
  weather,
}) => {
  const convertFarenheitToCelsius = (val) => {
    return isCelsius ? (((val - 32) * 5) / 9).toFixed(1) : val;
  };
  const dispatch = useDispatch();

  const removeFromFavorites = async () => {
    dispatch(actions.removeFromFavorites(cityKey));
  };

  return (
    <Root>
      <CloseOutlined
        style={{
          position: "absolute",
          right: "5px",
          top: "5px",
          cursor: "pointer",
          color: "crimson",
        }}
        onClick={() => removeFromFavorites()}
      />
      <Header>
        <Typography>{weather[0].WeatherText}</Typography>
        {cityName}
      </Header>
      <img src={makeWeatherIconAddress(icon)} alt={icon} />
      <div>{`${convertFarenheitToCelsius(temperature.Minimum.Value)} ${
        isCelsius ? "℃" : "℉"
      } |
     ${convertFarenheitToCelsius(temperature.Maximum.Value)} ${
        isCelsius ? "℃" : "℉"
      }`}</div>
    </Root>
  );
};

export default FavoriteCard;
