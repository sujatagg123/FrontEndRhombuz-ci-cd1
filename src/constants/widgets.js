import { widgetImg } from '../assets/img/widgetsImg';
import HorizontalMultiBar from '../components/horizontal-bar';
import RecentSearches from '../components/recent-searches';
import TopFiveSearches from '../components/top-five-searches';
import UberStatsSentiment from '../components/uber-stats-sentiment';
import UberStatsVolume from '../components/uber-stats-volume';
import UberStats from '../components/user-stats';
import {
  BigBubble,
  CoolColumn,
  GreatGuage,
  LinearLine,
  PieGraph,
  Radar,
  WordCloud,
  RadialPieChart,
  BestBar,
  USMapChart,
  WorldMapGraph,
} from '../graphs';

const handleOnClick = (event, d, i) => {
  console.log('handleOnClick', event, d, i);
};

const handleMouseOver = (event, d, i) => {
  console.log('handleMouseOver', event, d, i);
};

const handleMouseOut = (event, d, i) => {
  console.log('handleMouseOut', event, d, i);
};

const handleMouseEnter = (event, d, i) => {
  console.log('handleMouseEnter', event, d, i);
};

const handleMouseMove = (event, d, i) => {
  console.log('handleMouseMove', event, d, i);
};

const handleMouseLeave = (event, d, i) => {
  console.log('handleMouseLeave', event, d, i);
};

const events = {
  handleOnClick,
  handleMouseOver,
  handleMouseOut,
  handleMouseEnter,
  handleMouseMove,
  handleMouseLeave,
};

const graphConfig = {
  bubble: {
    enableTooltip: true,
    ...events,
  },
  column: {
    graphType: '',
    gridXYLabelFontSize: 12,
    hideYAxis: true,
    enableTooltip: true,
    ...events,
  },
  column_fixed_width: {
    graphType: 'group',
    gutterSpace: 1,
    gridXTicks: 6,
    gridYTicks: 6,
    gridLineYStroke: '#EBEBEB',
    gridLineStrokeWidth: 1,
    enableGridYLine: true,
    enableTooltip: true,
    ...events,
  },
  groupped_column: {
    graphType: 'group',
    gridYTicks: 6,
    gridLineYStroke: '#EBEBEB',
    gridLineStrokeWidth: 1,
    enableGridYLine: true,
    enableTooltip: true,
    ...events,
  },
  gauge: {
    startAngle: (-1 * Math.PI) / 2,
    endAngle: Math.PI / 2,
    enableArcBG: '#F0F2F5',
    arcDividerStrokeColor: 'none',
    innerRadius: 0.2, // 0.01 - 0.5
    enableNeedle: true,
  },
  gauge_meter: {
    startAngle: (-1 * Math.PI) / 2,
    endAngle: Math.PI / 2,
    enableArcBG: '#F0F2F5',
    arcDividerStrokeColor: 'none',
    innerRadius: 0.2, // 0.01 - 0.5
    enableNeedle: true,
  },
  gauge2d: {
    startAngle: Math.PI * -0.5,
    endAngle: Math.PI * 0.5,
    endRadius: 0,
    arcWidth: 20,
    arcPadding: 5,
    hideNeedle: false,
  },
  line: {
    // graphType: 'area',
    graphType: 'line',
    gridXYLabelFontSize: 12,
    enableCurve: true,
    enableGradient: true,
    enableAreaLine: true,
    areaLineStroke: '#E20074',
    enableTooltip: true,
    ...events,
  },
  line2d: {
    graphType: 'line',
    gridXYLabelFontSize: 12,
    enableCurve: true,
    enableGradient: true,
    enableAreaLine: true,
    areaLineStroke: '#E20074',
    enableTooltip: true,
    ...events,
  },
  donut: {
    startAngle: -1 * (Math.PI / 2),
    endAngle: Math.PI + Math.PI / 2,
    enableArcBG: '#F0F2F5',
    arcDividerStrokeColor: 'none',
    innerRadius: 0.2, // 0.01 - 0.5
    arcLabel: false,
    enablePolyline: false,
    enableCenterText: true,
    enableTooltip: true,
    ...events,
  },
  concentric_donut: {
    startAngle: Math.PI * -0.5,
    endAngle: Math.PI * 0.5,
    endRadius: 0,
    arcWidth: 20,
    arcPadding: 5,
    hideNeedle: false,
  },
  pie: {
    arcLabel: true,
    graphType: 'pie',
  },
  concentric_pie: {
    startAngle: -1 * Math.PI,
    endAngle: Math.PI,
    enableArcBG: '#F0F2F5',
    arcDividerStrokeColor: 'none',
    innerRadius: 0.2, // 0.01 - 0.5
    enablePolyline: true,
    arcLabel: true,
  },
  radar: {
    backgroundType: 'circle1',
    startAngle: -1 * Math.PI,
    endAngle: Math.PI,
    enableArcBG: '#F0F2F5',
    arcDividerStrokeColor: 'none',
    innerRadius: 0.2, // 0.01 - 0.5
    enablePolyline: true,
    arcLabel: true,
  },
  word_cloud: {},
  radial_pie: { arcLabel: true },
  bar: {},
  bar2d: { graphType: 'group' },
  usmap: {},
  worldmap: {},
  stackedBar: { graphType: 'stack' },
  butterfly: {},
};

export const graphTypes = {
  bubble: {
    label: 'Bubble',
    component: BigBubble,
    config: graphConfig.bubble,
    supportType: ['1d'],
  },
  column: {
    label: 'Column',
    component: CoolColumn,
    config: graphConfig.column,
    supportType: ['1d', '2d'],
  },
  groupped_column: {
    label: 'Groupped Column',
    component: CoolColumn,
    config: graphConfig.groupped_column,
    supportType: ['2d'],
  },
  column_fixed_width: {
    label: 'Fixed Width Column',
    component: CoolColumn,
    config: graphConfig.column_fixed_width,
    supportType: ['1d', '2d'],
  },
  gauge: {
    label: 'Gauge',
    component: GreatGuage,
    config: graphConfig.guage,
    supportType: ['1d'],
  },
  gauge_meter: {
    label: 'Gauge Meter',
    component: PieGraph,
    config: graphConfig.gauge_meter,
    supportType: ['1d'],
  },
  line: {
    label: 'Line',
    component: LinearLine,
    config: graphConfig.line,
    supportType: ['1d', '2d'],
  },
  pie: {
    label: 'Pie',
    component: PieGraph,
    config: graphConfig.pie,
    supportType: ['1d'],
  },
  donut: {
    label: 'Donut',
    component: PieGraph,
    config: graphConfig.donut,
    supportType: ['1d'],
  },
  concentric_donut: {
    label: 'Concentric Donut',
    component: GreatGuage,
    config: graphConfig.concentric_donut,
    supportType: ['2d'],
  },
  radar: {
    label: 'Radar',
    component: Radar,
    config: graphConfig.radar,
    supportType: ['1d'],
  },
  word_cloud: {
    label: 'Word Cloud',
    component: WordCloud,
    config: graphConfig.wordcloud,
    supportType: ['1d'],
  },
  radial_pie: {
    label: 'Radial Pie',
    component: RadialPieChart,
    config: graphConfig.radial_pie,
    supportType: ['1d'],
  },
  butterfly: {
    label: 'Butterfly',
    component: HorizontalMultiBar,
    config: graphConfig.butterfly,
    supportType: ['2d'],
  },
  concentric_pie: {
    label: 'Concenteric Pie',
    component: PieGraph,
    config: graphConfig.concentric_pie,
    supportType: ['1d'],
  },
  bar: {
    component: BestBar,
    config: graphConfig.bar,
    supportType: ['1d', '2d'],
  },
  us_map: {
    component: USMapChart,
    config: graphConfig.usmap,
    supportType: ['1d'],
  },
  world_map: {
    component: WorldMapGraph,
    config: graphConfig.worldmap,
    supportType: ['1d'],
  },
  grouped_bar: {
    component: BestBar,
    config: graphConfig.bar2d,
    supportType: ['2d'],
  },
  stacked_bar: {
    component: BestBar,
    config: graphConfig.stackedBar,
    supportType: ['2d'],
  },
  uber_stats: {
    component: UberStats,
    config: graphConfig.stackedBar,
    supportType: ['2d'],
  },
  uber_stats_volume: {
    component: UberStatsVolume,
    config: graphConfig.stackedBar,
    supportType: ['2d'],
  },
  uber_stats_sentiment: {
    component: UberStatsSentiment,
    config: graphConfig.stackedBar,
    supportType: ['2d'],
  },
  // profile_line , profile_radar
  profile_line: {
    label: 'Line',
    component: LinearLine,
    config: graphConfig.line,
    supportType: ['1d', '2d'],
  },
  profile_radar: {
    label: 'Radar',
    component: Radar,
    config: graphConfig.radar,
    supportType: ['1d'],
  },
};

export const overviewWidgets = {
  result_over_time: {
    label: 'Result Over Time',
    slotType: 'full',
    allowedGraphTypes: [graphTypes.column_fixed_width, graphTypes.line],
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.campaignMonitor,
  },
  media_type: {
    label: 'Media type',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.mediaType,
  },
  word_cloud: {
    label: 'World Cloud',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.journalists,
  },
  top_source: {
    label: 'Top Source',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.mediaType,
  },
  top_themes: {
    label: 'Top Themes',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.authorImpact,
  },
  outlet_breakdown: {
    label: 'Outlet Breakdown',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.mediaType,
  },
  top_author: {
    label: 'Top Author',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.topAuthor,
  },
  geographical_breakdown: {
    label: 'Geographical Breakdown',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
  },
  img: widgetImg.worldMap,
};

export const brandWidgets = {
  volume_analysis: {
    label: 'Volume Analysis',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.messageCongruence,
  },
  sentiment_analysis: {
    label: 'Sentiment Analysis',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.sentiments,
  },
  sentiment_over_time: {
    label: 'Sentiment Over Time',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.reach,
  },
  coverage_over_time: {
    label: 'Coverage Over Time',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.reach,
  },
  media_type: {
    label: 'Media Type',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.mediaType,
  },
  reach_over_time: {
    label: 'Reach Over Time',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.reach,
  },
};

export const industryWidgets = {
  volume_analysis: {
    label: 'Volume Analysis',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.messageCongruence,
  },
  sentiment_analysis: {
    label: 'Sentiment Analysis',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.sentiments,
  },
  coverage_by_journalist: {
    label: 'Coverage by Journalist',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.coverage,
  },
  coverage_by_source: {
    label: 'Coverage by Source',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.messageCongruence,
  },
  companies_mentioned: {
    label: 'Campanies Mentioned',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.mediaType,
  },
  coverage_over_time: {
    label: 'Coverage Over Time',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.coverage,
  },
  coverage_by_top_publications: {
    label: 'Coverage by top Publications',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.topAuthor,
  },
};

export const people = {
  volume_analysis: {
    label: 'Volume Analysis',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.messageCongruence,
  },
  coverage_over_time: {
    label: 'Coverage Over Time',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.coverage,
  },
  top_journalist_by_sentiment: {
    label: 'Top Journalist by Sentiment',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.sentiments,
  },
  top_source_by_sentiment: {
    label: 'Top Source by Sentiment',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.sentiments,
  },
  popular_topics: {
    label: 'Popular Topics',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.coverage,
  },
  media_type: {
    label: 'Media Type',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.mediaType,
  },
};

export const advancedDashboardWidgets = {
  campaigns_impact: {
    label: 'Campaign Monitor',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.campaignMonitor,
  },
  author_imapct: {
    label: 'Author Imapct',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.authorImpact,
  },
  sentiment_by_themes: {
    label: 'Sentiment by Themes',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.sentiments,
  },
  message_congruence_by_Media: {
    label: 'Message Congruence by Media',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.messageCongruence,
  },
  message_congruence_by_total_mentions: {
    label: 'Message Congruence by total mentions',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.messageCongruence,
  },
  pr_impact_scale: {
    label: 'PR Impact Scale',
    allowedGraphTypes: [],
    slotType: 'half',
    bentoView: {
      l0: { component: LinearLine, config: graphConfig.line },
      l1: {
        component: PieGraph,
        config: { ...graphConfig.pie, enableNeedle: false },
      },
    },
    img: widgetImg.prImpact,
  },
};

export const standardDashboards = [
  {
    label: 'Brand',
    value: 'brand',
    widgets: brandWidgets,
  },
  {
    label: 'Industry',
    value: 'industry',
    widgets: industryWidgets,
  },
  {
    label: 'People',
    value: 'people',
    widgets: people,
  },
];

export const dashboards = [
  {
    label: 'Overview',
    value: 'overview',
    widgets: overviewWidgets,
  },
  ...standardDashboards,
  {
    label: 'Advance Dashboard',
    value: 'advance_dashboard',
    widgets: advancedDashboardWidgets,
  },
];

const widgetObj = {};
dashboards.forEach((ele) => {
  widgetObj[ele.value] = ele.widgets;
});

export const widgetMapping = {
  ...widgetObj,
};

export const getDashboardWidgets = (dashboardKey) => {
  const dashBoardObj = dashboards.filter((ele) => ele.value === dashboardKey);
  const dashBoardWidgets = dashBoardObj.length
    ? Object.values(dashBoardObj[0].widgets)
    : [];
  return dashBoardWidgets;
};

export const workspaceConfig = {
  recent_searches: {
    component: RecentSearches,
  },
  top_articles: {
    component: TopFiveSearches,
  },
};
