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
   console.log('функция itemclicked запущена', this.props.id);
   this.props.cbMarker(this.props.id);   
   
  }
 
  deleteProduct = (EO) => {
    
    EO.stopPropagation();
    let custom=confirm('Вы действительно хотите удалить этот товар из списка?');
    if (custom==true){
      this.props.cbDelete(this.props.id);

    }
  }
  editProduct = (EO) => {
    EO.stopPropagation();
    this.props.cbEdit(this.props.id);
  }
  
  render() {
        
    return (
      <tr key={this.props.id} className='Product' onClick={this.itemclicked} style={{backgroundColor:this.props.color}} id={this.props.id}>
        <td className ='NameProd'> {this.props.products.nameProd} </td>
        <td className ='Cost'> {this.props.products.cost} </td>
        <td className='Count'> {this.props.products.count} </td>
        <td className='Photo'>
          <img src={this.props.products.photo}/>
        </td>
        <td className = 'Edit'>
          <input type= 'button' value= 'Редактировать' id={this.props.products.id} onClick={this.editProduct}/> 
        </td>
        <td className = 'Control'>
          <input type= 'button' value= 'Удалить' name={this.props.products.id} onClick={this.deleteProduct}/> 
        </td>
      </tr>     
    )
  }
}
export default ProductRow;