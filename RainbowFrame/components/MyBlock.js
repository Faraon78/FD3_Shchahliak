import React from 'react';
import PropTypes from 'prop-types';

import './MyBlock.css';

import RainbowFrame from './RainbowFrame';

class MyBlock extends React.Component {

  render() {

    
    return (
      <div className='MyBlock'>
        
        <RainbowFrame colors={this.props.colors} className= 'frame'>
          <div className = 'child'>Hello!</div>
        </RainbowFrame>
        
      </div>
    )
    ;

  }

}

export default MyBlock;
