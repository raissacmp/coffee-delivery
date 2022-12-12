import { useState } from "react";
import { CountQuantity } from "../../../../Home/components/CountQuantity";
import { RemoveButton } from "../RemoveButton";
import {
  ContentMainCart,
  ContentProductCart,
  ContentSelectedAndRemoveProduct,
  ProductPriceCart,
  ProductTitleCart,
} from "./styles";

export function ProductSelecteds({ product }: any) {
  const [count, setCount] = useState(product.quantity);

  const changeQuantityCart = (quantity: number) => {
    setCount(quantity);
  };

  const handleRemoveProduct = () => {
    setCount(0);
  };

  return (
    <>
      {count > 0 && (
        <ContentMainCart>
          <ContentProductCart>
            <img src={product.image} />
            <div>
              <ProductTitleCart>{product.name}</ProductTitleCart>
              <ContentSelectedAndRemoveProduct>
                <CountQuantity
                  changeQuantity={changeQuantityCart}
                  count={count}
                />
                <RemoveButton handleRemoveProduct={handleRemoveProduct} />
              </ContentSelectedAndRemoveProduct>
            </div>
          </ContentProductCart>
          <ProductPriceCart>R${product.price}</ProductPriceCart>
        </ContentMainCart>
      )}
    </>
  );
}
