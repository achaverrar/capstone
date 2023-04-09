import React from "react";
import "./NavItem.css";

const NavItem = ({ link, content }) => {
  return (
    <li className="font-card-title">
      <a href={link} className="header__navbar-link">
        {content}
      </a>
    </li>
  );
};

export default NavItem;
