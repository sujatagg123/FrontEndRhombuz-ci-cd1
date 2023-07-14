export const onClickFunc = (selected, className, clickFunc) => {
  selected
    .selectAll(`.${className}`)
    .style('cursor', 'pointer')
    .on('click', clickFunc);
};

export const onMouseOverOut = (selected, className, overFunc, outFunc) => {
  selected
    .selectAll(`.${className}`)
    .style('cursor', 'pointer')
    .on('mouseover', overFunc)
    .on('mouseout', outFunc);
};

export const onMouseEnterMoveLeave = (
  selected,
  className,
  enterFunc,
  moveFunc,
  leaveFunc
) => {
  selected
    .selectAll(`.${className}`)
    .style('cursor', 'pointer')
    .on('mouseenter', enterFunc)
    .on('mousemove', moveFunc)
    .on('mouseleave', leaveFunc);
};

export const setUpEvents = (config, selected, className) => {
  if (config.handleOnClick) {
    onClickFunc(selected, className, config.handleOnClick);
  }

  if (config.handleMouseOver && config.handleMouseOut) {
    onMouseOverOut(
      selected,
      className,
      config.handleMouseOver,
      config.handleMouseOut
    );
  }

  if (
    config.handleMouseEnter &&
    config.handleMouseLeave &&
    config.handleMouseMove
  ) {
    onMouseEnterMoveLeave(
      selected,
      className,
      config.handleMouseEnter,
      config.handleMouseMove,
      config.handleMouseLeave
    );
  }
};
