import React from "react";
import { useSelector } from "react-redux";

import CarCard from "../CarCard/CarCard";

import { selectFavoriteCars } from "../../redux/selectors";

import { CatalogPageContainer, CardContainer } from "./CarListStyles";

function FavoriteCarList() {
  const favoriteCars = useSelector(selectFavoriteCars);

  return (
    <CatalogPageContainer>
      {favoriteCars.length > 0 ? (
        <CardContainer>
          {favoriteCars.map((car) => (
            <CarCard key={car.id} car={car} isCatalogPage={false} />
          ))}
        </CardContainer>
      ) : (
        <p>You don't have any favorite cars yet. Add them to your favorites!</p>
      )}
    </CatalogPageContainer>
  );
}

export default FavoriteCarList;
