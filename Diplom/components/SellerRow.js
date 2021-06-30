import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import { itemOrder_add, itemOrder_delete } from '../redux/itemsAC';

import './SellerRow.css';

class SellerRow extends React.PureComponent {
  itemclicked = () => {
    //console.log(this.props.id);
    this.props.cbChoiceSellerId(this.props.id);
    
  }    
  addToOrder =() =>{
        
    this.props.dispatch( itemOrder_add(this.props.id, this.props.name, this.props.price, this.props.pict) );
}      
    render() {
      console.log(this.props.bgColor);
        return (
            <tr key={this.props.id} className='ItemRow' id={this.props.id} style={{backgroundColor:this.props.bgColor}}>
              <td className ='Pict'> <img src={this.props.pict}/> </td>
              <td className ='ItemName'><h3> {this.props.seller.name}</h3><br/>{this.props.seller.info1} </td>
              {(!this.props.seller.long) && <td className='Long'></td>}
              {(this.props.seller.long) && <td className='Long'> {this.props.seller.long} минут </td>}
              <td className='ItemPrice'>от {this.props.seller.price} руб.</td>
              <td >
                <NavLink to={`/Category-${this.props.selectedCategoryId}-Item${this.props.id}`}>
                  <button className = 'ItemOrderButton' id={this.props.id} onClick={this.itemclicked}>Больше информации</button> 
                </NavLink>  
                <button className = 'ItemOrderButton' onClick={this.addToOrder}>Добавить в заказ</button>
              </td>
            </tr>     
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

export default connect(mapStateToProps)(SellerRow);
//export default SellerRow;