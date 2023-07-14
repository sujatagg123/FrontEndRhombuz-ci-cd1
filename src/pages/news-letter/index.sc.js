import styled from 'styled-components';

export const MainWrp = styled.div`
  overflow: ${(props) => (props.scroll ? 'none' : 'hidden')};
  height: ${(props) => (props.scroll ? 'auto' : '100vh')};
  background: #fff;
`;
