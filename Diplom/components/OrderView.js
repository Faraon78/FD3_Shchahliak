import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';
import { itemOrder_add, itemOrder_delete } from '../redux/itemsAC';

import OrderRow from './OrderRow';
import './OrderView.css';



class OrderView extends React.PureComponent {
    static propTypes = {
        //id: PropTypes.number.isRequired, // передано из родительского компонента
        //name:PropTypes.string,
        //price:PropTypes.number,
        //order:PropTypes.arrayOf(React.PropTypes.object)
         // передано из Redux
      };
  state = {
    selectData:false,
    errorItem:"",
    errorData:"",
    telNumber:"",
    errorTel:"",
    disButtonSave:false,
    textComment:"",
    errorComment:"",

  }
     
    componentDidMount(){
        window.scrollTo(0,0);
    }

    deleteRow = (itemId) => {
      this.props.dispatch( itemOrder_delete(itemId));
    } 

    setDate =(EO) => {
      this.setState({selectData:EO.target.value})
    }

    setTel =(EO) => {
      this.setState({telNumber:EO.target.value})
    }

    setComment =(EO) => {
      this.setState({textComment:EO.target.value})
    }

    validation = () => {
      let v1=this.props.order.order.length;
      let v2=this.state.selectData;
      let v3=/\d\d\d\-\d\d\-\d\d\d\d\d\d\d/.test(this.state.telNumber);
      let v4=this.state.textComment;
      
      if (v1==0){
        this.setState({errorItem:"   Выберите хотя бы одну услугу"})
      }
      else {
        this.setState({errorItem:""})
      }
      
      if (!v2){
        this.setState({errorData:"   Введите дату Вашего мероприятия"})
      }
      else {
        this.setState({errorData:""})
      }
      
      if (!v3){
        this.setState({errorTel:"   Введите номер телефона с кодом для связи в формате XXX-XX-XXXXXXX"})
      }
      else {
        this.setState({errorTel:""})
      }
      if (!v4){
        this.setState({errorComment:"   Напишите Ваш комментарий к заказу или задайте вопрос"})
      }
      else {
        this.setState({errorComment:""})
      }
      if (v1>0 && v2 && v3 && v4){
        this.setState ({disButtonSave:false})
      }
      else {this.setState ({disButtonSave:true})};
      console.log(this.state.disButtonSave)
    }
    trySaveOrder = () => {
      this.validation();
      
      console.log(this.state.disButtonSave);
      console.log("запустили сохранение заказа");
      if (this.state.disButtonSave==false && this.props.order.order.length>0 && this.state.telNumber && this.state.selectData && this.state.textComment){
        let newOrder={
          items:this.props.order.order,
          date:this.state.selectData,
          customTel:this.state.telNumber,
          comment:this.state.textComment
        }
        localStorage.kidsPartyOrder=newOrder;
        console.log(newOrder);
        this.setState({selectData:false, telNumber:"",textComment:"",disButtonSave:false,});
        for(let i=0; i<this.props.order.order.length; i++){
          let itemId=this.props.order.order[i].itemId;
          this.deleteRow(itemId);
        }
        this.props.history.push("/EndView");
        //<NavLink to={`/EndView`}></NavLink>
      }

    }

    render() {
              
      var orderItemRow=this.props.order.order.map(item =>
      //console.log(item.itemName, item.itemPrice, item.itemId),  
      <OrderRow item={item} key={item.itemId} id={item.itemId} name={item.itemName} 
      price={parseInt(item.itemPrice)}  pict={item.itemPict} cbDeleteRow={this.deleteRow}
      />,
      
      ); 
      let sum=0;
      
      for(let i=0; i<this.props.order.order.length; i++){    
        sum += ((this.props.order.order[i].itemPrice));      
      };
      console.log(this.state.selectData);
        return (
            <div className="OrderView">
               <h1>Ваш заказ</h1>
               <h3>Дата мероприятия </h3>
               <input type="date" className="date" onChange={this.setDate} onBlur={this.validation}></input><span className="Error">{this.state.errorData}</span>
               
               <table className='OrderTable'> 
                <tfoot>
                    <tr className="TableFooter">
                      <td>ИТОГО:</td>
                      <td> </td>
                      <td className="Sum">{sum} руб.<span className="Error">{this.state.errorItem}</span></td> 
                      <td></td>
                    </tr>
                  </tfoot> 
                  
                  <tbody className='OrderTableRow'>{orderItemRow}</tbody>
                       
                </table><br/>  
            <div className="tel"><span>Оставьте Ваш номер телефона для связи:</span><input type="tel" onChange={this.setTel} onBlur={this.validation} placeholder="375-ХХ-ХХХХХХХ"></input><span className="Error">{this.state.errorTel}</span> </div> <br/>   
            <div className="comment"><span>Ваш комментарий к заказу:</span> <br/><textarea onChange={this.setComment} onBlur={this.validation}></textarea><span className="Error">{this.state.errorComment}</span></div>
            <div className="submit"><input type="button" value="Отправить заказ" disabled={this.state.disButtonSave} onClick={this.trySaveOrder}/></div>
               
            </div> 
        )

}

}
const mapStateToProps = function (state) {
    return {
      // весь раздел Redux state под именем order будет доступен
      // данному компоненту как this.props.order
      order: state.order,
    };
  };
  
  export default connect(mapStateToProps)(OrderView);
