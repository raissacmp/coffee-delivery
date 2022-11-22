import { useState } from "react";
import {
  ContainerCountQuantity,
  MinusQuantitySelect,
  PlusQuantitySelect,
} from "./styles";

export function CountQuantity() {
  const [count, setCount] = useState(1);
  return (
    <ContainerCountQuantity>
      <MinusQuantitySelect
        onClick={() => count > 0 && setCount((count) => count - 1)}
      >
        -
      </MinusQuantitySelect>
      {count}
      <PlusQuantitySelect onClick={() => setCount((count) => count + 1)}>
        +
      </PlusQuantitySelect>
    </ContainerCountQuantity>
  );
}
