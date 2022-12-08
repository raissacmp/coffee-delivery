import styled from "styled-components";

export const MainCart = styled.main`
  width: 28rem;
  height: 30.125rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 0.375rem 2.75rem;
  margin: 0.9375rem 0;

  img {
    max-width: 4rem;
    max-height: 4rem;
  }
`;

export const ContentCartProducts = styled.div`
  max-height: 18.75rem;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    margin: 35px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme["base-label"]};
    border-radius: 20px;
  }
`;

export const ProductsValuesCart = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 2.5rem;

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
  }

  strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
