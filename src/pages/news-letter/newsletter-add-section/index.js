import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { formatNumber } from '../../../utils';
import AddItem from './add-item-component';
import TextItem from './add-item-component/text-item';
import NewsArticle from './news-article';
import ToolBar from './add-item-component/toolbar';
import {
  AddRowWrp,
  NewsLetterComponentWrp,
  NewsLetterRow,
  NewsLetterWrp,
  ToolBarWrp,
} from './index.sc';
import GraphItem from './add-item-component/graph-item';
import { mediaType } from '../../../graphs/utils/mockData';

const newsLetterC = [
  {
    rowId: 0,
    rowSplit: false,
    rowItems: [
      {
        columnId: 'a',
        componentData: {
          title: 'Title',
          description: 'description',
        },
        componentType: 'text',
        columnComponent: <div>content</div>,
      },
    ],
  },
  {
    rowId: 1,
    rowSplit: false,
    rowItems: [
      {
        columnId: 'a',
        componentData: {
          title:
            'Few Parents intend to have very Young Children Vaccinated Against Covid',
          content:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti magnam aspernatur perspiciatis, minus ex est quis. Consequatur dolor earum unde ex sit labore iste, praesentium mollitia. Ullam non possimus totam? Eum sapiente vel nisi minima itaque! Consequatur laborum odio fugiat nisi, quas at non impedit. Deleniti, fugiat ea, ex, sint omnis culpa alias esse quidem natus ducimus maiores. Ducimus, enim? Doloribus adipisci soluta earum labore ut quis aliquid quas eos esse. Minus quod quidem obcaecati, cum, tempora ad ex expedita quis in voluptatibus sit sequi deleniti? Consectetur qui veniam aperiam Omnis, culpa. Eum aperiam modi consequuntur? Quae nulla rerum sit commodi. Ad commodi doloremque suscipit praesentium, soluta ullam, consequatur tempore, ut animi natus officia dolore hic voluptate sit odio reiciendis',
          link: 'https://indianexpress.com/article/lifestyle/fashion/gucci-alia-bhatt-global-ambassador-8609049/',
          icon: 'https://yt3.ggpht.com/ytc/AGIKgqM0ymt1FyptuNbIiKEa2h446IAI-GaddiF4qqgMVg=s88-c-k-c0x00ffffff-no-rj',
          image:
            'https://images.indianexpress.com/2023/05/umar-khalid-and-lahiri-1200.jpg?resize=150,83',
          matches: ['GUCCI', 'abc'],
          reach: formatNumber(16225588),
          syndication: formatNumber(16225588),
          ave: '~$1.5 M',
          sentiment: 'positive',
        },
        componentType: 'article',
        columnComponent: <div>content</div>,
      },
    ],
  },
  {
    rowId: 2,
    rowSplit: false,
    rowItems: [
      {
        columnId: 'a',
        componentData: {
          title: 'Media Type',
          subTitle: '1.9 Mn Total Articles',
          slotType: 'full',
          component: 'media_type',
          data: mediaType,
        },
        componentType: 'graph',
        columnComponent: <div>content</div>,
      },
    ],
  },
  {
    rowId: 3,
    rowSplit: true,
    rowItems: [
      {
        columnId: 'a',
        componentData: {
          title: 'Title',
          description: 'description',
        },
        componentType: 'text',
        columnComponent: <div>content</div>,
      },
      {
        columnId: 'b',
        componentData: {
          title: 'Title',
          description: 'description',
        },
        componentType: 'text',
        columnComponent: <div>content</div>,
      },
    ],
  },
];

const NewsLetterAddSection = ({ data, searchSelect }) => {
  const [newsLetter, setNewsLetter] = useState(newsLetterC);
  const [loader, setLoader] = useState(false);

  const splitRow = (i) => {
    setNewsLetter((prev) => {
      const temp = [...prev];

      // loader for graph item
      setLoader(true);
      setTimeout(() => {
        setLoader(false);
      }, 500);

      if (!temp[i].rowSplit) {
        temp[i].rowItems.push({
          columnId: 'b',
          componentType: 'add',
          columnComponent: <div>add</div>,
        });
        temp[i].rowSplit = true;
      }
      return temp;
    });
  };

  const addRow = (data, row, column) => {
    setNewsLetter((prev) => {
      const temp = [...prev];
      if (row < temp.length) {
        temp[row].rowItems[column] = {
          columnId: column,
          columnComponent: <div>content</div>,
          ...data,
        };
      } else {
        temp.push({
          rowId: temp.length,
          rowSplit: false,
          rowItems: [
            {
              columnId: 'a',
              columnComponent: <div>content</div>,
              ...data,
            },
          ],
        });
      }
      return temp;
    });
  };

  const arrowClick = (row, direction) => {
    setNewsLetter((prev) => {
      const temp = [...prev];
      if (direction === 'up' && row <= 0) {
        return temp;
      } else if (direction === 'down' && row >= temp.length) {
        return temp;
      } else {
        const itemIndex = row; // Index of the item you want to change
        const newIndex = direction === 'up' ? row - 1 : row + 1; // Desired new index for the item
        const item = temp[itemIndex]; // Retrieve the item
        temp.splice(itemIndex, 1); // Remove the item from the original index
        temp.splice(newIndex, 0, item); // Insert the item at the new index
        return temp;
      }
    });
  };

  const onDelete = (row) => {
    setNewsLetter((prev) => {
      const temp = [...prev];

      const itemIndex = row; // Index of the item you want to change
      temp.splice(itemIndex, 1); // Remove the item from the original index
      return temp;
    });
  };

  return (
    <NewsLetterWrp>
      {newsLetter.map((ele, i) => (
        <NewsLetterRow split={ele.rowSplit} key={`news-letter-row-${i}`}>
          {ele.rowItems.map((rowItem, j) => (
            <NewsLetterComponentWrp key={`news-letter-row-${i}-column-${j}`}>
              {rowItem.componentType === 'text' ? (
                <TextItem
                  title={rowItem.componentData.title}
                  description={rowItem.componentData.description}
                />
              ) : rowItem.componentType === 'article' ? (
                <NewsArticle data={rowItem.componentData} />
              ) : rowItem.componentType === 'graph' ? (
                <GraphItem graph={rowItem.componentData} split={loader} />
              ) : rowItem.componentType === 'add' ? (
                <AddItem rowIndex={i} columnIndex={j} addRow={addRow} />
              ) : (
                <></>
              )}
            </NewsLetterComponentWrp>
          ))}
          <ToolBarWrp className="tool-bar-wrp">
            <ToolBar
              arrowClick={(direction) => arrowClick(i, direction)}
              splitRow={() => splitRow(i)}
              deleteClick={() => onDelete(i)}
            />
          </ToolBarWrp>
        </NewsLetterRow>
      ))}
      <AddRowWrp>
        <AddItem
          searchSelect={searchSelect}
          rowIndex={newsLetter.length}
          columnIndex={0}
          addRow={addRow}
        />
      </AddRowWrp>
    </NewsLetterWrp>
  );
};

NewsLetterAddSection.propTypes = {
  data: Proptypes.array,
  searchSelect: Proptypes.string,
};

export default NewsLetterAddSection;
