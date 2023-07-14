import styled from 'styled-components';

export const PopupWrp = styled.div`
  position: absolute;
  z-index: 100;
  top: calc(100% + 10px);
  right: -90%;
  width: 21.77319rem;
  height: 13.5rem;
  background-color: #fff;
  border: 1px solid #d1d5dc;
  padding: 0.75rem;
  border-radius: 0.625rem;
  filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.2));
`;

export const MainWrp = styled.div`
  display: flex;
  padding: 0rem 0.625rem;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.25rem;
`;

export const ContentWrp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  width: 19.875rem;
  margin: 0 auto;
`;

export const HeadingText = styled.div`
  color: #000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.02rem;
  padding: 0;
  margin: 0;
`;

export const UserWrp = styled.div`
  display: flex;
  width: 18.625rem;
  padding: 0.625rem 0.6875rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  border-radius: 0.625rem;
  background: #f3f4f8;
`;

export const UserContentWrp = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const TextWrp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
`;

export const UserNameText = styled.h3`
  color: #000;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.125rem;
  letter-spacing: -0.0175rem;
  padding: 0;
  margin: 0;
`;

export const ClickText = styled.span`
  margin: 0;
  padding: 0;
  color: #425df8;
  cursor: pointer;
`;

export const AccessLevelWrp = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.4375rem;
`;

export const StrikedText = styled.p`
  color: #999;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.0175rem;
  padding: 0;
  margin: 0;
  text-decoration: line-through;
  &::first-letter {
    text-transform: capitalize;
  }
`;

export const AccessLeveltext = styled.p`
  color: #425df8;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.0175rem;
  padding: 0;
  margin: 0;
`;

export const LearnMoreText = styled.p`
  color: #999;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.0175rem;
  padding: 0;
  margin: 0;
`;

export const BtnWrp = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
`;
