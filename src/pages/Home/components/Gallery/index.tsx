import { ShoppingCartSimple } from "phosphor-react";
import { useState } from "react";
import { CountQuantity } from "../CountQuantity";
import { products, Products } from "./products";
import {
  ContainerFlags,
  ContainerSelect,
  DescriptionProduct,
  Flag,
  GalleryContainer,
  MiniCartShelf,
  NameProduct,
  ShelfContainer,
  TitleGallery,
} from "./styles";

export function Gallery() {
  const [productsSelecteds, setProductsSelecteds] = useState({});
  console.log(
    "🚀 ~ file: index.tsx:19 ~ Gallery ~ productsSelecteds",
    productsSelecteds
  );

  function handleSelectedProduct(product: Products) {
    setProductsSelecteds({
      product,
    });
  }

  return (
    <>
      <TitleGallery>Nossos cafés</TitleGallery>
      <GalleryContainer>
        {products.map((product) => {
          return (
            <ShelfContainer key={product.id}>
              <img src={product.image} />
              <ContainerFlags>
                {product.flags.map((flag, index) => {
                  return <Flag key={index}>{flag}</Flag>;
                })}
              </ContainerFlags>
              <NameProduct>{product.name}</NameProduct>
              <DescriptionProduct>{product.description}</DescriptionProduct>
              <ContainerSelect>
                <strong>
                  <span>R$</span>
                  {product.price}
                </strong>
                <div>
                  <CountQuantity />
                  <MiniCartShelf
                    onClick={() => {
                      handleSelectedProduct(product);
                    }}
                  >
                    <ShoppingCartSimple size={25} color="#fff" weight="fill" />
                  </MiniCartShelf>
                </div>
              </ContainerSelect>
            </ShelfContainer>
          );
        })}
      </GalleryContainer>
    </>
  );
}
