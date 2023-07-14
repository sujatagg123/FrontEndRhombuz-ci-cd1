import styled from 'styled-components';

export const Dropdwnwpr = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  padding: 1rem 1.5rem 1.5rem;
  box-sizing: border-box;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0px 10px 10px 0px #c3c7d9;
  background: ${({ theme }) => theme.secondaryBackground};
  border-radius: 0px 0px 10px 10px;
  transform: translate(0, 3rem);
  cursor: auto;
  z-index: 1;
`;

export const Itemwpr = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.secondaryText};
  font-size: 0.94rem;
`;
