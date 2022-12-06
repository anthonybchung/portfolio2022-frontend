import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../logo.svg";
import "./NavigationBar.styles.scss";

const NavigationBar = () => {
  const menuItem = [
    // {
    //   path: "/side-projects",
    //   name: "Side Projects",
    // },
    {
      path: "/blog",
      name: "Blog",
    },
    {
      path: "/about-me",
      name: "About Me",
    },
    // {
    //   path: "/login",
    //   name: "Login",
    // },
  ];

  const isActiveStyle = {
    fontWeight: "bolder",
    textDecoration: "underline",
  };

  const [isClosed, setIsClosed] = useState(false);

  const handleSlideMenu = () => {
    setIsClosed(!isClosed);
  };

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="logo">
            <NavLink
              to="/"
              className="nav-item"
              onClick={() => {
                setIsClosed(false);
              }}
            >
              <img src={Logo} alt="ABChungSTACK Logo" />
            </NavLink>
          </div>
          <div className="btn-menu" onClick={handleSlideMenu}>
            {isClosed ? (
              <FontAwesomeIcon icon={faXmark} size="2x" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="2x" />
            )}
          </div>
          <div className="menu-item">
            {menuItem.map((item, index) => {
              return (
                <NavLink
                  to={item.path}
                  key={index}
                  className="nav-item"
                  style={({ isActive }) =>
                    isActive ? isActiveStyle : undefined
                  }
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>
      <div
        className="slide-menu"
        style={isClosed ? { height: "100vh" } : { height: "0px" }}
      >
        {" "}
        {menuItem.map((item, index) => {
          return (
            <NavLink
              to={item.path}
              key={index}
              className="nav-item"
              style={({ isActive }) => (isActive ? isActiveStyle : undefined)}
              onClick={() => {
                setIsClosed(false);
              }}
            >
              {item.name}
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default NavigationBar;
