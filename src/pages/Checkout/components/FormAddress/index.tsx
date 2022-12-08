import { MapPinLine } from "phosphor-react";
import {
  ContainerTitleForm,
  FormAddressContainer,
  InputFormCepAndNumberAndDistrict,
  InputFormStreet,
  InputFormComplement,
  InputFormCity,
  InputFormUf,
  MainFormAdress,
  FormAddressLines,
} from "./styles";

export function FormAddress() {
  return (
    <MainFormAdress>
      <ContainerTitleForm>
        <MapPinLine size={20} color="#c47f17" />
        <div>
          <p>Endereço de Entrega</p>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </ContainerTitleForm>
      <FormAddressContainer action="">
        <InputFormCepAndNumberAndDistrict
          type="text"
          placeholder="CEP"
          required
        />
        <InputFormStreet type="text" placeholder="Rua" required />
        <FormAddressLines>
          <InputFormCepAndNumberAndDistrict
            type="number"
            placeholder="Número"
            required
          />
          <InputFormComplement type="text" placeholder="Complemento" />
        </FormAddressLines>
        <FormAddressLines>
          <InputFormCepAndNumberAndDistrict
            type="text"
            placeholder="Bairro"
            required
          />
          <InputFormCity type="text" placeholder="Cidade" required />
          <InputFormUf type="text" placeholder="UF" required />
        </FormAddressLines>
      </FormAddressContainer>
    </MainFormAdress>
  );
}
