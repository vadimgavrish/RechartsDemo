// Import dependancies
import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dataActions from '../redux/actions/dataActions';

const DataList = styled.ul`
  width: 500px;
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
    return newArr.map((entry, index) => {
      return <li key={index}>{entry.close}</li>
    });
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
