import React from "react";
import { useLocation } from "react-router-dom";

import { Nav, NavList, LinkStyled } from "./NavigationStyles";

function Header() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Nav>
      <NavList>
        <li>
          <LinkStyled to="/" className={isActive("/") ? "active" : ""}>
            Home
          </LinkStyled>
        </li>
        {isHomePage && null}
        <li>
          <LinkStyled
            to="/catalog"
            className={isActive("/catalog") ? "active" : ""}
          >
            Catalog
          </LinkStyled>
        </li>
        {!isHomePage && (
          <li>
            <LinkStyled
              to="/favorites"
              className={isActive("/favorites") ? "active" : ""}
            >
              Favorites
            </LinkStyled>
          </li>
        )}
      </NavList>
    </Nav>
  );
}

export default Header;
