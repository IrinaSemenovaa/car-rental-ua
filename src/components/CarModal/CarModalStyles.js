import styled from "@emotion/styled";

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 24px;
  padding: 40px;
  max-width: 541px;
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 20, 23, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Image = styled.img`
  width: 100%;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
`;

const CarTitle = styled.h2`
  font-size: 18px;
  line-height: 1.3;
  margin-top: 18px;
`;

const CarModel = styled.span`
  color: #3470ff;
`;

const CarInfoContainer = styled.div`
  text-align: left;
  margin-top: 8px;
`;

const SecondaryText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
`;

const DescriptionText = styled.p`
  margin-top: 14px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  color: #121417;
`;

const SecondaryTitle = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
  margin-top: 24px;
`;

const ListConditions = styled.ul`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ItemContidions = styled.li`
  display: inline-block;
  padding: 7px 14px;
  background-color: #f9f9f9;
  border-radius: 35px;
  color: #363535;
  font-family: "Montserrat";
  font-size: 12px;
  line-height: 1.5;
`;

const Number = styled.span`
  color: #3470ff;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
`;

const BtnClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  color: #fff;
  background-color: #3470ff;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.4;
  padding: 12px 50px;
  margin-top: 24px;
  border-radius: 12px;
  transition: background-color 0.25s ease-in-out;

  &:hover {
    background-color: #0b44cd;
  }
`;

export {
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
};
