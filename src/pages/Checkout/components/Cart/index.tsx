import { useContext, useState } from "react";
import { ProductsSelectedContext } from "../../../../contexts/ProductsContext";
import { ProductSelecteds } from "./ProductsSelecteds";
import { ContentCartProducts, MainCart, ProductsValuesCart } from "./styles";

export function Cart() {
  const { products } = useContext(ProductsSelectedContext);

  const valueDelivery = 3.5;

  const priceAmount = products.reduce((acumulador, valorAtual) => {
    console.log(
      "🚀 ~ file: index.tsx:15 ~ products.reduce ~ acumulador",
      acumulador
    );
    console.log("total do acumulador!", acumulador);
    console.log(
      "🚀 ~ file: index.tsx:17 ~ products.reduce ~ acumulador",
      acumulador
    );
    const totalItem = valorAtual?.quantity * valorAtual.price;
    console.log("total do item atual:", totalItem);

    return acumulador + totalItem;
  }, 0);

  return (
    <MainCart>
      <ContentCartProducts>
        {products.map((product) => {
          return <ProductSelecteds product={product} />;
        })}
      </ContentCartProducts>
      <div>
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
      </div>
    </MainCart>
  );
}
