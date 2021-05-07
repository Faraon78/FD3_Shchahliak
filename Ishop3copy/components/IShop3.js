import React from 'react';
import PropTypes from 'prop-types';

import './IShop3.css';
import ProductRow from './Product3';
import CardView from './CardView';
import CardEdit from './CardEdit';
import CardNew from './CardNew';

class ShopTable extends React.Component{

  static  propTypes = {
    selectedItemId: PropTypes.number,
    disRow: PropTypes.bool,
    items: PropTypes.array,
  };
   
  state = {    
    selectedItemId:null,
    items:this.props.products,
    cardMode:0,           //0 - нет карточки продукта, 1 - режим просмотра, 2 режим редактирования, 3 режим ввода нового товара
    disRow:false,  // показатель блокировки изменения строк при редактировании одной из них
  }

  itemMarkered = (id) => {
    //console.log('функция itemMarkered запущена', id)
    this.setState({selectedItemId:id, cardMode:1}, console.log ('cardMode ' + this.state.cardMode));
    
  } 

  itemDelete = (id) => {
    //console.log('функция itemDelete запущена');
    var filteredItems=this.state.items.filter(el => el.id!=id);
    this.setState({items:filteredItems}, console.log ('cardMode ' + this.state.cardMode));
    
  }

  itemEdit = (id) => {
    this.setState({cardMode:2, selectedItemId:id});
  }

  itemSave = (newItem) =>{
    let item=this.state.items.map(el => (el.id==newItem.id)
    ?
      newItem
    :
      el
    );    
    console.log(item)
    this.setState({items:item, cardMode:0})    
  }

  itemSaveNew =(addItem) =>{
    console.log(addItem);
    //let addItems=this.state.items.push(addItem);
    this.state.items.push(addItem);
    //console.log(addItems);
    this.setState({items:this.state.items, cardMode:0});
    console.log(this.state.items);
  }

  cancel = () =>{ 
    this.setState({cardMode:0, disRow:false})
  }
  disabledRow = (Boolean) => {
    this.setState ({disRow:Boolean})
    console.log (this.state.disRow)
  }

  newProduct = () =>{
    this.setState({cardMode:3})
  }


  render (){
    var productsCode=this.state.items.map(v =>
    <ProductRow products={v} key={v.id} id={v.id}     
    color={
      (v.id==this.state.selectedItemId) && ('#f5ab16')}       
            
      cbMarker={(!this.state.disRow)&& this.itemMarkered} // коллбэки работают только если не идет редактирование строки
      cbDelete={(!this.state.disRow)&& this.itemDelete} 
      cbEdit={(!this.state.disRow)&&this.itemEdit}
     />
    );
     
    let itemEditProps =this.state.items.find (item=>(item.id==this.state.selectedItemId));
    //console.log('itemEditProps ' +itemEditProps, 'cardMode '+ this.state.cardMode)
       
        
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
        <input type='button' className='newBut' value='Новый товар' disabled={this.state.disRow} onClick={this.newProduct}/>

        {(this.state.cardMode==1) && <CardView className='Card' item ={itemEditProps}/>}
        {(this.state.cardMode==2) && <CardEdit className='Card' item ={itemEditProps} key={this.state.selectedItemId} cbSave={this.itemSave} cbCancel={this.cancel} cbDisabled={this.disabledRow}
        nameCard='Редактирование текущего товара'/>}
        {(this.state.cardMode==3) && <CardNew className='Card' cbAddNew={this.itemSaveNew} cbCancel={this.cancel} cbDisabled={this.disabledRow}
        nameCard='Ввести новый товар'  items={this.state.items}/>}
      </div>
    )
  }  
}
export default ShopTable