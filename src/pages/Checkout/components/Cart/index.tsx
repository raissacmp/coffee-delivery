import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ProductsSelectedContext } from "../../../../contexts/ProductsContext";
import { ProductSelecteds } from "./ProductsSelecteds";
import {
  ConfirmatedButton,
  ContentCartProducts,
  ContentSummaryCart,
  MainCart,
  ProductsValuesCart,
} from "./styles";

export function Cart() {
  const { products } = useContext(ProductsSelectedContext);

  const valueDelivery = 3.5;

  const priceAmount = products.reduce((acumulador, valorAtual) => {
    const totalItem = valorAtual?.quantity * valorAtual.price;

    return acumulador + totalItem;
  }, 0);

  return (
    <MainCart>
      <ContentCartProducts>
        {products.map((product) => {
          return <ProductSelecteds product={product} />;
        })}
      </ContentCartProducts>
      <ContentSummaryCart>
        <ProductsValuesCart>
          <span>Total de itens</span>
          <span>R$</span>
        </ProductsValuesCart>
        <ProductsValuesCart>
          <span>Entrega</span>
          <span>R$ {valueDelivery}</span>
        </ProductsValuesCart>
        <ProductsValuesCart>
          <strong>Total</strong>
          <strong>R${priceAmount}</strong>
        </ProductsValuesCart>
        <NavLink to="/order-placed" title="Order Placed">
          <ConfirmatedButton>Confirmar Pedido</ConfirmatedButton>
        </NavLink>
      </ContentSummaryCart>
    </MainCart>
  );
}
