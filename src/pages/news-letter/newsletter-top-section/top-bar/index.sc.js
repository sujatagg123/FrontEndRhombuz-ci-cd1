import styled from 'styled-components';

export const TopBarWrp = styled.div`
  display: flex;
  padding: 1.25rem;
  align-items: center;
  gap: 0.625rem;
  justify-content: space-between;
  background: ${({ theme }) => theme.background};
`;

export const ArrowBtnDiv = styled.div``;

export const TitleText = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  font-family: Inter;
  font-size: 1.4375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem;
  letter-spacing: -0.02875rem;
  margin: 0;
  padding: 0;
`;

export const BtnWrp = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
`;
export const ButtonWpr = styled.div`
  display: flex;
  gap: 1.68rem;
  align-items: center;
`;

export const CrossButtonWrp = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background: #fff;
  transform: rotate(180deg);
`;
