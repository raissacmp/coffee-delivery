import styled from "styled-components";

export const ShelfContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 16rem;
  max-height: 19.375rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;

  img {
    margin-top: -2rem;
  }
`;

export const GalleryContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
  margin-top: 1.25rem;
`;

export const TitleGallery = styled.h1`
  font-family: "Baloo 2";
  padding: 2rem 0;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const ContainerFlags = styled.div`
  margin: 0.75rem 1rem;
`;

export const Flag = styled.span`
  border-radius: 6.25rem;
  font-size: 0.625rem;
  padding: 0.375rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0 0.25rem;
  color: ${(props) => props.theme["yellow-dark"]};
  background: ${(props) => props.theme["yellow-light"]};
`;

export const NameProduct = styled.h1`
  font-family: "Baloo 2";
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 1.25rem;
`;

export const DescriptionProduct = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme["base-label"]};
  text-align: center;
  padding: 0.5rem 1.25rem;
`;

export const ContainerSelect = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 2.0625rem;
  margin-bottom: 1.25rem;

  strong {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-text"]};
  }

  span {
    font-family: Roboto;
    font-weight: normal;
    font-size: 0.875rem;
    margin-right: 0.3125rem;
  }
  div {
    display: flex;
    gap: 0.5rem;
  }
`;

export const MiniCartShelf = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  background: ${(props) => props.theme["purple-dark"]};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
`;
