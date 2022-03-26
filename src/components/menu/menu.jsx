import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/home.png";
 
 function Menu() {
  return (
    <header>
      <Link className="style" to="/">
        <img className="logo" src={logo} alt="logo-home" />
      </Link>

      <div class="boton-menu">
          <input id="desplegar" type="checkbox" class="custom-checkbox" />
        <label for="desplegar" class="label-menu">
          <div class="mostrar-menu">
            <div class="linea linea-top"></div>
            <div class="linea linea-med"></div>
            <div class="linea linea-low"></div>
          </div>
        </label>
        <div class="menu-desplazable" id="menuList">
          <ul>
            <li class="menu-texto style">
              <Link className="style" to="/">
                HOME
              </Link>
            </li>
            <li class="menu-texto style">
              <Link className="style" to="/">
                GET COINS
              </Link>
            </li>
            <li class="menu-texto">
                <a class="style" href="https://www.google.com.ar/">
                EXIT</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Menu;
