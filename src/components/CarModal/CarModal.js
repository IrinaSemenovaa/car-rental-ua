import React from "react";
import Modal from "react-modal";

import {
  ModalContainer,
  Overlay,
  Image,
  CarTitle,
  CarModel,
  CarInfoContainer,
  SecondaryText,
  DescriptionText,
  SecondaryTitle,
  ListConditions,
  ItemContidions,
  Number,
  BtnClose,
  Button,
} from "./CarModalStyles";
import { customStyles } from "./CustomStyles";
import { CloseIcon } from "../../buttons/Buttons";

import { formatNumberWithCommas, callRentalCompany } from "../../utils/helpers";

const CarModal = ({ isOpen, closeModal, car }) => {
  const addressParts = car.address.split(", ");
  const city = addressParts[0];
  const country = addressParts[1];
  const accessories = car.accessories.join(" | ");
  const functionalities = car.functionalities.join(" | ");
  const rentalConditionsArray = car.rentalConditions.split("\n");

  const ageRegex = /\d+/;

  const ageMatch = car.rentalConditions.match(ageRegex);
  const minimumAge = ageMatch ? ageMatch[0] : null;

  const closeModalOnOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Car Modal"
      style={customStyles}
      overlayClassName="custom-overlay-class"
      className="custom-content-class"
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
    >
      <Overlay onClick={closeModalOnOverlayClick}>
        <ModalContainer>
          <BtnClose onClick={closeModal}>
            <CloseIcon />
          </BtnClose>
          <Image src={car.img} alt={`${car.make} ${car.model}`} />
          <CarTitle>
            {car.make} <CarModel>{car.model}</CarModel>, {car.year}
          </CarTitle>
          <CarInfoContainer>
            <SecondaryText>
              {city} | {country} | id: {car.id} | year: {car.year} | type:{" "}
              {car.type} | Fuel Consumption: {car.fuelConsumption} | Engine
              Size: {car.engineSize}
            </SecondaryText>
            <DescriptionText>{car.description}</DescriptionText>
          </CarInfoContainer>
          <div>
            <SecondaryTitle>Accessories and functionalities:</SecondaryTitle>
            <SecondaryText>
              {accessories} | {functionalities}
            </SecondaryText>
          </div>
          <div>
            <SecondaryTitle>Rental Conditions:</SecondaryTitle>
            <ListConditions>
              {rentalConditionsArray.map((condition, index) => {
                if (condition.includes(minimumAge)) {
                  return (
                    <ItemContidions key={index}>
                      Minimum age: <Number>{minimumAge}</Number>
                    </ItemContidions>
                  );
                }
                return <ItemContidions key={index}>{condition}</ItemContidions>;
              })}
              <ItemContidions>
                Mileage: <Number>{formatNumberWithCommas(car.mileage)}</Number>
              </ItemContidions>
              <ItemContidions>
                Price: <Number>{car.rentalPrice}</Number>
              </ItemContidions>
            </ListConditions>
          </div>
          <Button onClick={() => callRentalCompany("+380730000000")}>
            Rental car
          </Button>
        </ModalContainer>
      </Overlay>
    </Modal>
  );
};

export default CarModal;
