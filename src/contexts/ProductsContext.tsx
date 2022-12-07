import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Products } from "../pages/Home/components/Gallery/products";
import { productsReducer } from "../reducers/products/reducer";
import { addNewProductsSelectedsAction } from "../reducers/products/actions";

export interface CreateProductsSelectedData {
  price: number;
  image?: string;
  name: string;
}

interface ProductsSelectedContextType {
  products: Products[];
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
      if (action.type === "ADD_NEW_PRODUCTS") {
        return {
          ...state,
          products: [...state.products, action.payload.newProduct],
        };
      }
      console.log("🚀 ~ file: ProductsContext.tsx:48 ~ state", state);
      return state;
    },
    { products: [] }
  );

  const { products } = productsState;
  console.log("🚀 ~ file: ProductsContext.tsx:53 ~ products", products);

  // useEffect(() => {
  //   const stateJSON = JSON.stringify(cyclesState);

  //   localStorage.setItem("@pomodoro-timer:cycles-state-1.0.0", stateJSON); // padrão de nome: nome da aplicação + nome da informação + versão (pra prod)
  // }, [cyclesState]);

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
        products,
        createProductsSelecteds,
      }}
    >
      {children}
    </ProductsSelectedContext.Provider>
  );
}
