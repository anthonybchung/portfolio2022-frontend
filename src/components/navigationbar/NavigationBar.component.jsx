import React from "react";
import { NavLink } from "react-router-dom";

import "./NavigationBar.styles.scss";

const NavigationBar = () => {
  const menuItem = [
    {
      path: "/side-projects",
      name: "Side Projects",
    },
    {
      path: "/blog",
      name: "Blog",
    },
    {
      path: "/about-me",
      name: "About Me",
    },
    {
      path: "/login",
      name: "Login",
    },
  ];

  const isActiveStyle = {
    fontWeight: "bolder",
    textDecoration: "underline",
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
        </div>
        <div className="menu-item">
          {menuItem.map((item, index) => {
            return (
              <NavLink
                to={item.path}
                key={index}
                className="nav-item"
                style={({ isActive }) => (isActive ? isActiveStyle : undefined)}
              >
                {item.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
