import { useContext } from "react";
import { ProductsSelectedContext } from "../../../../contexts/ProductsContext";
import { CountQuantity } from "../../../Home/components/CountQuantity";
import { RemoveButton } from "./RemoveButton";
import {
  ContentCartProducts,
  ContentMainCart,
  ContentProductCart,
  ContentSelectedAndRemoveProduct,
  MainCart,
  ProductPriceCart,
  ProductsValuesCart,
  ProductTitleCart,
} from "./styles";

export function Cart() {
  const { products } = useContext(ProductsSelectedContext);
  console.log("🚀 ~ file: index.tsx:6 ~ Cart ~ products", products);

  const valueDelivery = 3.5;

  return (
    <MainCart>
      <ContentCartProducts>
        {products.map((product) => {
          return (
            <ContentMainCart>
              <ContentProductCart>
                <img src={product.image} />
                <div>
                  <ProductTitleCart>{product.name}</ProductTitleCart>
                  <ContentSelectedAndRemoveProduct>
                    <CountQuantity />
                    <RemoveButton />
                  </ContentSelectedAndRemoveProduct>
                </div>
              </ContentProductCart>
              <ProductPriceCart>R${product.price}</ProductPriceCart>
            </ContentMainCart>
          );
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
