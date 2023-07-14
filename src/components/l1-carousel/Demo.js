import React from 'react';
import L1Carousel from '.';

import { PieGraph, RadialPieChart } from '../../graphs';
import { pieData } from '../../constants/mock';
import { configMapping } from '../../constants/widgets';
import { actualOneD } from '../../graphs/utils/mockData';

export const slides = [
  {
    component: <PieGraph data={pieData} config={configMapping.sentiments} />,
  },
  {
    component: <PieGraph data={actualOneD} config={configMapping.sov} />,
  },
  {
    component: (
      <RadialPieChart data={actualOneD} config={configMapping.radial_pie} />
    ),
  },
];

const Demo = () => {
  return (
    <div
      style={{
        width: 300,
        height: 170,
        margin: 300,
        backgroundColor: 'pink',
      }}
    >
      <L1Carousel slides={slides} />
    </div>
  );
};

export default Demo;
