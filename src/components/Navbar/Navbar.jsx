import "../Navbar/navbar.css";
import { NavLink } from "react-router-dom";

import logo from "../../../public/img/logo.png";

export const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="ul">
          <NavLink className="li" to="/">
            Home
          </NavLink>
          <NavLink to="/contact">Contactanos</NavLink>
          <NavLink to="/portfolio">Portafolio</NavLink>
          <NavLink to="/propositos">Proposito</NavLink>
          <NavLink to="/shop"> Tienda</NavLink>
        </ul>
        <img src={logo} alt="logo" className="logo" />
      </nav>
    </>
  );
};
