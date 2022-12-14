import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ProductsSelectedContext } from "../../../../contexts/ProductsContext";
import { ProductSelecteds } from "./ProductsSelecteds";
import {
  ConfirmatedButton,
  ContentCartProducts,
  ContentSummaryCart,
  MainCart,
  ProductsValuesCart,
} from "./styles";

export function Cart() {
  const { products, dataForm } = useContext(ProductsSelectedContext);
  const [dataFormEmpty, setDataFormEmpty] = useState(true);

  //verificar se o objeto está vazio

  useEffect(() => {
    if (Object.keys(dataForm).length === 0) {
      setDataFormEmpty(true);
    }

    if (Object.keys(dataForm).length > 0) {
      setDataFormEmpty(false);
    }
  }, [dataForm]);

  //

  const valueDelivery = 3.5;

  const priceAmount = products.reduce((acumulador, valorAtual) => {
    const totalItem = valorAtual?.quantity * valorAtual.price;

    return acumulador + totalItem;
  }, 0);

  // validation form

  function handleAlertForm() {
    if (dataFormEmpty === true) {
      alert("Preencha os dados de entrega para seguir! 😊");
    }
  }

  return (
    <MainCart>
      <ContentCartProducts>
        {products.map((product) => {
          return <ProductSelecteds product={product} />;
        })}
      </ContentCartProducts>
      <ContentSummaryCart>
        <ProductsValuesCart>
          <span>Total de itens</span>
          <span>R$</span>
        </ProductsValuesCart>
        <ProductsValuesCart>
          <span>Entrega</span>
          <span>R$ {valueDelivery}</span>
        </ProductsValuesCart>
        <ProductsValuesCart>
          <strong>Total</strong>
          <strong>R${priceAmount}</strong>
        </ProductsValuesCart>
        <NavLink
          to={`${dataFormEmpty === true ? "/checkout" : "/order-placed"}`}
          title="Order Placed"
        >
          <ConfirmatedButton onClick={handleAlertForm}>
            Confirmar Pedido
          </ConfirmatedButton>
        </NavLink>
      </ContentSummaryCart>
    </MainCart>
  );
}
