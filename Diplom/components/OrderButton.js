import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './OrderButton.css';

class OrderButton extends React.PureComponent {
    state = {
        selectedPosition:0,
    }

    selectedBasket = () => {
        this.props.cbSelectedBasket();
        console.log('запускаем корзину')
      }

    render() {    
            
        
        return (
            <div className="orderButton">
            <button onClick={this.selectedBasket}><b>Moй выбор</b> <br/>выбрано:  {this.props.order.length} </button>
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