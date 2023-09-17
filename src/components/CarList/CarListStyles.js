import styled from "@emotion/styled";

const CatalogPageContainer = styled.div`
  text-align: center;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 274px);
  gap: 29px 50px;
  justify-content: center;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  margin-top: 50px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  background-color: transparent;
  color: #3470ff;
  text-decoration: underline;
  transition: color 0.25s ease-in-out;

  &:hover {
    color: #0b44cd;
  }
`;

export { CatalogPageContainer, CardContainer, Button };
