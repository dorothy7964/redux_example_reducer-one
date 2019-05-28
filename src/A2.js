import React from 'react';
import {connect} from 'react-redux';
import A3 from './A3';

const A2 = ({ num, storeNum }) => {
  return (
    <div>
      <h2>A2</h2>
      <div>{num}</div>
      <div>스토어에서 가져온 데이터 : {storeNum}</div>

      <A3 num={num} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    storeNum : state.control.count
  }
}

export default connect(mapStateToProps,null)(A2);
