import React from 'react';
import PropTypes from 'prop-types';

import './SellerRow.css';

class SellerRow extends React.PureComponent {
  itemclicked = (EO) => {
    this.props.cbChoiceSellerId(this.props.seller.id);
    console.log(this.props.seller.id);
  }    
    
    render() {
         
        return (
            <tr key={this.props.seller.id} className='ItemRow' onClick={this.itemclicked} id={this.props.seller.id}>
              <td className ='Pict'> <img src={this.props.seller.pict}/> </td>
              <td className ='ItemName'><h3> {this.props.seller.name}</h3><br/>{this.props.seller.info1} </td>
              <td className='Long'> {this.props.seller.long} минут </td>
              <td className='Price'>от {this.props.seller.price} руб.</td>
              <td className = 'ItemOrderButton'>
                <button id={this.props.seller.id} onClick={this.itemOrderButton}>Больше информации</button> 
              </td>
            </tr>     
          )

}

}

export default SellerRow;