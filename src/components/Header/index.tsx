import {
  HeaderContainer,
  HeaderContent,
  HeaderLocationContent,
  HeaderMiniCart,
} from "./styles";
import { NavLink } from "react-router-dom";

import logoCoffee from "../../assets/logo-coffee.svg";
import MapPin from "../../assets/map-pin.svg";
import MiniCart from "../../assets/mini-cart.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="" />
      <HeaderContent>
        <HeaderLocationContent>
          <img src={MapPin} alt="" />
          <span>Atibaia, SP</span>
        </HeaderLocationContent>
        <HeaderMiniCart>
          <NavLink to="/cart" title="Cart">
            <img src={MiniCart} alt="" />
          </NavLink>
        </HeaderMiniCart>
      </HeaderContent>
    </HeaderContainer>
  );
}