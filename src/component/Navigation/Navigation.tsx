import "./Navigation.scss";
import React, { useState } from "react";
import { nav_title, nav_icon, nav_logo } from "./Data";
import { IoMenuSharp } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";

export const Navigation = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="navigation">
      <div className="navigation-logo-box">
        {menu ? (
          <IoIosCloseCircle
            className="mobile-menu"
            onClick={() => setMenu(!menu)}
          />
        ) : (
          <IoMenuSharp className="mobile-menu" onClick={() => setMenu(!menu)} />
        )}
        <a href="#">
          <img className="navigation-logo-box-img" src={nav_logo} alt="logo" />
        </a>
      </div>
      <ul
        className={menu ? "navigation-ul navigation-ul-show" : "navigation-ul"}
      >
        {nav_title.map((item, key) => {
          const { title, link } = item;
          return (
            <li key={key} className="navigation-li">
              <a
                className="navigation-a"
                href={link}
                onClick={() => setMenu(false)}
              >
                {title}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="navigation-ul-icon">
        {nav_icon.map((item, key) => {
          const { icon, link } = item;
          return (
            <li key={key}>
              <a className="navigation-ul-icon-a" href={link} target="_blank">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
