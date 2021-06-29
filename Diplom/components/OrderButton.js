import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

import './OrderButton.css';

class OrderButton extends React.Component {
    state = {
        selectedPosition:0,
    }

    selectedBasket = () => {
        
        console.log('запускаем корзину')

      }

    render() {    
      //console.log(this.props.order.order, this.props.order.order.length);   
        
        return (
            <div className="orderButton">
            <NavLink to="/Order"  className="PageLink" ><button onClick={this.selectedBasket}><b>Ваш выбор</b> <br/>выбрано:  {this.props.order.order.length} </button></NavLink>
              </div> 
            
            
        )

}

}
const mapStateToProps = function (state) {
  return {
    // весь раздел Redux state под именем order будет доступен
    // данному компоненту как this.props.order
    order: state.order,
  };
};

export default connect(mapStateToProps)(OrderButton);

//export default OrderButton;