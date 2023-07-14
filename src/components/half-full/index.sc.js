import styled from 'styled-components';

export const WorkspaceContainer = styled.div`
  height: ${(props) => (props.full ? '100%' : 'calc(50% - 0.5rem/2)')};
  width: ${(props) => (props.full ? '18rem' : '18.75rem')};
  display: flex;
  box-sizing: border-box;
  padding: ${(props) =>
    !props.isWorkspace
      ? '0'
      : props.full
      ? '1rem 0.75rem 1rem'
      : '1rem 0.75rem'};

  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(2, 2, 2, 0.1);
  border-radius: 15px;
  justify-content: center;
`;

export const Containerwpr = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.75rem 0.75rem 1rem 0.75rem;

  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 75%
    ),
    url(${({ imgURL }) => imgURL});
  background-size: cover;
  background-position: center;
  border-radius: 15px;
`;

export const Upperwpr = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Upperleft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const UpperRight = styled.div`
  display: flex;
  gap: 0.25rem;
  height: fit-content;
  justify-content: end;
`;

export const CircleIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  justify-content: flex-start;
  height: 30px;
  width: 30px;
  &:hover {
    width: 124px;
    justify-content: space-between;
  }
  border-radius: 30px;
  background: #ffffff;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
`;

export const Bottomwpr = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Descwpr = styled.div`
  font-weight: 600;
  font-size: 0.95rem;
  color: #ffffff;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const Infowpr = styled.div`
  font-weight: 400;
  font-size: 0.6rem;
  color: #ffffff;
  display: flex;
  align-items: center;
`;

export const FulLabelwpr = styled.div`
  padding: 0.2rem 1rem 0.25rem;
  font-weight: 600;
  font-size: 10px;
  color: #ffffff;
  background: #eb566e;
  border-radius: 5px;
  display: flex;
  align-items: center;
  width: fit-content;
`;

export const FullTitlewpr = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: #ffffff;
`;

export const Fulldescwpr = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 1rem;
`;

export const FulLine = styled.div`
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 1rem;
`;

export const FullNumBoxwpr = styled.div`
  width: fit-content;
  & > span {
    font-weight: 700;
    font-size: 0.75rem;
    color: #ffffff;
    opacity: 0.6;
  }
`;

export const Numberwpr = styled.div`
  display: flex;
`;

export const NumBox = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  color: #ffffff;
  & > span {
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-left: 0.25rem;
  }
`;

export const Changewpr = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  align-items: end;
  margin: 0 0 6px 4px;
  color: ${(props) => (props.isPositive ? '#50B601' : '#ED3F47')};
  & > svg {
    stroke: ${(props) => (props.isPositive ? '#50B601' : '#ED3F47')};
    > path {
      fill: ${(props) => (props.isPositive ? '#50B601' : '#ED3F47')};
    }
    transform: rotate(${(props) => (props.isPositive ? '0' : '180deg')});
  }
  & span {
    color: ${(props) => (props.isPositive ? '#50B601' : '#ED3F47')};
    margin: 0 0 0px 2px;
    line-height: 10px;
  }
`;

export const Iconwpr = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`;

export const Imgwpr = styled.div``;

//

export const Popoverwpr = styled.div`
  box-sizing: border-box;
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 8px 8px rgba(153, 153, 153, 0.3);
  border-radius: 6px;
  padding: 0.75rem;
  bottom: -4.25rem;
  right: 0px;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  gap: 0.5rem;
  cursor: pointer;
  flex-direction: column;
  width: 10.25rem;
  transition: all 0.3s ease-in;
  cursor: auto;
`;

export const PopItem = styled.div`
  width: 100%;
  font-weight: 400;
  cursor: pointer;
  font-size: 13px;
  color: #000000;
`;

export const Hoverwpr = styled.div`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 500;
  font-size: 14px;
  color: #000000;
`;
