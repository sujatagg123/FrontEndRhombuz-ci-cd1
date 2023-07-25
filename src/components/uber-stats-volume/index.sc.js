import styled from 'styled-components';

export const MainWrp = styled.div`
  display: flex;
  justify-content: center;
  background: #fff;
  gap: 2rem;
  height: 100%;
`;

export const UberTilesWrp = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  /* border: 2px solid red; */
`;

export const TileWrp = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 2px solid green; */
  border-radius: 0.5rem;
  border: 1px solid #eceff3;
`;

export const UberTilesText = styled.p`
  color: #5c5e60;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem; /* 153.846% */
  letter-spacing: -0.01625rem;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;
