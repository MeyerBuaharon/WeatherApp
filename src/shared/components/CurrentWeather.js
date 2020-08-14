import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import actions from "../store/actions";
import { H1, Typography } from "./styles";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";

const Root = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 12px;
`;

const FavoriteContainer = styled.div`
  margin: 12px;
  cursor: pointer;
`;

const Name = styled(Typography)``;

const Header = styled(H1)`
  flex: 1;
`;

const CurrentWeather = ({ id, city, country, fiveDay, weather }) => {
  const dispatch = useDispatch();

  const data = {
    cityKey: id,
    cityName: city,
    countryName: country,
    forecastObject: fiveDay,
    weather: weather,
  };

  const addToFavorite = async () => {
    dispatch(actions.addToFavorites(data));
  };

  const removeFromFavorites = async () => {
    dispatch(actions.removeFromFavorites(data.cityKey));
  };
  const favorites = useSelector((state) => state.favorites);
  return (
    <Root>
      <Container>
        <Name>{city}</Name>
        <div>{country}</div>
      </Container>
      <Header>{weather[0].WeatherText}</Header>
      <FavoriteContainer>
        {!favorites.some((favorite) => favorite.cityKey === data.cityKey) ? (
          <FavoriteBorder
            fontSize="large"
            onClick={() => addToFavorite()}
            color="secondary"
          />
        ) : (
          <Favorite
            fontSize="large"
            onClick={() => removeFromFavorites()}
            color="secondary"
          />
        )}
      </FavoriteContainer>
    </Root>
  );
};

export default CurrentWeather;
