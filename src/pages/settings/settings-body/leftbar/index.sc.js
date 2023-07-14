import styled from 'styled-components';

export const LeftbarWrp = styled.div`
  width: 15rem;
  height: 100%;
  border-radius: 0.625rem;
  border: 1px solid #f3f4f8;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.secondaryText};
  padding: 1.6rem 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.25rem;
`;
export const LeftbarItem = styled.div`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1rem;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.64px;
  cursor: pointer;
  transition: all 400ms ease-in-out;
  &.active {
    color: ${({ theme }) => theme.primary};
  }
`;
