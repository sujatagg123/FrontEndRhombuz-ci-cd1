import styled from 'styled-components';

export const MainWrp = styled.div`
  width: 100%;
  height: 1rem;
`;

export const TopBarWrp = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextContent = styled.p`
  /* color: #000; */
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1rem;
  letter-spacing: -0.02rem;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 0.25rem;
`;

export const ProfileLengthSpan = styled.span`
  color: #999999;
  font-weight: 400;
`;

export const SortWrp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
`;

export const RelevanceText = styled.p`
  color: #fff;
  /* SmallText */
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  letter-spacing: -0.015rem;
  margin: 0;
  padding: 0;
`;

export const SortByText = styled.p`
  color: #fff;
  /* SmallText */
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  letter-spacing: -0.015rem;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export const DropDownWrp = styled.div`
  position: absolute;
  right: 0;
  top: 1.25rem;
  background: #5c5e60;
  z-index: 10;
  padding: 0.625rem;
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const BottomProfilesMainWrp = styled.div`
  width: 100%;
  border: 2px solid red;
`;

export const Wrp = styled.div`
  position: relative;
`;
