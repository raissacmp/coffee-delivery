import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Products } from "../pages/Home/components/Gallery/products";
import { productsReducer } from "../reducers/products/reducer";
import {
  ActionTypes,
  addNewProductsSelectedsAction,
} from "../reducers/products/actions";
import { produce } from "immer";

export interface CreateProductsSelectedData {
  price: number;
  image?: string;
  name: string;
}

interface ProductsSelectedContextType {
  createProductsSelecteds: (product: CreateProductsSelectedData) => void;
}

interface ProductsSelecteContextProviderProps {
  children: ReactNode;
}

export const ProductsSelectedContext = createContext(
  {} as ProductsSelectedContextType
);

interface ProductsState {
  products: Products[];
}

export function ProductsSelectedContextProvider({
  children,
}: ProductsSelecteContextProviderProps) {
  const [productsState, dispatch] = useReducer(
    (state: ProductsState, action: any) => {
      if (action.type === ActionTypes.ADD_NEW_PRODUCTS) {
        return produce(state, (draft) => {
          draft.products.push(action.payload.newProductsSelected);
        });
      }
      return state;
    },
    { products: [] }
  );

  function createProductsSelecteds(product: CreateProductsSelectedData) {
    const newProductsSelected: CreateProductsSelectedData = {
      price: product.price,
      image: product.image,
      name: product.name,
    };

    dispatch(addNewProductsSelectedsAction(newProductsSelected));
  }

  return (
    <ProductsSelectedContext.Provider
      value={{
        createProductsSelecteds,
      }}
    >
      {children}
    </ProductsSelectedContext.Provider>
  );
}
