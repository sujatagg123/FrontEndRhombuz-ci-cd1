import styled from 'styled-components';

export const TableContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin-bottom: 0.5rem;
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
`;
export const TableHead = styled.thead`
  /* border-top: 1px solid #eaecf0;
  border-bottom: 1px solid #eaecf0; */

  background: #f9fafb;
  height: 2.75rem;
  position: sticky;
  top: 0;
  z-index: 300;
  .table-row {
    background: #f3f4f8;
  }
`;
export const TableBody = styled.tbody`
  .table-row {
    height: 3.5rem;
  }
`;

export const TableRow = styled.tr`
  background: ${({ theme }) => theme.background};
  box-shadow: 0px -1px 0px 0px rgba(195, 199, 217, 0.5) inset;
`;
export const TableHeaderWrp = styled.div`
  width: calc(100% - 3.125rem);
  height: 100%;
  display: flex;
  align-items: center;
`;
export const TableHeader = styled.th`
  padding: 0 0.625rem;
  text-align: left;
  color: ${({ theme }) => theme.tableHeaderColor};
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  letter-spacing: -0.24px;
  width: ${(props) => props.colWidth};
  min-width: 12.5rem;
`;
export const TableHeaderValueWrp = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const IconCon = styled.div`
  cursor: pointer;
`;
export const TableCell = styled.td`
  padding: 0 0.625rem;
  color: ${({ theme }) => theme.secondaryText};
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: -0.24px;
  min-width: 12.5rem;
  max-width: ${(props) => (props.colWidth ? props.colWidth : '')};
`;
export const TableCellWrp = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const CheckboxCell = styled(TableCell)`
  max-width: 2.5rem;
  min-width: 2.5rem;
`;

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  box-sizing: border-box;
  width: 1rem;
  height: 1rem;
  background-color: ${({ theme }) => theme.secondaryBackground};
  margin: 0.25rem;
  flex-shrink: 0;
  transition: all 1000ms ease;
  &:checked {
    width: 1rem;
    height: 1rem;
    accent-color: ${({ theme }) => theme.primary};
    border-radius: 3px;
    transition: all 400ms ease;
  }
`;
export const ButtonCon = styled.div`
  width: 4rem;
  padding: 0.375rem 0.8rem;
  border-radius: 2px;
  background-color: ${({ status, theme }) =>
    status === 'active' ? theme.activeStatusBtnBg : theme.inActiveStatusBtnBg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
  line-height: 1.125rem;
  letter-spacing: -0.26px;
  text-transform: capitalize;
  color: ${({ status, theme }) =>
    status === 'active'
      ? theme.activeStatusBtnText
      : theme.inActiveStatusBtnText};
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
export const SharedIconCir = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.56rem;
  height: 1.56rem;
  border-radius: 50%;
  background: ${(props) => props.backgroundColor};
  font-style: normal;
  font-weight: 400;
  font-size: 0.6rem;
`;
export const TextContentWrp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const ValueTitle = styled.span`
  color: ${({ theme }) => theme.tabInactive};
  font-size: 0.85rem;
  font-weight: 700;
  line-height: 1.125rem;
  letter-spacing: -0.28px;
`;
export const ValueSubTitle = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
  letter-spacing: -0.24px;
`;

export const AccessLevelBtnWrp = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const NoDataMsg = styled.tr``;
export const NoDataTableCell = styled.td`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: -0.24px;
  text-align: center;
`;
export const Loadbtnwpr = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loadbtn = styled.div`
  font-weight: 600;
  font-size: 13px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.secondaryText};
  padding: 0.5rem 0.75rem;
  margin: 0 0 0.25rem;
  border: 1px solid ${({ theme }) => theme.background};
  background-color: ${({ theme }) => theme.secondaryBackground};
  cursor: pointer;
  border-radius: 5px;
`;
