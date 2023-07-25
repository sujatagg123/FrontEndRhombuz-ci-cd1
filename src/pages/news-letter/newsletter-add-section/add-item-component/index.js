import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  AddItemWrp,
  AddOptionsWrp,
  //   BottomSectionWrp,
  IconWrp,
  OptionText,
  OptionTextSpan,
  OptionWrp,
  SectionWrp,
} from './index.sc';
import Add from '../../../../assets/icons/Add';
import TextInputBox from './text-item/textinputbox';
import DashboardPopup from '../../../../components/dasboard-popup';
import AddGraphpop from '../../../../components/add-graph-popup';
import ArticleInputBox from './article-item/articleinputbox';
import { axiosGet } from '../../../../service';
import { useQuery } from '@tanstack/react-query';
// import { mediaType } from '../../../../graphs/utils/mockData';

const addOptions = [
  { addOption: 'text', label: 'Text', menu: false },
  { addOption: 'articles', label: 'Articles', menu: false },
  { addOption: 'graphs', label: 'Graphs', menu: false },
];

const AddItem = ({ addRow, rowIndex, columnIndex, searchSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCompOption, setSelectedCompOption] = useState('');

  function addArticleItem() {
    setIsOpen((prev) => !prev);
  }

  function optionFunc(option) {
    setSelectedCompOption(option.addOption);
    if (option.addOption === 'graphs') {
      setShow(true);
    }
    setIsOpen(false);
  }

  const onTextCompSubmit = (value) => {
    if (selectedCompOption === 'text') {
      addRow(
        {
          componentData: {
            ...value,
          },
          componentType: 'text',
        },
        rowIndex,
        columnIndex
      );
    }
    setSelectedCompOption('');
  };

  const onGraphSubmit = (value) => {
    // send the component data object, row and column
    if (selectedCompOption === 'graphs') {
      addRow(
        {
          componentData: {
            ...value,
          },
          componentType: 'graph',
        },
        rowIndex,
        columnIndex
      );
    }
    setSelectedCompOption('');
  };

  const onArticleCompSubmit = (value) => {
    if (selectedCompOption === 'articles') {
      addRow(
        {
          componentData: {
            ...value,
          },
          componentType: 'article',
        },
        rowIndex,
        columnIndex
      );
    }
    setSelectedCompOption('');
  };

  const handleClose = () => {
    setSelectedCompOption('');
  };
  const [show, setShow] = useState(false);

  const getgraphData = () => {
    return axiosGet('/add-graph-option', {});
  };

  const {
    // isLoading,
    // error: articleerror,
    data: addGraphData,
    // isFetching,
  } = useQuery({
    queryKey: ['add-graph-data'],
    queryFn: () => getgraphData(),
    refetchOnWindowFocus: false,
  });

  const Item = addGraphData?.data?.data;

  return (
    <>
      {selectedCompOption === 'text' && (
        <TextInputBox onSubmit={onTextCompSubmit} handleClose={handleClose} />
      )}
      {
        <DashboardPopup
          padding="0"
          open={show && selectedCompOption === 'graphs'}
          toggler={setShow}
          popContent={
            <AddGraphpop
              canvas={Array.isArray(Item) ? Item : []}
              toggler={setShow}
              title={searchSelect}
              onSubmit={onGraphSubmit}
            />
          }
        />
      }
      {selectedCompOption === 'articles' && (
        <ArticleInputBox
          onSubmit={onArticleCompSubmit}
          handleClose={handleClose}
        />
      )}
      <AddItemWrp>
        <SectionWrp>
          <IconWrp onClick={() => addArticleItem()} isOpen={isOpen}>
            <Add />
          </IconWrp>
          {isOpen && (
            <AddOptionsWrp>
              {addOptions.map((option, i) => {
                return (
                  <OptionWrp key={i}>
                    <OptionText onClick={() => optionFunc(option)}>
                      Add <OptionTextSpan>{option.label}</OptionTextSpan>
                    </OptionText>
                  </OptionWrp>
                );
              })}
            </AddOptionsWrp>
          )}
        </SectionWrp>
      </AddItemWrp>
    </>
  );
};

AddItem.propTypes = {
  addRow: PropTypes.func.isRequired,
  rowIndex: PropTypes.number,
  columnIndex: PropTypes.number,
  searchSelect: PropTypes.string,
};

export default AddItem;
