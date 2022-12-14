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
import { useContext } from "react";
import { ProductsSelectedContext } from "../../contexts/ProductsContext";

export function Header() {
  const { products, dataForm } = useContext(ProductsSelectedContext);
  console.log("🚀 ~ file: index.tsx:17 ~ Header ~ dataForm", dataForm);

  const quantityMIniCart = products.reduce((acumulador, valorAtual) => {
    const totalQuantityMiniCart = valorAtual.quantity;

    return acumulador + totalQuantityMiniCart;
  }, 0);

  return (
    <HeaderContainer>
      <a href="/">
        <img src={logoCoffee} alt="" />
      </a>
      <HeaderContent>
        <HeaderLocationContent>
          <img src={MapPin} alt="" />
          {dataForm?.city?.length && dataForm?.uf?.length ? (
            <span>
              {dataForm.city}, {dataForm.uf}
            </span>
          ) : (
            <span>São Paulo, SP</span>
          )}
        </HeaderLocationContent>
        <HeaderMiniCart>
          <NavLink to="/checkout" title="Cart">
            <img src={MiniCart} alt="" />
            <span>{quantityMIniCart}</span>
          </NavLink>
        </HeaderMiniCart>
      </HeaderContent>
    </HeaderContainer>
  );
}
