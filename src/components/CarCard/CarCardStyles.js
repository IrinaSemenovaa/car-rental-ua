import styled from "@emotion/styled";

const CardContainer = styled.div`
  position: relative;
`;
const FavoriteBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const Image = styled.img`
  width: 274px;
  height: 268px;
  object-fit: fill;
  border-radius: 14px;
  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08),
    inset 0px 0px 6px rgba(0, 0, 0, 0.1);
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
`;

const CarTitle = styled.h2`
  font-size: 16px;
  line-height: 1.5;
`;

const CarModel = styled.span`
  color: #3470ff;
`;

const CarPrice = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`;

const CarInfoContainer = styled.div`
  text-align: left;
  margin-top: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  color: #fff;
  background-color: #3470ff;
  font-size: 14px;
  line-height: 1.4;
  white-space: nowrap;
  width: 100%;
  padding: 12px 99.5px;
  margin-top: 28px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 12px;
  transition: background-color 0.25s ease-in-out;

  &:hover {
    background-color: #0b44cd;
  }
`;

export {
  CardContainer,
  FavoriteBtn,
  Image,
  TitleContainer,
  CarTitle,
  CarModel,
  CarPrice,
  CarInfoContainer,
  Button,
};
