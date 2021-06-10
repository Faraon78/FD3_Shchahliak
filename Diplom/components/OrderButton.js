import React from 'react';
import PropTypes from 'prop-types';

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
            <button onClick={this.selectedBasket}><b>Moй выбор</b> <br/>выбрано:  {this.state.selectedPosition} </button>
              </div> 
            
            
        )

}

}

export default OrderButton;