import React, {Component} from 'react';
import A3 from './A3';

class A2 extends Component {
  render(){
    return(
      <div>
        <h2>A2</h2>
        <div>{this.props.num}</div>

        <A3 num={this.props.num} />
      </div>
    );
  }
}

export default A2;
