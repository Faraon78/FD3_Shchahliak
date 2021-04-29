import React from 'react';
import PropTypes from 'prop-types';
import './Product3.css';

class ProductRow extends React.Component{
  
  static propTypes = {
    nameProd: PropTypes.string,  
    cost: PropTypes.number,
    count: PropTypes.number,
    rezult: PropTypes.array,
  }
    
  itemclicked = (EO) => {   
   this.props.cbMarker(this.props.products.code)   
  }
 
  deleteProduct = (EO) => {
    let custom=confirm('Вы действительно хотите удалить этот товар из списка?');
    if (custom==true){
      this.props.cbDelete(this.props.products.code)
    }
  }
  
  render() {
    
    return (
      <tr key={this.props.products.code} className='Product' onClick={this.itemclicked} style:backgroundColor={this.props.color}>
        <td className ='NameProd'> {this.props.products.nameProd} </td>
        <td className ='Cost'> {this.props.products.cost} </td>
        <td className='Count'> {this.props.products.count} </td>
        <td className='Photo'>
          <img src={this.props.products.photo}/>
        </td>
        <td className = 'Control'>
          <input type= 'button' value= 'Удалить' name={this.props.products.code} onClick={this.deleteProduct}/> 
        </td>
      </tr>     
    )
  }
}
export default ProductRow;