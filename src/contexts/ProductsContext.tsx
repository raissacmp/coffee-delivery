import { createContext, ReactNode, useReducer } from "react";
import { Products } from "../pages/Home/components/Gallery/products";
import { productsReducer } from "../reducers/products/reducer";
import { addNewProductsSelectedsAction } from "../reducers/products/actions";

export interface CreateProductsSelectedData {
  price: number;
  image?: string;
  name: string;
  quantity: number;
}

interface ProductsSelectedContextType {
  createProductsSelecteds: (
    product: CreateProductsSelectedData,
    count: number
  ) => void;
  products: Products[];
}

interface ProductsSelecteContextProviderProps {
  children: ReactNode;
}

export const ProductsSelectedContext = createContext(
  {} as ProductsSelectedContextType
);

export function ProductsSelectedContextProvider({
  children,
}: ProductsSelecteContextProviderProps) {
  const [productsState, dispatch] = useReducer(productsReducer, {
    products: [],
  });

  const { products } = productsState;

  function createProductsSelecteds(
    product: CreateProductsSelectedData,
    count: number
  ) {
    const newProductsSelected: CreateProductsSelectedData = {
      price: product.price,
      image: product.image,
      name: product.name,
      quantity: count,
    };

    dispatch(addNewProductsSelectedsAction(newProductsSelected));
  }

  return (
    <ProductsSelectedContext.Provider
      value={{
        createProductsSelecteds,
        products,
      }}
    >
      {children}
    </ProductsSelectedContext.Provider>
  );
}
