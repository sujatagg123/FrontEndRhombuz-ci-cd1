import styled from 'styled-components';

export const Tile = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem 0.75rem;
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
  flex-direction: column;
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
  color: #5c5e60;
  font-family: Inter;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1rem; /* 106.667% */
  letter-spacing: -0.01875rem;
  padding: 0;
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

export const TypeWrp = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  /* border: 2px solid red; */
`;

export const ArticleTypeWrp = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  border-radius: 1rem;
  background: #d3f3dd;
  background-color: ${(props) => {
    if (props.sentimentType === 'positive') {
      return '#D3F3DD';
    } else if (props.sentimentType === 'negative') {
      return '#FDD7D7';
    } else {
      return '#ECEFF3;';
    }
  }};
  padding: 0.25rem 0.5rem 0.25rem 0.375rem;
`;

export const TypeText = styled.p`
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem; /* 123.077% */
  letter-spacing: -0.01625rem;
  margin: 0;
  color: ${(props) => {
    if (props.sentimentType === 'positive') {
      return '#31A054';
    } else if (props.sentimentType === 'negative') {
      return '#EB3D3D';
    } else {
      return '#5C5E60;';
    }
  }};
  &::first-letter {
    text-transform: capitalize;
  }
`;
