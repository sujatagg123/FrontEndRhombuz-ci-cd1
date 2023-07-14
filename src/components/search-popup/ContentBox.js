import React, { useEffect, useState } from 'react';
import Proptypes, { object } from 'prop-types';
import {
  CheckBox,
  ContentHeader,
  ContentsContainer,
  Contentwrpr,
  Deswrpr,
  Elewrp,
  FramRightpr,
  Frametxt,
  Framewrpr,
  Framleftpr,
  Iconwrpr,
  Loadbtn,
  Loadbtnwpr,
  MainBox,
  SearchIconwpr,
  SharedIconCir,
  SharedIconsCont,
  Textwrpr,
  Titlewrpr,
} from './index.sc';
import { SearchDone } from '../../assets/icons/SearchDone';
import { Save } from '../../assets/icons/Save';
import { VerticleDots } from '../../assets/icons/VerticalDots';
import { Triangle } from '../../assets/icons/Triangle';

export const color = ['#3579DE', '#EB566E', '#EA3FB8'];

export const ContentBox = ({
  data,
  checkeditems,
  isPopup,
  Frames,
  isCheckBox = true,
  handleCheckedItems,
  handleFilter,
  handleLoad,
  pageLimit = 10,
  isLoading = false,
  isIcons = true,
  bookMardClick,
  dotClick,
  toggler,
  handleClick,
  rightWidth,
}) => {
  const [allChecked, setAllChecked] = useState(false);
  const length = data?.pages[0].data.total;

  useEffect(() => {
    setAllChecked(false);
  }, [data?.pages]);

  const checkboxHandler = (item) => {
    item.checked = !item.checked;
    if (checkeditems.some((obj) => obj.id === item.id)) {
      handleCheckedItems(checkeditems.filter((obj) => obj.id !== item.id));
      setAllChecked(false);
    } else {
      handleCheckedItems([...checkeditems, item]);
      if (
        [...checkeditems, item].length === length ||
        [...checkeditems, item].length === data.pageParams.length * pageLimit
      ) {
        setAllChecked(true);
      }
    }
  };

  const handleAllcheck = (isChecked) => {
    if (isChecked) {
      let items = [];
      for (let i = 0; i < data.pages.length; i++) {
        const page = data.pages[i];
        items = [...items, ...page.data.data];
        items.map((obj) => ({ ...obj, checked: true }));
      }
      handleCheckedItems([...items]);
      setAllChecked(true);
    } else {
      handleCheckedItems([]);
      setAllChecked(false);
    }
  };

  const handleContentClick = (e, item) => {
    e.stopPropagation();
    handleClick(item);
    if (toggler) toggler(false);
  };

  const handleFrameClick = (e, item, click, type) => {
    e.stopPropagation();
    if (click) {
      click(item, type);
    }
  };

  return (
    <>
      <ContentHeader>
        <Framleftpr>
          {isCheckBox && (
            <CheckBox
              type="checkbox"
              checked={allChecked}
              onChange={() => handleAllcheck(!allChecked)}
            />
          )}
          <Framewrpr onClick={() => handleFilter(Frames[0].type)}>
            <Frametxt>{Frames[0].label}</Frametxt>
            {false && <Triangle />}
          </Framewrpr>
        </Framleftpr>
        <FramRightpr width={rightWidth} isPopup={isPopup}>
          {Frames.slice(1, Frames?.length).map((frame, i) => (
            <Framewrpr key={i} onClick={() => handleFilter(frame.type)}>
              <Frametxt>{frame.label}</Frametxt>
              {false && <Triangle />}
            </Framewrpr>
          ))}
          {isIcons && <Framewrpr width="7rem">{false && <Save />}</Framewrpr>}
        </FramRightpr>
      </ContentHeader>
      <ContentsContainer>
        {!isLoading ? (
          <>
            {data?.pages?.map((page, i) => (
              <div key={i}>
                {page?.data?.data.map((content, j) => (
                  <Contentwrpr
                    onClick={handleContentClick}
                    isPopup={isPopup}
                    key={j}
                  >
                    <MainBox>
                      {isCheckBox && (
                        <CheckBox
                          checked={checkeditems.some(
                            (obj) => obj.id === content.id
                          )}
                          onChange={() => checkboxHandler(content)}
                          type="checkbox"
                        />
                      )}
                      {false && (
                        <SearchIconwpr>
                          <SearchDone />
                        </SearchIconwpr>
                      )}
                      {content.titleNode ? (
                        content.titleNode
                      ) : (
                        <Textwrpr>
                          <Titlewrpr>{content.title}</Titlewrpr>
                          <Deswrpr>{content.des}</Deswrpr>
                        </Textwrpr>
                      )}
                    </MainBox>
                    <FramRightpr isPopup={isPopup} width={rightWidth}>
                      {Frames.slice(1, Frames?.length).map((frame, i) => (
                        <div key={i}>
                          {content[frame.type] &&
                            !(typeof content[frame.type] === 'object') &&
                            !Array.isArray(content[frame.type]) && (
                              <Elewrp
                                onClick={(e) =>
                                  handleFrameClick(
                                    e,
                                    content,
                                    frame.frameClick,
                                    frame.type
                                  )
                                }
                                key={i}
                              >
                                {content[frame.type]}
                              </Elewrp>
                            )}
                        </div>
                      ))}
                      {content?.sharedwith && (
                        <SharedIconsCont>
                          {content?.sharedwith?.map((ele, i) => {
                            if (i < 3) {
                              return (
                                <SharedIconCir
                                  backgroundColor={color[i]}
                                  key={i}
                                >
                                  {ele.content}
                                </SharedIconCir>
                              );
                            }
                            return '';
                          })}
                          {content?.sharedwith?.length - 3 !== 0 && (
                            <SharedIconCir backgroundColor="#C3C7D9">
                              +{content?.sharedwith?.length - 3}
                            </SharedIconCir>
                          )}
                        </SharedIconsCont>
                      )}
                      {isIcons && (
                        <Elewrp width="7rem">
                          {bookMardClick && (
                            <Iconwrpr onClick={() => bookMardClick(content)}>
                              <Save />
                            </Iconwrpr>
                          )}
                          {dotClick && (
                            <Iconwrpr onClick={() => dotClick(content)}>
                              <VerticleDots />
                            </Iconwrpr>
                          )}
                        </Elewrp>
                      )}
                    </FramRightpr>
                  </Contentwrpr>
                ))}
              </div>
            ))}
          </>
        ) : (
          'Loading...'
        )}
        {length - data?.pageParams.length * pageLimit > 0 && (
          <>
            {!isLoading ? (
              <Loadbtnwpr>
                <Loadbtn onClick={handleLoad}>
                  load more +
                  {(data?.pageParams.length + 1) * pageLimit <= length
                    ? pageLimit
                    : length - data?.pageParams.length * pageLimit}
                </Loadbtn>
              </Loadbtnwpr>
            ) : (
              <Loadbtnwpr>
                <div>Loading.....</div>
              </Loadbtnwpr>
            )}
          </>
        )}
      </ContentsContainer>
    </>
  );
};

ContentBox.propTypes = {
  data: Proptypes.oneOfType([
    Proptypes.object,
    Proptypes.arrayOf(object),
    Proptypes.string,
  ]),
  handleLoad: Proptypes.func,
  checkeditems: Proptypes.arrayOf(object),
  isPopup: Proptypes.bool,
  isCheckBox: Proptypes.bool,
  Frames: Proptypes.arrayOf(object),
  handleCheckedItems: Proptypes.func,
  handleFilter: Proptypes.func,
  pageLimit: Proptypes.number,
  isLoading: Proptypes.bool,
  isIcons: Proptypes.bool,
  dotClick: Proptypes.func,
  bookMardClick: Proptypes.func,
  handleClick: Proptypes.func,
  toggler: Proptypes.func,
  rightWidth: Proptypes.oneOfType([Proptypes.number, Proptypes.string]),
};
