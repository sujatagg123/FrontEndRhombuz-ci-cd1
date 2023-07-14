import styled from 'styled-components';

export const MainWrp = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.625rem;
  border: 1px solid #f3f4f8;
  background: #fff;
  padding-left: 2.09rem;
  padding-top: 1.17rem;
`;

export const BottomWrp = styled.div`
  padding-top: 2.71rem;
  height: calc(100% - 3.5rem);
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
