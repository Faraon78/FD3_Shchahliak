import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combinedReducer from '../redux/reducers.js';


import './KidsParty.css';

import OrderButton from './OrderButton';
import Header from './Header';
import MenuButton from './MenuButton';
import StartView from './StartView';
import CategoryRoot from './CategoryRoot';
import CategoryView from './CategoryView';
import SellerCard from './SellerCard';
import OrderView from './OrderView';
import EndView from './EndView';

const category= require('../Catalog/category.json');
let store=createStore(combinedReducer);
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
  

  render() {
    
    var copyCategory=category;
      var mainMenu=copyCategory.map(v =>
      <MenuButton yourCategory={v}    key={v.k}  id={v.id}
      color={v.color} cbSelectedCategory={this.selectedCategory}            
      name={v.name}    
       />
    );
    
    return (
      <Provider store={store}>
      <div className='KidsParty'> 
             
      <div> 
      <OrderButton className='divButton' />
        <Header className='Header'/>
        
      </div> 
      <div className='mainMenu'>{mainMenu}</div>

      <Switch>  
        <Route path="/" exact component={StartView}/> 
        <Route path="/Category-:selectedCategoryId-page:pageNum" exact component={CategoryRoot} />
        <Route path="/Category-:selectedCategoryId-item:itemId"  component={CategoryRoot}/>
        <Route path="/Order" component={OrderView} />
        <Route path="/EndView" component={EndView} />
      </Switch>          
          
       
        
      </div>
      </Provider>
    )
    

  }

}

export default KidsParty;

