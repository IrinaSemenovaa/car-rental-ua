import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 20%,
    rgba(95, 95, 97, 1) 50%,
    rgba(0, 0, 0, 1) 80%
  );
  color: #fff;
  padding: 32px 0 32px 140px;
`;

const NavList = styled.ul`
  display: flex;
  gap: 100px;
`;

const LinkStyled = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  transition: color 0.3s;

  &:hover {
    color: #3470ff;
  }

  &.active {
    color: #3470ff;
  }
`;

export { Nav, NavList, LinkStyled };
