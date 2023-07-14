import React, { useEffect, useRef } from 'react';
import { WorkSpotwpr } from './WorkSpot.sc';
import PropTypes, { object } from 'prop-types';
import { WorkspaceContainer } from '../half-full/index.sc';

const WorkSpot = ({ workspotdata, isWorkspace }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    container.scrollTo({
      left: 0,
    });
  }, [workspotdata]);

  const handleClick = (index) => {
    const container = containerRef.current;
    const elements = container.children;

    if (elements && elements[index]) {
      const element = elements[index];
      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      const scrollLeft = container.scrollLeft;
      const elementLeft = elementRect.left - containerRect.left + scrollLeft;
      const elementRight = elementRect.right - containerRect.left + scrollLeft;
      const containerWidth = containerRect.width;
      const elementWidth = element.offsetWidth;

      if (elementLeft < scrollLeft) {
        container.scrollTo({
          left: elementLeft - (elementWidth - 12) * 0.4,
          behavior: 'smooth',
        });
      } else if (elementRight > scrollLeft + containerWidth) {
        container.scrollTo({
          left: elementRight - containerWidth + (elementWidth - 12) * 0.4,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <WorkSpotwpr isWorkspace={isWorkspace} ref={containerRef}>
      {workspotdata.map((data, i) => (
        <WorkspaceContainer
          isWorkspace={isWorkspace}
          onClick={() => handleClick(i)}
          full={
            i % 5 === 0 || ((i % 5) % 2 !== 0 && i === workspotdata.length - 1)
          }
          key={i}
        >
          {data.data || 'label'}
        </WorkspaceContainer>
      ))}
    </WorkSpotwpr>
  );
};

WorkSpot.propTypes = {
  workspotdata: PropTypes.arrayOf(object).isRequired,
  isWorkspace: PropTypes.bool.isRequired,
};

export default WorkSpot;
