import { CreateProductsSelectedData } from "../../contexts/ProductsContext";

export enum ActionTypes {
  ADD_NEW_PRODUCTS = "ADD_NEW_PRODUCTS",
}

export function addNewProductsSelectedsAction(
  newProductsSelected: CreateProductsSelectedData
) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCTS,
    payload: {
      newProductsSelected,
    },
  };
}
