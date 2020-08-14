import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import FavoriteCard from "../shared/components/FavoriteCard";
import NoFavoritePanel from "../shared/NoFavoritePanel";

const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Favorite = ({ isCelsius }) => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <Container>
      <h1>Favorite Locations</h1>
      {favorites.map((favorite) => (
        <FavoriteCard
          weather={favorite.weather}
          key={favorite.cityKey}
          isCelsius={isCelsius}
          cityKey={favorite.cityKey}
          cityName={favorite.cityName}
          temperature={favorite.forecastObject.DailyForecasts[0].Temperature}
          icon={favorite.forecastObject.DailyForecasts[0].Day.Icon}
        />
      ))}
      {favorites.length === 0 && <NoFavoritePanel />}
    </Container>
  );
};

export default Favorite;
