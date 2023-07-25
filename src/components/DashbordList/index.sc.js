import styled from 'styled-components';

export const DashboardListwpr = styled.div`
  max-width: 24%;
  width: 21.5rem;
  height: fit-content;
  overflow: hidden;
  border-radius: 0px 0px 10px 10px;
  background: ${({ theme }) => theme.secondaryBackground};
  position: relative;
  height: calc(100% - 1rem);
  border-radius: 10px 10px 0px 0px;
`;

export const Dropdownfildwpr = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 3rem;
  cursor: pointer;
  align-items: center;
  position: relative;
  width: 100%;
  & > span {
    width: 100%;
    font-size: 0.94rem;
    font-weight: 400;
    color: ${({ theme }) => theme.text};
    margin-left: 0.25rem;
  }
  padding: 1rem 1.25rem;
  border: 1px solid #c3c7d9;
  border-width: 0 0 1px 0;
`;

export const ListBoxwpr = styled.div`
  height: calc(100% - 3rem);
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ItemComponentwpr = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  background: ${({ theme, active }) =>
    active ? 'rgba(103, 94, 242, 0.1)' : theme.background};
  padding: 1rem 1.25rem;
  border: 1px solid #c3c7d9;
  border-width: 0 0 1px 0;
  position: relative;
`;

export const TextBoxwpr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  & div {
    ${({ active }) => active && `color : ${({ theme }) => theme.secondaryText}`}
  }
`;

export const Titletxtwpr = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme, active }) =>
    active ? theme.primary : theme.secondaryText};
  display: flex;
  align-items: center;
`;

export const Labeltxtwpr = styled.div`
  font-size: 0.7rem;
  display: flex;
  font-weight: 600;
  color: ${({ theme, active }) =>
    active ? theme.primary : theme.secondaryText};
`;

export const Contentwpr = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

export const Typetxtwpr = styled.div`
  font-size: 0.7rem;
  font-weight: 400;
  color: ${({ theme, active }) =>
    active ? theme.primary : theme.secondaryText};
  display: flex;
  align-items: center;
  min-width: fit-content;
  margin-left: 0.25rem;
`;

export const BookIconwpr = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 0;
  padding: 0;
`;
