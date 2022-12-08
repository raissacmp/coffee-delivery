import { useContext } from "react";
import { ProductsSelectedContext } from "../../../../contexts/ProductsContext";
import { CountQuantity } from "../../../Home/components/CountQuantity";
import { RemoveButton } from "./RemoveButton";
import {
  ContentMainCart,
  ContentProductCart,
  ContentSelectedAndRemoveProduct,
  MainCart,
  ProductPriceCart,
  ProductTitleCart,
} from "./styles";

export function Cart() {
  const { products } = useContext(ProductsSelectedContext);
  console.log("🚀 ~ file: index.tsx:6 ~ Cart ~ products", products);
  return (
    <MainCart>
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
    </MainCart>
  );
}
