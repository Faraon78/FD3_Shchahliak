import React from 'react';
import PropTypes from 'prop-types';
//import '.CardEdit.css';

class CardEdit extends React.Component{
  
  static propTypes = {
    
  }
  state= {
    item:{},
  } 
  render() {
    
    return (
      <div>
        <h3>{this.props.item.nameProd}</h3>
        <div>Цена: {this.props.item.cost}</div>
        <div>Количество: {this.props.item.count}</div>
      </div>     
    )
  }
}
export default CardEdit;