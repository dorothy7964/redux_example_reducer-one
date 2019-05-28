import React, {Component} from 'react';
import {connect} from 'react-redux';
import A3 from './A3';

class A2 extends Component {
  render(){
    return(
      <div>
        <h2>A2</h2>
        <div>{this.props.num}</div>
        <div>스토어에서 가져온 데이터 : {this.props.storeNum}</div>

        <A3 num={this.props.num} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    storeNum : state.control.count
  }
}

// connect(데이터관련된것을 가져옴, 액션가져옴)
export default connect(mapStateToProps,null)(A2);
