import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import './KidsParty.css';

import OrderButton from './OrderButton';
import Header from './Header';
import MenuButton from './MenuButton';
import StartView from './StartView';
import CategoryRoot from './CategoryRoot';
import CategoryView from './CategoryView';

const category= require('../Catalog/category.json');
class KidsParty extends React.Component {

  static propTypes = {
    selectedCategoryId:PropTypes.number,
    category: PropTypes.array,
    selectedCategoryName:PropTypes.string
  };

  state = {
    selectedCategoryId:null,
    selectedCategoryName:"", 
    selectedPage:1   
  }
  selectedCategory = (itemId, itemName) => {
    if (itemId==0){
      this.setState({selectedCategoryId:null,selectedCategoryName: ""}) 
    }
    else
    this.setState({selectedCategoryId:itemId, selectedCategoryName: itemName})    
  }
  selectBasket = () => {
    this.setState({selectedCategoryId:null})
  } 

  render() {
    
    console.log(this.state.selectedCategoryId);
    
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

      <Switch>  
        <Route path="/" exact component={StartView}/> 
        <Route path="/Category-:selectedCategoryId-:pageNum" component={CategoryRoot} />
        
      </Switch>          
          
       
        
      </div>
    )
    ;

  }

}

export default KidsParty;

//<Route path="/Order" component={OrderView} />