import styled from 'styled-components';

export const Tile = styled.div`
  display: flex;
  width: 17rem;
  padding: 0.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  border-radius: 0.5rem;
  border: 1px solid #eceff3;
`;

export const TileTitle = styled.div`
  margin: 0;
  padding: 0;
  color: #de1d83;

  /* Subtitle2 */
  font-family: Inter;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.125rem; /* 120% */
  letter-spacing: -0.01875rem;
  text-overflow: ellipsis;
`;

export const TileDataWrp = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const TileData = styled.p`
  color: #000;
  font-size: 1.375rem;
  font-weight: 600;
  line-height: 2rem;
  letter-spacing: -0.028rem;
  padding: 0;
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
