import React from 'react';
import PropTypes from 'prop-types';
import './CardEdit.css';

class CardEdit extends React.PureComponent{
  
  static propTypes = {
    nameProd: PropTypes.string,  
    cost: PropTypes.number,
    count: PropTypes.number,
  }
  state= {
    item:this.props.item,
    itemName:this.props.item.nameProd,
    itemCost:this.props.item.cost,
    itemCount:this.props.item.count,
    itemUrl:this.props.item.photo,
    errorName:null,
    errorCost:null,
    errorCount:null,
    errorUrl:null,
    disButtonSave:false,
    
  } 
  changedName = (EO) => {
    this.setState({itemName:EO.target.value}, console.log(this.state.itemName));
    console.log(this.state.itemName)
  }

  changedCost = (EO) => {
    this.setState({itemCost:EO.target.value}, console.log(this.state.itemCost));
    console.log(this.state.itemCost)
  }

  changedCount = (EO) => {
    this.setState({itemCount:EO.target.value}, console.log(this.state.itemCount));
    console.log(this.state.itemCount)
  }

  changedUrl = (EO) => {
    this.setState({itemUrl:EO.target.value}, console.log(this.state.itemUrl));
    console.log(this.state.itemUrl)
  }

  cbSave = () =>{    
    this.props.cbSave({...this.props.item,
      nameProd:this.state.itemName,
      cost:this.state.itemCost,
      count:this.state.itemCount,
      photo:this.state.itemUrl,
    });    
  }
  validation = () =>{
    let v1=/\S{3,}/.test(this.state.itemName);
    let v2=/\d{1,}.\d{2}/.test(this.state.itemCost);
    let v3=/\d{1,}/.test(this.state.itemCount);
    let v4=/\w{1,}.\w{1,}/.test(this.state.itemUrl);
    console.log(v1, v2, v3, v4);
    
    if(!v1){
      this.setState({errorName:'Введите название товара (не менее 3 символов)'})
    }
    else {
      this.setState({errorName:null})
    }
    if(!v2){
      this.setState({errorCost:'Введите цену товара (число с 2 знаками после точки)'})
    }
    else {
      this.setState({errorCost:null})
    }
    if(!v3){
      this.setState({errorCount:'Введите количество товара'})
    }
    else {
      this.setState({errorCount:null})
    }
    if(!v4){
      this.setState({errorUrl:'Введите url изображения'})
    }
    else {
      this.setState({errorUrl:null})
    }
    if (v1 && v2 && v3 && v4){
      this.setState ({disButtonSave:false},this.cbDisabled(false))
    }
    else {this.setState ({disButtonSave:true}, this.cbDisabled(true))};
    console.log(this.state.disButtonSave)
  }

  cbDisabled=(Boolean) =>{
    this.props.cbDisabled(Boolean);
  }

  cbCancel=()=>{
    
    this.props.cbCancel();
  }
  render() {
    console.log(this.state.item.id);
    return (
      <div>
        <h3>{this.props.nameCard}</h3>
        <label>
          <span>id: </span>
          <span>{this.state.item.id}</span>
        </label><br/>  
        <label>
          <span className='editlabel'> Наименование: </span>
          <input type='text' name='itemName' defaultValue={this.state.item.nameProd} onChange={this.changedName} onBlur={this.validation}/>
          <span className='error'>{this.state.errorName}</span>
        </label> <br/>  
        <label>
          <span className='editlabel'> Цена: </span>
          <input type='text' name='itemCost' defaultValue={this.state.item.cost} onChange={this.changedCost} onBlur={this.validation}/>
          <span className='error'>{this.state.errorCost}</span>
        </label> <br/> 
        <label>
          <span className='editlabel'> Количество: </span>
          <input type='text' name='itemCount' defaultValue={this.state.item.count} onChange={this.changedCount} onBlur={this.validation}/>
          <span className='error'>{this.state.errorCount}</span>
        </label> <br/> 
        <label>
          <span className='editlabel'> Url: </span>
          <input type='url' name='itemUrl' defaultValue={this.state.item.photo} onChange={this.changedUrl} onBlur={this.validation}/>
          <span className='error'>{this.state.errorUrl}</span>
        </label><br/> 
        <input type='button' value='Сохранить' className='button' onClick={this.cbSave} disabled={this.state.disButtonSave}/> 
        <input type='button' value='Отмена' className='button' onClick={this.cbCancel}/> 
      </div>     
    )
  }
}
export default CardEdit;