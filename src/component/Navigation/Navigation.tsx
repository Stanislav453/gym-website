import "./Navigation.scss";
import { nav_title, nav_icon, nav_logo } from "./Data";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation-logo">
        <img src={nav_logo} alt="logo" width="75px" />
      </div>
      <ul className="navigation-ul">
        {nav_title.map((item, key) => {
          const { title, link } = item;
          return (
            <li key={key} className="navigation-li">
              <a className="navigation-a" href={link}>
                {title}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="navigation-ul_icon">
        {nav_icon.map((item, key) => {
          const { icon, link } = item;
          return (
            <li key={key}>
              <a href={link} target="_blank">
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
