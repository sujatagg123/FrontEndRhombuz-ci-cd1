import styled from 'styled-components';

export const MainWrp = styled.div`
  width: 100%;
  border-radius: 0.625rem;
  border: 1px solid #f3f4f8;
  background: #fff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.05);
  padding: 1.3rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

export const TopBarWrp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: lightblue;
  padding: 0.6875rem 0.9375rem;
  border-radius: 0.438rem;
  border: 1px solid var(--others-light, #c3c7d9);
  background: #fff;
`;

export const SearchBar = styled.input`
  border: none;
  width: 100%;
  ::placeholder {
    color: #555;
    font-size: 0.8125rem;
    font-family: Inter;
    font-weight: 600;
    line-height: 1rem;
    letter-spacing: -0.01625rem;
  }
  :focus {
    outline: none;
  }
`;

export const BottomBarWrp = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const SearchInputsWrp = styled.div`
  width: calc(100% / 5);
  height: 2.375rem;
  border-radius: 0.438rem;
  border: 1px solid var(--others-light, #c3c7d9);
  background: #fff;
  padding: 0.6875rem 0.9375rem 0.6875rem 0.9375rem;
  display: flex;
  align-items: center;
`;

export const SearchInputs = styled.input`
  border: none;
  width: 100%;

  ::placeholder {
    color: #555;
    font-size: 0.8125rem;
    font-family: Inter;
    font-weight: 600;
    line-height: 1rem;
    letter-spacing: -0.01625rem;
  }

  :focus {
    outline: none;
  }
`;
