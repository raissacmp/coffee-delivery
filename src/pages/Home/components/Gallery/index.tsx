import { ShoppingCartSimple } from "phosphor-react";
import { CountQuantity } from "../CountQuantity";
import { products } from "./products";
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
                  <MiniCartShelf>
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
