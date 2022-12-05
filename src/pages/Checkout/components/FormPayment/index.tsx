import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import {
  ButtonPayment,
  ContainerTitlePayment,
  MainFormPayment,
  ContainerButtonsPayment,
} from "./style";

export function FormPayment() {
  return (
    <MainFormPayment>
      <ContainerTitlePayment>
        <div>
          <CurrencyDollar size={20} color="#8047F8" />
        </div>
        <div>
          <p>Pagamento</p>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </ContainerTitlePayment>
      <ContainerButtonsPayment>
        <ButtonPayment>
          <CreditCard size={15} color="#8047F8" /> Cartão de crédito
        </ButtonPayment>
        <ButtonPayment>
          <Bank size={15} color="#8047F8" />
          Cartão de débito
        </ButtonPayment>
        <ButtonPayment>
          <Money size={15} color="#8047F8" />
          Dinheiro
        </ButtonPayment>
      </ContainerButtonsPayment>
    </MainFormPayment>
  );
}
