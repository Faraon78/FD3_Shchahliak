import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import './KidsParty.css';

import OrderButton from './OrderButton';
import Header from './Header';
import MenuButton from './MenuButton';
import StartView from './StartView';
import CategoryRoot from './CategoryRoot';
import CategoryView from './CategoryView';

let category= require('../Catalog/category.json');
class KidsParty extends React.PureComponent {

  static propTypes = {
    selectedCategoryId:PropTypes.number,
    category: PropTypes.array,
    selectedCategoryName:PropTypes.string
  };

  state = {
    selectedCategoryId:null,
    selectedCategoryName:"",
    viewMode:0,   // вид страницы 0 - стартовая информация, 1 - категория, 10 - корзина
   
  }
  selectedCategory = (itemId, itemName) => {
    if (itemId==0){
      this.setState({selectedCategoryId:null, viewMode:0,selectedCategoryName: ""}) 
    }
    else
    this.setState({selectedCategoryId:itemId, viewMode:1,selectedCategoryName: itemName})    
  }
  selectBasket = () => {
    this.setState({viewMode:10, selectedCategoryId:null})
  } 

  render() {
    console.log("ViewMode =" + this.state.viewMode);
    
    var copyCategory=category;
      var mainMenu=copyCategory.map(v =>
      <MenuButton yourCategory={v}    key={v.k}  id={v.id}
      color={v.color} cbSelectedCategory={this.selectedCategory}            
      name={v.name}    
       />
    );
    
    return (
      <div className='KidsParty'>        
      <div> 
      <OrderButton className='divButton' cbSelectedBasket={this.selectBasket}/>
        <Header className='Header'/>
        
      </div> 
        <div className='mainMenu'>{mainMenu}</div>
        {(this.state.viewMode==0) && <StartView className='Start'/>}
        {(this.state.viewMode==1) && <CategoryRoot className='CategoryView' selectedCategoryId={this.state.selectedCategoryId} selectedCategoryName={this.state.selectedCategoryName}/>}
        {(this.state.viewMode==10) && <OrderView className='OrderView'/>}
        
      </div>
    )
    ;

  }

}

export default KidsParty;
