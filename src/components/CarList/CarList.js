import React from "react";
import CarCard from "../CarCard/CarCard";
import { CatalogPageContainer, CardContainer, Button } from "./CarListStyles";

function CarList({
  cars,
  favoriteCars,
  isLoading,
  handleToggleFavorite,
  handleLoadMoreClick,
}) {
  return (
    <CatalogPageContainer>
      <CardContainer>
        {cars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            isFavorite={favoriteCars.some(
              (favoriteCar) => favoriteCar.id === car.id
            )}
            onToggleFavorite={handleToggleFavorite}
            isCatalogPage={true}
          />
        ))}
      </CardContainer>
      {!isLoading && (
        <Button type="button" onClick={handleLoadMoreClick}>
          Load more
        </Button>
      )}
      {isLoading && <p>Loading...</p>}
    </CatalogPageContainer>
  );
}

export default CarList;
