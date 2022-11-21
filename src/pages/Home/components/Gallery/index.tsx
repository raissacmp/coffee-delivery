import { products } from "./products";
import {
  ContainerFlags,
  DescriptionProduct,
  Flag,
  GalleryContainer,
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
              <div>
                <strong>{product.price}</strong>
              </div>
            </ShelfContainer>
          );
        })}
      </GalleryContainer>
    </>
  );
}
