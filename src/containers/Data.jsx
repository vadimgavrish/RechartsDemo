// Import dependancies
import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dataActions from '../redux/actions/dataActions';
import { LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';

const DataList = styled.ul`
  width: 750px;
  height: 450px;
  overflow: scroll;
`;

const FetchButton = styled.div`
  padding: 5px;
  color: white;
  display: block;
  border-radius: 10px;
  transition: 0.3s all;
  border: 2px solid white;
  &:hover {
    color: black;
    cursor: pointer;
    background-color: white;
  }
`;

class Data extends React.Component {
  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);
    this.renderData = this.renderData.bind(this);
  }

  fetchData() {
    this.props.dataActions.dataFetch('IBM');
  }

  renderData(entries) {
    const newArr = entries.slice(Math.max(entries.length - 365, 1));

    let chartData = [];

    newArr.forEach((entry, index) => {
      let obj = {};
      let newDate = new Date(entry.date).toLocaleDateString("en-US");

      obj.index = index;
      obj.value = entry.close.toFixed(2);
      obj.date = newDate;


      chartData.push(obj);
    });

    return (
      <LineChart width={700} height={400} data={chartData}>
        <Tooltip cursor={false} formatter={value => ['$' + value, 'Price']} />
        <Line strokeWidth={3} type="monotone" dot={false} dataKey="value" stroke="#8884d8" />
        <XAxis
          dataKey='date'
          axisLine={false}
          tickLine={false}
          tick={{fill: 'white'}}
          angle={-25}
          textAnchor="end"
          height={50}
        />
        <YAxis
          width={150}
          axisLine={false}
          tickLine={false}
          tick={{fill: 'white'}}
          tickFormatter={(tick) => '$' + tick}
          domain={['dataMin', 'dataMax']}
        />
      </LineChart>
    );
  }

  render() {
    return (
      <div>
        {this.props.data.length > 1 ?
            <DataList>
              {this.renderData(this.props.data)}
            </DataList>
          :
            <FetchButton onClick={this.fetchData}>
              Fetch Data
            </FetchButton>
        }
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dataActions: bindActionCreators(dataActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Data);
