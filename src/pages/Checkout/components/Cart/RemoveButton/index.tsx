import { Trash } from "phosphor-react";
import { ContainerButtonRemove } from "./styles";

export function RemoveButton() {
  return (
    <ContainerButtonRemove>
      <Trash size={20} color="#8047F8" /> <p>REMOVER</p>
    </ContainerButtonRemove>
  );
}
