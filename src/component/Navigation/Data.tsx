import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "./img/adel_logo.svg";

//NAVIGATION_TITLES
export const nav_title = [
  {
    title: "domov",
    link: "#home",
  },
  {
    title: "o mne",
    link: "#about_me",
  },
  {
    title: "služby a spolupráca",
    link: "#services_and_cooperation",
  },
  {
    title: "fotogaléria",
    link: "#photo_gallery",
  },
  {
    title: "referencie",
    link: "#references",
  },
];

//NAVIGATION_ICONS
export const nav_icon = [
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/adelazavrsanova/",
  },
  {
    icon: <FaFacebook />,
    link: "https://www.facebook.com/search/top?q=adela%20zavr%C5%A1anov%C3%A1%20-%20fitness%26lifestyle%20coach",
  },
];

//NAVIGATION_LOGO
export const nav_logo = logo;
