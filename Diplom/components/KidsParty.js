import React from 'react';
import PropTypes from 'prop-types';

import './KidsParty.css';

import OrderButton from './OrderButton';
import Header from './Header';
import MenuButton from './MenuButton';
import StartView from './StartView';
import CategoryRoot from './CategoryRoot';

class KidsParty extends React.PureComponent {

  static propTypes = {
   
  };

  state = {
    selectedCategoryId:null,
    viewMode:0,   // вид страницы 0 - стартовая информация, 1 - категория, 10 - корзина
  }
  selectedCategory = (id) => {
    this.setState({selectedCategoryId:id, viewMode:1}, console.log('выбрана категория '+ this.state.selectedCategoryId))    
  }
  selectBasket = () => {
    this.setState({viewMode:10, selectedCategoryId:null})
  } 

  render() {
    console.log("ViewMode =" + this.state.viewMode);
    var mainMenu=this.props.category.map(v =>
      <MenuButton yourCategory={v} key={v.id} id={v.id}  
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
        {(this.state.viewMode==1) && <CategoryRoot className='CategoryView' selectedCategory={this.state.selectedCategoryId}/>}
        {(this.state.viewMode==10) && <OrderView className='OrderView'/>}
        
      </div>
    )
    ;

  }

}

export default KidsParty;
