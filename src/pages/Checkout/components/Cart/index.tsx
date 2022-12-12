import { useContext } from "react";
import { ProductsSelectedContext } from "../../../../contexts/ProductsContext";
import { ProductSelecteds } from "./ProductsSelecteds";
import { ContentCartProducts, MainCart, ProductsValuesCart } from "./styles";

export function Cart() {
  const { products } = useContext(ProductsSelectedContext);

  const valueDelivery = 3.5;

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
          <span>R$ </span>
        </ProductsValuesCart>
        <ProductsValuesCart>
          <strong>Total</strong>
          <strong>R${valueDelivery}</strong>
        </ProductsValuesCart>
      </div>
    </MainCart>
  );
}
