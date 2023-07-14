import graphBucket from '../utils/graphBucket';
import { initialValues } from '../utils/graphConst';
import RootGraph from '../utils/rootGraph';

class USMapGraph extends RootGraph {
  setData(data) {
    const inData = JSON.parse(JSON.stringify(data));
    this.labels = inData?.labels
      ? inData?.labels
      : [{ label: 'label', value: 'value' }];
    this.data = inData.data;
    this.summary = inData.summary;

    this.filteredData = this.data;
    const arr = data.data;
    this.graphData = Object.values(
      arr.reduce((acc, cur) => Object.assign(acc, { [cur.label]: cur }), {})
    );
  }

  setConfig(configObj = {}) {
    this.config = configObj;
  }

  drawGraph() {
    super.drawGraph();
    const config = {
      ...initialValues,
      width: this.width,
      height: this.height,
      summary: this.summary,
      labels: this.labels,
      ...this.config,
    };
    // generates the graph
    const USMap = graphBucket.usMap().config(config);

    // creates the g attribute
    const USMapGraph = this.$graphGrp.selectAll('.USMapGroup').node()
      ? this.$graphGrp.selectAll('.USMapGroup')
      : this.$graphGrp.append('g');

    USMapGraph.attr('class', 'USMapGroup').datum(this.graphData).call(USMap);
  }
}

export default USMapGraph;
