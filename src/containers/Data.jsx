// Import dependancies
import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dataActions from '../redux/actions/dataActions';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const DataList = styled.ul`
  width: 600px;
  height: 300px;
  overflow: scroll;
  border: 1px solid cyan;
`;

const FetchButton = styled.div`
  display: block;
  border: 1px solid cyan;
  &:hover {
    cursor: pointer;
  }
`;

class Data extends React.Component {
  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);
    this.renderData = this.renderData.bind(this);
  }

  fetchData() {
    this.props.dataActions.dataFetch('AAPL');
  }

  renderData(entries) {
    const newArr = entries.slice(Math.max(entries.length - 365, 1));

    console.log(newArr);

    return (
      <LineChart width={600} height={300} date={newArr}>
        <Line type='monotone' dataKey='close' stroke='#8884d8' />
        <CartesianGrid srtoke='#ccc' />
        <XAxis dataKey='date' />
        <YAxis />
      </LineChart>
    );

    // return newArr.map((entry, index) => {
    //   return <li key={index}>{entry.close}</li>
    // });xz
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
