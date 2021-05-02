import React from 'react';
import PropTypes from 'prop-types';
//import '.CardView.css';

class CardView extends React.Component{
  
  static propTypes = {
    nameProd: PropTypes.string,  
    cost: PropTypes.number,
    count: PropTypes.number,
    rezult: PropTypes.array,
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
export default CardView;