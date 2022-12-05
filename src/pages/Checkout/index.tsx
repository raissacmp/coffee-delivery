import { FormAddress } from "./components/FormAddress";
import { TitleCart } from "./styles";

export function Checkout() {
  return (
    <div>
      <TitleCart>Complete seu pedido</TitleCart>
      <FormAddress />
    </div>
  );
}
