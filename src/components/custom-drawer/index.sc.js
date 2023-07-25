import styled from 'styled-components';

export const DrawerContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.75rem;
  max-height: 90vh;
`;

export const Headerwrap = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.85rem;
  background: #eceff5;
  height: 3.5rem;
  position: relative;
  border-radius: 0.75rem 0.75rem 0 0;
`;

export const Headerleftwpr = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  & > img {
    width: 1.5rem;
    height: 1.5rem;
    align-items: center;
  }
`;

export const Heaerlblwrp = styled.div`
  font-weight: 600;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.secondaryText};
`;

export const MainBoxwpr = styled.div`
  height: 31.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.75rem;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FooterBoxwpr = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.85rem 1rem;
  margin-top: ${({ mt }) => `${mt}rem`};
`;

export const LeftfootBoxwpr = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: flex-end;
  color: #999999;
  & span {
    font-weight: 600;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.secondaryText};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const ButtonBoxwpr = styled.button`
  display: flex;
  padding: 0.625rem 0.93rem;
  background: ${(props) => props.background};
  border-radius: 10px;
  border: none;
  margin: 0;
  height: 2.25rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 0.81rem;
  color: ${({ fontColor }) => fontColor};
  cursor: pointer;
  &.btn {
    border-radius: 0.5rem;
  }
  &.cancel {
    border: 1px solid #535770;
  }
`;

export const Iconwpr = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  & > img {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const PoptabTitle = styled.div`
  font-weight: 600;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.6rem 0.25rem;
`;

export const TabsBox = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const HeadingBoxwpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  & > span {
    font-weight: 400;
    font-size: 0.7rem;
    color: #818181;
  }
  & .yshj {
    font-weight: 600;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.secondaryText};
    & > span {
      font-weight: 400;
      font-size: 0.7rem;
      color: #818181;
      margin-left: 3px;
    }
  }
`;

export const Headingwpr = styled.div`
  display: flex;
  background: rgba(195, 200, 220, 0.2);
  font-weight: 600;
  font-size: 1rem;
  width: 100%;
  padding: 0.7rem 0.75rem;
  color: ${({ theme }) => theme.secondaryText};
  border-radius: 5px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.5rem;
`;

export const ItemLabelwpr = styled.div`
  font-weight: 600;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.secondaryText};
`;

export const ItemDeswpr = styled.div`
  font-weight: 400;
  font-size: 0.6rem;
  color: #999999;
`;

export const TransBtnbox = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: ${(props) => (props.isList ? '0.7rem' : '0.55rem')} 1rem;
  background: ${({ theme }) => theme.secondaryBackground};
  border: 1px solid ${({ theme }) => theme.background};
  border-radius: 10px;
  bottom: ${(props) => (props.isList ? '0.1rem' : '-0.5rem')};
  right: 0;
  transform: translate(-2rem, calc(100% + 1rem));
  cursor: pointer;
  z-index: 2;
`;

export const TransBtntxt = styled.div`
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.secondaryText};
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
`;

export const ListBoxwpr = styled.div`
  width: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SortInfotxt = styled.div`
  font-size: 0.7rem;
  font-weight: 400;
  color: ${({ theme }) => theme.secondaryText};
  margin: 0.25rem;
`;

export const ListContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border: 1px solid #c3c7d9;
  width: 100%;
  border-radius: 0.62rem;
`;

export const ListLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ListDiscwpr = styled.div`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-size: 0.7rem;
  margin-right: 0.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const WriteIconwpr = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
`;
