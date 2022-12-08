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
  console.log("🚀 ~ file: index.tsx:21 ~ Gallery ~ count", count);

  const changeQuantityCart = (quantity: number) => {
    setCount(quantity);
  };

  console.log("🚀 ~ file: index.tsx:12 ~ ProductSelecteds ~ product", product);
  return (
    <ContentMainCart>
      <ContentProductCart>
        <img src={product.image} />
        <div>
          <ProductTitleCart>{product.name}</ProductTitleCart>
          <ContentSelectedAndRemoveProduct>
            <CountQuantity changeQuantity={changeQuantityCart} count={count} />
            <RemoveButton />
          </ContentSelectedAndRemoveProduct>
        </div>
      </ContentProductCart>
      <ProductPriceCart>R${product.price}</ProductPriceCart>
    </ContentMainCart>
  );
}
