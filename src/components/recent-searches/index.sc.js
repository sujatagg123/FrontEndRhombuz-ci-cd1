import styled from 'styled-components';

export const MainWrp = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const TabTitle = styled.h3`
  /* font-family: Manrope; */
  color: #000;
  font-size: 0.875rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 0.75rem;
`;

export const TabSectionWrp = styled.div`
  height: calc(100% - 1.625rem);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.938rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
`;

export const TabSection = styled.div`
  width: 100%;
  background: #eceff3;
  padding: 0.344rem 0.603rem 0.281rem 0.665rem;
`;

export const TabsWrp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.188rem;
  width: 100%;
`;

export const LabelText = styled.p`
  /* font-family: Manrope; */
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  margin: 0;
  color: #000000;
`;

export const SubTextWrp = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 0.875rem;
  color: #555555;
  margin: 0;
`;

export const BoldText = styled.span`
  font-weight: 600;
`;
