import React, { useState } from "react";

import {
  CardContainer,
  FavoriteBtn,
  TitleContainer,
  Image,
  CarTitle,
  CarModel,
  CarPrice,
  CarInfoContainer,
  Button,
} from "./CarCardStyles";

import CarModal from "../CarModal/CarModal";

import {
  FavoriteHeartIcon,
  ActiveFavoriteHeartIcon,
} from "../../buttons/Buttons";

function CarCard({ car, isFavorite, onToggleFavorite, isCatalogPage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addressParts = car.address.split(", ");
  const city = addressParts[0];
  const country = addressParts[1];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleToggleFavorite = () => {
    onToggleFavorite(car);
  };

  return (
    <CardContainer>
      <Image src={car.img} alt={`${car.make} ${car.model}`} />
      {isCatalogPage && (
        <FavoriteBtn onClick={handleToggleFavorite}>
          {isFavorite ? <ActiveFavoriteHeartIcon /> : <FavoriteHeartIcon />}
        </FavoriteBtn>
      )}
      <TitleContainer>
        <CarTitle>
          {car.make} <CarModel>{car.model}</CarModel>, {car.year}
        </CarTitle>
        <CarPrice>{car.rentalPrice}</CarPrice>
      </TitleContainer>
      <CarInfoContainer>
        <p>
          {city} | {country} | {car.rentalCompany} | {car.type} | {car.make} |{" "}
          {car.id}
        </p>
      </CarInfoContainer>
      <Button onClick={openModal}>Learn more</Button>

      <CarModal isOpen={isModalOpen} closeModal={closeModal} car={car} />
    </CardContainer>
  );
}

export default CarCard;
