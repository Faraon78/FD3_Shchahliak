import React from 'react';
import PropTypes from 'prop-types';

import './IShop3.css';
import ProductRow from './Product3';
import CardView from './CardView';
import CardEdit from './CardEdit';

class ShopTable extends React.Component{

  static  propTypes = {
    selectedItemId: PropTypes.number,
    
  };
   
  state = {    
    selectedItemId:null,
    items:this.props.products,
    cardMode:0           //0 - нет карточки продукта, 1 - режим просмотра, 2 режим редактирования
  }

  itemMarkered = (id) => {
    console.log('функция itemMarkered запущена', id)
    this.setState({selectedItemId:id, cardMode:1}, console.log(this.state.selectedItemId, this.state.cardMode));
  } 

  itemDelete = (id) => {
    var filteredItems=this.state.items.filter(el => el.id!=id);
    this.setState({items:filteredItems});
  }

  //itemEdit = (code) => {
  //  this.setState({cardMode:2, selectedItemCode:code});
 // } 

  render (){
    let productsCode=[];
    let productCode;
                
    for ( var a=0; a<this.state.items.length; a++ ){ 
      if (this.state.items[a].id==this.state.selectedItemId){ 
        {productCode=React.createElement(ProductRow, {products:this.state.items[a], key:this.state.items[a].id, id:this.state.items[a].id,
          cbMarker:this.itemMarkered, cbDelete:this.itemDelete, cbEdit:this.itemEdit,  color:'#f5ab16'});  
      productsCode.push(productCode);
      console.log(this.state.items[a].id);
      }   
            
            productsCode.push(productCode);
            } 
         
      else {productCode=React.createElement(ProductRow, {products:this.state.items[a], key:this.state.items[a].id, id:this.state.items[a].id,
              cbMarker:this.itemMarkered, cbDelete:this.itemDelete, cbEdit:this.itemEdit});  
          productsCode.push(productCode);
          console.log(this.state.items[a].id, this.state.selectedItemId, this.state.cardMode);
          }         
    }   
    let itemEditProps =this.state.items.find (item=>item.id=this.state.selectedItemId); 
    //, {key:this.itemEditProps.code, item:this.itemEditProps}
    //, {key:this.itemEditProps.code, item:this.itemEditProps}
    //{ (this.state.cardMode=1) && <div className='Card'>{CardView}</div>}
    //{ (this.state.cardMode=2) && <div className='Card'>{CardEdit}</div>}

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
              <th className='Edit'> {this.props.tableHead.edit} </th>
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