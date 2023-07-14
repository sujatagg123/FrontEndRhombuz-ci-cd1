import styled from 'styled-components';

export const ToolBarWrp = styled.div`
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid var(--others-light, #c3c7d9);
  background: #fff;
  /* Dropshadow_1 */
  box-shadow: 0px 8px 8px 0px rgba(153, 153, 153, 0.3);
  width: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  padding: 1rem 0.625rem;
`;

export const RotateWrp = styled.div`
  transform: rotateX(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconWrp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
