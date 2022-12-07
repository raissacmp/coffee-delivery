import { produce } from "immer";

import { Products } from "../../pages/Home/components/Gallery/products";
import { ActionTypes } from "./actions";

interface ProductsState {
  products: Products[];
}

export function productsReducer(state: ProductsState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCTS: {
      return produce(state, (draft) => {
        draft.products.push(action.payload.newProductsSelected);
      });
    }
  }
}
