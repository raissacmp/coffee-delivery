import { useContext } from "react";
import { ProductsSelectedContext } from "../../../../contexts/ProductsContext";
import { ContentMainCart, ContentProductCart, MainCart } from "./styles";

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
                <p>{product.name}</p>
                <div>
                  <span>selected</span>
                  <span>remover</span>
                </div>
              </div>
            </ContentProductCart>
            <div>{product.price}</div>
          </ContentMainCart>
        );
      })}
    </MainCart>
  );
}
