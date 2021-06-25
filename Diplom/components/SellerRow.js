import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './SellerRow.css';

class SellerRow extends React.PureComponent {
  itemclicked = () => {
    console.log(this.props.id);
    this.props.cbChoiceSellerId(this.props.id);
    
  }    
    
    render() {
     // console.log("Запустили рендер SellerRow");
        return (
            <tr key={this.props.id} className='ItemRow' id={this.props.id}>
              <td className ='Pict'> <img src={this.props.pict}/> </td>
              <td className ='ItemName'><h3> {this.props.seller.name}</h3><br/>{this.props.seller.info1} </td>
              <td className='Long'> {this.props.seller.long} минут </td>
              <td className='Price'>от {this.props.seller.price} руб.</td>
              <td className = 'ItemOrderButton'>
                <NavLink to={`/Category-${this.props.selectedCategoryId}-Item${this.props.id}`}>
                  <button id={this.props.id} onClick={this.itemclicked}>Больше информации</button> 
                </NavLink>  
              </td>
            </tr>     
          )
          
}

}

export default SellerRow;