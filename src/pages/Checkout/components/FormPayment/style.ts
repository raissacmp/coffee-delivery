import styled from "styled-components";

export const MainFormPayment = styled.main`
  background: ${(props) => props.theme["base-card"]};
  max-width: 40rem;
  padding: 2.5rem;
  height: 12.9375rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0.9375rem 0;
  border-radius: 6px;
`;

export const ContainerTitlePayment = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  p {
    color: ${(props) => props.theme["base-subtitle"]};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const ButtonPayment = styled.button`
  background: #e6e5e5;
  border-radius: 6px;
  border: none;
  width: 178.67px;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #574f4d;
  text-transform: uppercase;
  cursor: pointer;

  svg {
    margin-right: 13px;
  }
`;

export const ContainerButtonsPayment = styled.div`
  display: flex;
  justify-content: space-between;
`;
