import styled from 'styled-components';

export const NewsLetterWrp = styled.div`
  width: 55vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.25rem;
`;

export const NewsLetterRow = styled.div`
  position: relative;
  display: ${(props) => (props.split ? 'grid' : 'flex')};
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 0rem 1rem;
  &:hover .tool-bar-wrp {
    visibility: visible;
  }
`;
export const NewsLetterComponentWrp = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const AddRowWrp = styled.div`
  position: relative;
  width: 100%;
  height: 16.625rem;
  margin-bottom: 4rem;
`;

export const ToolBarWrp = styled.div`
  visibility: hidden;
  position: absolute;
  top: 0px;
  right: -2.625rem;
  width: 2.5rem;
  height: 8rem;
  display: flex;
  justify-content: flex-end;
`;
