import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



import './OrderRow.css';

class OrderRow extends React.PureComponent {

  state = {
    className:"ItemRow",
    
  }
  
  deleteClicked = (EO) => {
    console.log("запустили deleteClicked");
    this.setState({className:"ItemRow-Active"}, )
    setTimeout( () => { this.props.cbDeleteRow(this.props.id) } ,3000);    ;      
    } 

    render() {
      return (
            <tr key={this.props.id} id={this.props.id} 
            className={ this.state.className}
            
           
            >
              <td className ='orderPict'> <img src={this.props.pict}/> </td>
              <td className ='orderItemName'><h3> {this.props.name}</h3></td>
              <td className='orderPrice'>{this.props.price} руб.</td>
              <td >
                <button className = 'ItemOrderButton' id={this.props.id} onClick={this.deleteClicked}>Удалить</button>                 
              </td>
            </tr>     
          )
          
}

}

export default OrderRow;