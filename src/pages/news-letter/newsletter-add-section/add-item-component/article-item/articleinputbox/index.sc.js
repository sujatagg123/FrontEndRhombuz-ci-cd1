import styled from 'styled-components';

export const MainWrp = styled.div`
  top: 0px;
  left: 0px;
  overflow: hidden;
  background: rgba(160, 167, 198, 0.6);
  width: 100vw;
  height: 100vh;
  position: fixed;
  transition: all 0.3s ease-in-out 0s;
  z-index: 1000;
`;

export const InputWrp = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70vw;
  z-index: 10;
  border-radius: 10px;
  top: 20%;
  height: 50vh;
  left: 15vw;
`;

export const HeadingWrp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem 1.87rem;
  background: #eceff3;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const HeadingText = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-align: left;
  padding: 0;
  margin: 0;
`;

export const CrossButtonWrp = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 0.75rem;
  cursor: pointer;
`;

export const ContentWrp = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  gap: 0.25rem;
  background: #ffffff;
`;

export const InputBoxTitle = styled.p`
  padding: 0;
  margin: 0;
  color: #818181;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const InputBox = styled.input`
  height: 2.8125rem;
  border-radius: 5px;
  border-color: transparent;
  background-color: rgba(195, 200, 220, 0.2);
  padding-left: 0.85rem;
  color: #000;
  &::placeholder {
    color: #000;
    font-size: 1.125rem;
    opacity: 0.5;
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonWrp = styled.div`
  height: 80px;
  background: #ffffff;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0.62rem 1.88rem 1.75rem 0rem;
  box-shadow: 0px 8px 8px 0px #9999994d;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  gap: 0.1875rem;
`;

export const ButtonBoxwpr = styled.div`
  display: flex;
  padding: 0.625rem 0.93rem;
  background: ${({ background }) => background};
  border-radius: 6px;
  height: 2.4rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 0.75rem;
  color: ${({ fontColor }) => fontColor};
  cursor: pointer;
`;
