import styled from 'styled-components';

export const AddItemWrp = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SectionWrp = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #eceff5;
  border: 1px dashed #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const IconWrp = styled.div`
  height: 1.93rem;
  width: 1.93rem;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 50%;
  cursor: pointer;

  border: 1px solid
    ${(prop) => (prop.isOpen === 'true' ? '#2e68ff' : '#999999')};
`;

export const AddOptionsWrp = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.813rem 0.938rem;
  gap: 0.625rem;
  width: 18.125rem;
  background: #ffffff;
  border: 2px solid #2e68ff;
  box-shadow: 0px 8px 8px rgba(153, 153, 153, 0.3);
  border-radius: 0.625rem;
  position: absolute;
  bottom: -2.5rem;
  z-index: 1;
`;

export const OptionWrp = styled.div`
  width: 16.75rem;
  height: 1.875rem;
  display: flex;
  align-items: center;
`;

export const OptionText = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.188rem;
  color: #2e68ff;
  cursor: pointer;
`;

export const OptionTextSpan = styled.span`
  font-weight: 700;
`;
