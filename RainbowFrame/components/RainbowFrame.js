import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired,
  };

  
  
  render() {
    let code = this.props.children;    
    
    for (var i=0; i< this.props.colors.length; i++){
      code=<div style={{border:"solid 6px "+this.props.colors[i],padding:"10px"}}>{code}</div>      
    }
    
    return code
      
  }

}

export default RainbowFrame;
