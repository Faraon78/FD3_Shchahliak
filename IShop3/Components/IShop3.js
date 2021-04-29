import React from 'react';
import PropTypes from 'prop-types';

import './IShop3.css';
import ProductRow from './Product3';

class ShopTable extends React.Component{

  static  propTypes = {
    selectedItemCode: PropTypes.number,
    
  };
   
  state = {    
    selectedItemCode:null,
    items:this.props.products,
  }

  itemMarkered = (code) => {
    this.setState({selectedItemCode:code});
  } 

  itemDelete = (code) => {
    var filteredItems=this.state.items.filter(el => el.code!=code);
    this.setState({items:filteredItems});
  }

  render (){
    var productsCode=[];
    var productCode;
                
    for ( var a=0; a<this.state.items.length; a++ ){ 
      if (this.state.items[a].code==this.state.selectedItemCode){ 
            productCode=React.createElement(ProductRow, 
            {products:this.state.items[a], key:this.state.items[a].code, cbMarker:this.itemMarkered, cbDelete:this.itemDelete,
            color:'orange'}), 
            productsCode.push(productCode);
            } 
         
      else {productCode=React.createElement(ProductRow, {products:this.state.items[a], key:this.state.items[a].code, 
              cbMarker:this.itemMarkered, cbDelete:this.itemDelete});  
          productsCode.push(productCode);
          }
    }   
    
      
    return (
      <div className='ShopTable'>
        <h1 className='Header'> {this.props.shop} </h1> 
        <table className='Table'>
          <tbody className='TableHead'> 
            <tr> 
              <th className='NameProd'> {this.props.tableHead.nameProd} </th>
              <th className='Cost'> {this.props.tableHead.cost} </th>
              <th className='Count'> {this.props.tableHead.count} </th>
              <th className='Photo'> {this.props.tableHead.photo} </th>
              <th className='Control'> {this.props.tableHead.control} </th>
            </tr>      
          </tbody>
          <tbody className='TableRow'>{productsCode}</tbody>
      
        </table>
      </div>
    )
  }    
}
export default ShopTable