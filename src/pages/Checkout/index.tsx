import { FormAddress } from "./components/FormAddress";
import { FormPayment } from "./components/FormPayment";
import { TitleCart } from "./styles";

export function Checkout() {
  return (
    <div>
      <TitleCart>Complete seu pedido</TitleCart>
      <FormAddress />
      <FormPayment />
    </div>
  );
}
