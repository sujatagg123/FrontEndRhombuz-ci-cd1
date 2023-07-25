import styled from 'styled-components';

export const themes = [
  {
    key: 1,
    label: 'Theme 1',
    positive: '40%',
    negative: '60%',
  },
  {
    key: 2,
    label: 'Theme 2',
    positive: '20%',
    negative: '80%',
  },
  {
    key: 3,
    label: 'Theme 3',
    positive: '80%',
    negative: '20%',
  },
  {
    key: 4,
    label: 'Theme 4',
    positive: '75%',
    negative: '25%',
  },
  {
    key: 5,
    label: 'Theme 5',
    positive: '32%',
    negative: '68%',
  },
];

export const Titlewrpr = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #000000;
`;

export const GraphBoxwrpr = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0rem 1.25rem;
  background: rgb(255, 255, 255);
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  height: 90%;
  transition: 0.3 ease-in-out;
`;

export const BarContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1.75rem;
`;

export const LabelWrapper = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 0.68rem;
  color: #585858;
  width: 20%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BarBoxwrpe = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 80%;
`;

export const Barwrpr = styled.div`
  display: flex;
  justify-content: ${({ first, last }) =>
    first ? 'flex-end' : last ? 'flex-start' : 'center'};
  width: calc(50% - 0.25rem);
`;

export const Bar = styled.div`
  width: ${(props) => props.width};
  height: 15px;
  background-color: ${(props) => props.color};
  transition: 0.2s ease-in-out;
`;

export const Infowrpr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 1rem;
`;

export const Justwpr = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const Square = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  background: ${(props) => props.background};
`;

export const Textwpr = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  color: #585858;
  display: flex;
  align-items: center;
`;

// below is for Sentiment style
//
export const Boxwrpr = styled.div`
  box-sizing: border-box;
  width: 750px;
  background: #ffffff;
  box-shadow: 0px 8px 8px rgba(153, 153, 153, 0.12);
  border-radius: 15px;
  padding: 2rem;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  & > svg {
    cursor: pointer;
  }
`;

export const Deswrpr = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #000000;
`;
