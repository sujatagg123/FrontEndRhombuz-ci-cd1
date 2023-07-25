import React, { Fragment, useEffect, useRef, useState } from 'react';
import Proptypes from 'prop-types';
import {
  AccessLevelBtnWrp,
  ButtonCon,
  ButtonText,
  CheckBox,
  CheckboxCell,
  FlexDiv,
  IconCon,
  NoDataMsg,
  NoDataTableCell,
  Table,
  TableBody,
  TableCell,
  TableCellWrp,
  TableContainer,
  TableHead,
  TableHeader,
  TableHeaderValueWrp,
  TableRow,
  TextContentWrp,
  ValueSubTitle,
  ValueTitle,
} from './index.sc';
import { Triangle } from '../../assets/icons/Triangle';
import Info from '../../assets/icons/Info';
import Avatar from '../avatar';
import UserAccessLevelPopup from '../user-access-level';
import AccessLevelBtn from '../access-level-button';
import Spinner from '../spinner';
import { useSelector } from 'react-redux';
import { theme } from '../../constants/theme';
import { debounce } from '../../constants/debounce';

// add status-color configuration when available
const StatusButton = ({ status }) => {
  return (
    <ButtonCon status={status}>
      <ButtonText status={status}>{status}</ButtonText>
    </ButtonCon>
  );
};

StatusButton.propTypes = {
  status: Proptypes.string,
};

const Customtable = ({
  isLoading,
  error,
  tableHeaders = [],
  tableData = [],
  handlePopupClick,
  length,
  data = {
    pages: [],
    pageParams: [],
  },
  pageLimit,
  handleLoad,
  infiniteLoading = false,
}) => {
  const { pages, pageParams } = data;
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [openedIndex, setOpenedIndex] = useState(-1);

  useEffect(() => {
    if (tableData.length > 0 && selectedRows.length === tableData.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectedRows, tableData]);

  const selectedTheme = useSelector((store) => {
    return store?.theme.theme || {};
  });

  const toggleRowSelection = (rowId) => {
    let updatedRows;
    if (selectedRows.includes(rowId)) {
      updatedRows = selectedRows.filter((id) => id !== rowId);
    } else {
      updatedRows = [...selectedRows, rowId];
    }
    setSelectedRows(updatedRows);
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      const rowIds = tableData.map((_, index) => index);
      setSelectedRows(rowIds);
    }
    setSelectAll(!selectAll);
  };

  function handleUserAccessLevelClick(index) {
    if (openedIndex === index) {
      setOpenedIndex(-1); // Close the popup if the same row is clicked again
    } else {
      setOpenedIndex(index); // Open the popup for the clicked row index
    }
  }

  const getTableCellValue = (row, colKey, index) => {
    if (colKey === 'name') {
      return (
        <FlexDiv>
          <Avatar name={row[colKey].title} />
          <TextContentWrp>
            <ValueTitle>{row[colKey].title}</ValueTitle>
            <ValueSubTitle>{row[colKey].subTitle}</ValueSubTitle>
          </TextContentWrp>
        </FlexDiv>
      );
    } else if (colKey === 'status') {
      return <StatusButton status={row[colKey]} />;
    } else if (colKey === 'access_level') {
      return (
        <>
          <AccessLevelBtnWrp>
            <AccessLevelBtn
              accessLevel={row[colKey]}
              handleClick={() => handleUserAccessLevelClick(index)}
              isActive={openedIndex === index}
            />
            {openedIndex === index && (
              <UserAccessLevelPopup
                data={row}
                index={index}
                openedIndex={openedIndex}
                setOpenedIndex={setOpenedIndex}
                handlePopupClick={handlePopupClick}
              />
            )}
          </AccessLevelBtnWrp>
        </>
      );
    } else {
      return row[colKey];
    }
  };

  const getColWidth = (colKey) => {
    if (colKey) {
      const findCol = tableHeaders.find((row) => row.value === colKey);
      return findCol?.width || '100px';
    }
    return '';
  };

  const handleIconClick = (col) => {
    if (col?.isSortable) {
      console.log(col.label, 'col sorting icon clicked');
    } else {
      handlePopupClick();
    }
  };

  const showNoDataMsg = () => {
    if (!infiniteLoading && !tableData?.length) {
      return true;
    } else if (infiniteLoading && !pages.length && !pageParams.length) {
      return true;
    } else {
      return false;
    }
  };

  const observerTarget = useRef(null);

  useEffect(() => {
    const handleLoadClick = debounce(() => {
      handleLoad();
      setSelectAll(false);
    }, 1000);

    const showLoadMore = () => {
      if (pageParams && pageParams?.length) {
        const pageNo = pageParams?.length;
        if (pageLimit * pageNo > length) {
          return false;
        }
        return true;
      }
      return false;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && showLoadMore()) {
          handleLoadClick();
          console.log('Intersection');
        }
      },
      { threshold: 1 }
    );

    const currentValue = observerTarget.current;

    if (currentValue) {
      observer.observe(currentValue);
    }

    return () => {
      if (currentValue) {
        observer.unobserve(currentValue);
      }
    };
  }, [observerTarget, handleLoad, length, pageLimit, pageParams]);

  if (isLoading) return <Spinner />;

  if (error) {
    console.log(error.message);
  }

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead className="table-header">
            <TableRow className="table-row">
              <CheckboxCell className="fixed-50">
                <CheckBox
                  type="checkbox"
                  checked={selectAll}
                  onChange={toggleSelectAll}
                />
              </CheckboxCell>
              {tableHeaders.map((header, idx) => (
                <TableHeader
                  colWidth={header?.width ? header.width : 'auto'}
                  key={idx}
                >
                  <TableHeaderValueWrp>
                    <span>{header?.label}</span>
                    <IconCon onClick={() => handleIconClick(header)}>
                      {header?.isSortable ? (
                        <Triangle />
                      ) : (
                        <Info color={theme[selectedTheme].primary} />
                      )}
                    </IconCon>
                  </TableHeaderValueWrp>
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className="table-body">
            {infiniteLoading
              ? pages?.map((page, i) => (
                  <Fragment key={i}>
                    {page?.data?.data?.tableData.map((row, index) => (
                      <TableRow className="table-row" key={index}>
                        <CheckboxCell className="fixed-50">
                          <CheckBox
                            type="checkbox"
                            checked={selectedRows.includes(index)}
                            onChange={() => toggleRowSelection(index)}
                          />
                        </CheckboxCell>
                        {Object.keys(row).map((colKey) => (
                          <TableCell
                            colWidth={() => getColWidth(colKey)}
                            key={`${index}-${colKey}`}
                          >
                            <TableCellWrp>
                              {getTableCellValue(row, colKey, index)}
                            </TableCellWrp>
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </Fragment>
                ))
              : tableData.map((row, index) => (
                  <TableRow className="table-row" key={index}>
                    <CheckboxCell className="fixed-50">
                      <CheckBox
                        type="checkbox"
                        checked={selectedRows.includes(index)}
                        onChange={() => toggleRowSelection(index)}
                      />
                    </CheckboxCell>
                    {Object.keys(row).map((colKey) => (
                      <TableCell
                        colWidth={() => getColWidth(colKey)}
                        key={`${index}-${colKey}`}
                      >
                        <TableCellWrp>
                          {getTableCellValue(row, colKey, index)}
                        </TableCellWrp>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
            {showNoDataMsg() && (
              <NoDataMsg>
                <NoDataTableCell colSpan="100">
                  No Data available
                </NoDataTableCell>
              </NoDataMsg>
            )}
            <tr ref={observerTarget}></tr>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Customtable;

Customtable.propTypes = {
  isLoading: Proptypes.bool,
  error: Proptypes.object,
  tableHeaders: Proptypes.arrayOf(Proptypes.object),
  tableData: Proptypes.arrayOf(Proptypes.object),
  handlePopupClick: Proptypes.func,
  length: Proptypes.number,
  data: Proptypes.object,
  pageLimit: Proptypes.number,
  handleLoad: Proptypes.func,
  infiniteLoading: Proptypes.bool,
};
