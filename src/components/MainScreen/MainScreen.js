import React from "react";

import mainImg from "../../images/main_car.png";

import {
  MainTitle,
  Text,
  WrapperContainer,
  List,
  StyledButton,
} from "./MainScreenStyles";

function MainScreen() {
  return (
    <div>
      <MainTitle>Drive Your Dreams: Innovative Car Rentals</MainTitle>
      <Text>Ukraine</Text>
      <WrapperContainer>
        <List>
          <li>
            <b>Wide Selection: </b>"Choose from a diverse fleet of over 100
            modern vehicles to match your style and needs."
          </li>
          <li>
            <b>Convenient Booking: </b>"Easily book your rental car online, and
            we'll have it ready when and where you need it."
          </li>
          <li>
            <b>Full Coverage Insurance: </b>"Enjoy peace of mind with
            comprehensive insurance coverage, including Collision Damage Waiver
            (CDW) and Liability Insurance."
          </li>
          <li>
            <b>International Travel: </b>"Take your adventures across borders
            with our cars, suitable for international travel."
          </li>
          <li>
            <b>24/7 Support: </b>"Rest assured with round-the-clock customer
            support, ready to assist you at any time."
          </li>
        </List>
        <img src={mainImg} alt="img" width="600px" />
      </WrapperContainer>
      <StyledButton to="/catalog">Go to Catalog</StyledButton>
    </div>
  );
}

export default MainScreen;
