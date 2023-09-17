import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const MainTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
`;

const Text = styled.p`
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  margin-top: 8px;
  font-size: 24px;
  font-weight: 600;
  color: #ffea61;
`;

const WrapperContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0;
  margin: 0;
  font-size: 18px;
  line-height: 1.4;
  list-style-type: circle;
  color: #121417;
`;

const StyledButton = styled(Link)`
  display: inline-block;
  padding: 20px 170px;
  background-color: #3470ff;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  border-radius: 30px;
  transition: background-color 0.25s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    background-color: #0b44cd;
    transform: scale(1.1);
  }
`;

export { MainTitle, Text, WrapperContainer, List, StyledButton };
