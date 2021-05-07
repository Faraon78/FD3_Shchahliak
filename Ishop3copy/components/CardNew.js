import React from 'react';
import PropTypes from 'prop-types';
//import '.CardNew.css';

class CardNew extends React.Component{
  
  static propTypes = {
    itemName: PropTypes.string,  
    itemCost: PropTypes.number,
    itemCount: PropTypes.number,
    itemId:PropTypes.number
  }
  state= {
    items:this.props.items,
    itemId:'',
    itemName:'',
    itemCost:'',
    itemCount:'',
    itemUrl:'',
    errorName:null,
    errorCost:null,
    errorCount:null,
    errorUrl:null,
    errorId:null,
    disButtonSave:false,
    
  } 

  changedId= (EO) => {
    this.setState({itemId:EO.target.value});
  }
  changedName = (EO) => {
    this.setState({itemName:EO.target.value});
  }

  changedCost = (EO) => {
    this.setState({itemCost:EO.target.value});
  }

  changedCount = (EO) => {
    this.setState({itemCount:EO.target.value});
  }

  changedUrl = (EO) => {
    this.setState({itemUrl:EO.target.value});
  }

  new = () =>{   
    this.validation();
    console.log(this.state.disButtonSave);
    if (!this.state.disButtonSave && !this.state.errorId){this.cbNew()}
  }
  cbNew = () =>{  
    if (!this.state.disButtonSave && !this.state.errorId && this.state.itemId){ 
    this.props.cbAddNew({
      id:this.state.itemId,
      nameProd:this.state.itemName,
      cost:this.state.itemCost,
      count:this.state.itemCount,
      photo:this.state.itemUrl,
    })  
    }  
  }
  validation = () =>{
    console.log('Запустилась validation');
    let v0=/\S{1,}/.test(this.state.itemId);
    let v1=/\S{3,}/.test(this.state.itemName);
    let v2=/\d{1,}.\d{2}/.test(this.state.itemCost);
    let v3=/\d{1,}/.test(this.state.itemCount);
    let v4=/\w{1,}.\w{1,}/.test(this.state.itemUrl);
    console.log(v0, v1, v2, v3, v4);
    if(!v0){
      this.setState({errorId:'Введите уникальный код товара'}, console.log('сработал if'))
    }
    else {
      this.setState({errorId:null})
    
    if (this.props.items.some (el => el.id==this.state.itemId)){
      this.setState({errorId:'Ваш код не уникальный, введите другой'})
    }
    else {
      this.setState({errorId:null})
    }
  }
    if(!v1){
      this.setState({errorName:'Введите название товара (не менее 3 символов)'}, console.log('сработал if'))
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
    console.log(this.state.disButtonSave, this.state.errorName, this.state.errorCount)
  
  }
  cbDisabled=(Boolean) =>{
    this.props.cbDisabled(Boolean);
  }

  cbCancel=()=>{
    
    this.props.cbCancel();
  }
  render() {
    //console.log(this.state.item.id);
    return (
      <div>
        <h3>{this.props.nameCard}</h3>
        <label>
          <span className='editlabel' >id: </span>
          <input type='text' name='itemId' onChange={this.changedId} onBlur={this.validation}/>
          <span className='error'>{this.state.errorId}</span>
        </label><br/>  
        <label>
          <span className='editlabel'> Наименование: </span>
          <input type='text' name='itemName'  onChange={this.changedName} onBlur={this.validation}/>
          <span className='error'>{this.state.errorName}</span>
        </label> <br/>  
        <label>
          <span className='editlabel'> Цена: </span>
          <input type='text' name='itemCost' onChange={this.changedCost} onBlur={this.validation}/>
          <span className='error'>{this.state.errorCost}</span>
        </label> <br/> 
        <label>
          <span className='editlabel'> Количество: </span>
          <input type='text' name='itemCount'  onChange={this.changedCount} onBlur={this.validation}/>
          <span className='error'>{this.state.errorCount}</span>
        </label> <br/> 
        <label>
          <span className='editlabel'> Url: </span>
          <input type='url' name='itemUrl'  onChange={this.changedUrl} onBlur={this.validation}/>
          <span className='error'>{this.state.errorUrl}</span>
        </label><br/> 
        <input type='button' value='Сохранить' onClick={this.new} disabled={this.state.disButtonSave}/> 
        <input type='button' value='Отмена' onClick={this.cbCancel}/> 
      </div>     
    )
  }
}
export default CardNew;