import React, {Component} from 'react';
import B3 from './B3';

class B2 extends Component {
  render(){
    return(
      <div>
        <h2>B2</h2>
        <B3 btn={this.props.btn} />
      </div>
    )
  }
}

export default B2;
