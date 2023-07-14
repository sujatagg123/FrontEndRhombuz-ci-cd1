import { barRect } from '../BestBar/barRect';
import { bubbleCircle } from '../BigBubble/bubbleCircle';
import { columnRect } from '../CoolColumn/columnRect';
import { circlePath } from '../GreatGauge/circlePath';
import { heatRect } from '../HotHeatMap/heatRect';
import { linePath } from '../LinearLine/LinePath';
import { stackedLinePath } from '../StackedLine/LinePath';
import { pieCircle } from '../PieChart/pieCircle';
import { radialCirclePath } from '../RadialRings/radialCirclePath';
import { scatterCircle } from '../ScatterPlot/scatterCircle';
import { treePath } from '../transformTree/treePath';
import { nestedTreePath } from '../nestedTree/nestedTreePath';
import { xAxis, yAxis } from './graphGrid';
import { radarCircle } from '../Radar/radarCircle';
import { wordCloud } from '../WordCloud/wordCloud';
import { radialPie } from '../RadialPieChart/radialPie';
import { usMap } from '../USMap/usMap';
import { worldMap } from '../WorldMapGraph/worldMap';

const graphBucket = {
  // Grid
  xAxis,
  yAxis,

  // Circle
  scatterCircle,
  bubbleCircle,
  circlePath,
  radialCirclePath,
  pieCircle,
  radarCircle,

  // Rect
  columnRect,
  barRect,
  treePath,
  nestedTreePath,
  heatRect,

  // Line
  linePath,
  stackedLinePath,

  // wordCloud
  wordCloud,

  // radial Pie chart
  radialPie,

  // US Map
  usMap,
  // world map
  worldMap,
};

export default graphBucket;
