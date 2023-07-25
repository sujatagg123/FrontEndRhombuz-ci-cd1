import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Styles from './index.sc';
import { theme } from '../../constants/theme';

const Tabs = ({
  items,
  onChange,
  variant,
  activeColor,
  inactiveColor,
  widthItem,
  isContent,
  paddingWrapper = '1rem',
  wraperBorderWidth = '1px 0 ',
  bottomBorderWidth = '4px',
  gapitems = '0',
  activeCardBGColor,
  inactiveCardBGColor,
  cardBorderRadius,
  inactiveFontWeight,
  currentTab,
}) => {
  const [activeTab, setActiveTab] = useState(currentTab || items[0]?.id);
  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(false);
  const tabsRef = useRef(null);
  const activeTabRef = useRef(null);

  // Check if there's overflow on mount and on resize

  useEffect(() => {
    if (activeTabRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [activeTab]);
  // const observeIntersection = () => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const itemsAfterFilter = entries.map((entry, index) => {
  //         if (entry.isIntersecting) {
  //           return { ...items[index], visible: true };
  //         } else {
  //           return { ...items[index], visible: false };
  //         }
  //       });
  //       setMenuItems(itemsAfterFilter.filter((item) => !item.visible));
  //     },
  //     { root: tabsRef.current, threshold: 1 }
  //   );
  //   const tabs = Array.from(tabsRef.current.children);
  //   tabs.forEach((tab) => observer.observe(tab));
  //   return () => {
  //     observer.disconnect();
  //   };
  // };

  const onChangeTab = (id, index) => {
    setActiveTab(id);
    onChange && onChange(index, items[index]);
  };

  useEffect(() => {
    if (activeTab === items[0]?.id || activeTab === undefined) {
      setActiveTab(items[0]?.id);
    }
  }, [items, activeTab]);

  const handleScroll = () => {
    setShowLeftShadow(tabsRef.current.scrollLeft > 0);
    setShowRightShadow(
      tabsRef.current.scrollLeft <
        tabsRef.current.scrollWidth - tabsRef.current.clientWidth
    );
  };

  return (
    <Styles.Container className="tabs-asmtabs">
      <Styles.TabsWrapper
        showLeftShadow={showLeftShadow}
        showRightShadow={showRightShadow}
        paddingWrapper={paddingWrapper}
        wraperBorderWidth={wraperBorderWidth}
      >
        <Styles.TabsContainer
          gapitems={gapitems}
          ref={tabsRef}
          onScroll={handleScroll}
        >
          {items.map((item, i) => (
            <Styles.TabContainer
              key={i}
              ref={item.id === activeTab ? activeTabRef : null}
              active={item.id === activeTab}
              onClick={() => !item.isDisabled && onChangeTab(item.id, i)}
              isDisabled={item.isDisabled}
              variant={variant}
              activeColor={activeColor}
              inactiveColor={inactiveColor}
              theme={theme.light}
              width={item?.width || widthItem}
              bottomBorderWidth={bottomBorderWidth}
              inactiveCardBGColor={inactiveCardBGColor}
              activeCardBGColor={activeCardBGColor}
              cardBorderRadius={cardBorderRadius}
              inactiveFontWeight={inactiveFontWeight}
            >
              <Styles.Title> {item.title}</Styles.Title>
            </Styles.TabContainer>
          ))}
        </Styles.TabsContainer>
      </Styles.TabsWrapper>
      {/* {variant !== 'underline' && <Styles.HorizontalLine />} */}
      {isContent && (
        <Styles.TabContent variant={variant}>
          {items[activeTab].content}
        </Styles.TabContent>
      )}
    </Styles.Container>
  );
};

Tabs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
      content: PropTypes.oneOfType([PropTypes.node || PropTypes.string]),
      isDisabled: PropTypes.bool,
    })
  ).isRequired,
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(['underline', 'card']),
  activeColor: PropTypes.string,
  inactiveColor: PropTypes.string,
  widthItem: PropTypes.string,
  isContent: PropTypes.bool,
  paddingWrapper: PropTypes.string,
  wraperBorderWidth: PropTypes.string,
  bottomBorderWidth: PropTypes.string,
  gapitems: PropTypes.string,
  inactiveCardBGColor: PropTypes.string,
  activeCardBGColor: PropTypes.string,
  cardBorderRadius: PropTypes.string,
  inactiveFontWeight: PropTypes.string,
  currentTab: PropTypes.any,
};

Tabs.defaultProps = {
  variant: 'underline',
};

export default Tabs;
