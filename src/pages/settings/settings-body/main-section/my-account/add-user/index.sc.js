import styled from 'styled-components';

export const DrawerContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.75rem;
  max-height: 90vh;
  position: relative;
`;
export const Headerwrap = styled.div`
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
export const Heading = styled.div`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.25rem;
  letter-spacing: -0.4px;
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
export const MainBoxwpr = styled.div`
  height: 31rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.75rem;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const FormFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;
export const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;
export const SearchInputsWrp = styled.div`
  width: 100%;
  height: 2.8rem;
  display: flex;
  align-items: center;
`;

export const SearchInputs = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  padding: 0 0.8rem;
  border-radius: 0.3rem;
  border: 1px solid #d1d5dc;
  background-color: ${({ theme }) => theme.secondaryBackground};
  color: ${({ theme }) => theme.secondaryText};
  font-weight: 500;

  ::placeholder {
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 1rem;
    letter-spacing: -0.01625rem;
  }

  :focus {
    outline: none;
  }
`;
export const AccessLevelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.68rem;
`;
export const SectionTitle = styled.div`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1rem;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.32px;
`;
export const AccessListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const AccessListItem = styled.div`
  width: 100%;
  height: 5.6rem;
  padding: 1.18rem 1.43rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  border-radius: 0.625rem;
  border: 1px solid #999;
  background-color: ${({ theme }) => theme.secondaryBackground};
  color: ${({ theme }) => theme.secondaryText};
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &.selected {
    border: 1px solid ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.logoText};
  }
`;
export const AccessTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: normal;
`;
export const AccessDescription = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
`;
export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 5rem;
  background-color: ${({ theme }) => theme.secondaryBackground};
  filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.2));
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 1.85rem;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
