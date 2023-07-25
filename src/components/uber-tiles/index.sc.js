import styled from 'styled-components';

export const Tile = styled.div`
  box-sizing: border-box;
  background: #ffffff;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  width: 100%;
`;

export const TileTitle = styled.div`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.text};
  font-size: 0.7rem;
  font-weight: 700;
  line-height: 1.125rem;
  letter-spacing: -0.016rem;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  height: 45%;
`;

export const TileDataWrp = styled.div`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-size: 1.375rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #000000;
  font-weight: 600;
  line-height: 2rem;
  letter-spacing: -0.028rem;
  gap: 0.2rem;
  width: 100%;
`;

export const TileData = styled.p`
  color: #000;
  font-size: 1.375rem;
  font-weight: 600;
  line-height: 2rem;
  letter-spacing: -0.028rem;
  margin: 0;
`;

export const Change = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem;
  gap: 0.625rem;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 0.813rem;
  color: ${(props) => (props.isIncreased ? '#00B929' : '#FF2525')};
  font-size: 0.813rem;
  line-height: 1rem;
  letter-spacing: -0.016rem;
  margin: 0;
`;

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  z-index: 0;
`;
