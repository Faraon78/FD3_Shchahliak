import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';
import { itemOrder_add, itemOrder_delete } from '../redux/itemsAC';

import './SellerCard.css';

//const history = useHistory();
class SellerCard extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired, // передано из родительского компонента
        name:PropTypes.string,
        price:PropTypes.number,
        //order:PropTypes.arrayOf(React.PropTypes.object)
         // передано из Redux
      };
        
      addToOrder =() =>{
        
        this.props.dispatch( itemOrder_add(this.props.id, this.props.name, this.props.price, this.props.pict) );
    }    
    componentDidMount(){
        window.scrollTo(0,0);
    }
    render() {
        
    console.log(this.props.order, this.props.order.length);
    //console.log(history);
                   
        return (
            <div>
                <div className="sellerCard">
                    <h2>{this.props.name}</h2>
                    <div className= "cardInfo1">{this.props.info1}</div>
                    <br/>
                    <div className= "cardInfo2">{this.props.info2}</div>  
                    <br/>             
                    <div className= "cardLong">Продолжительность <strong> {this.props.long} минут</strong></div>
                <br/>
                    <div className= "cardPrice">Стоимость <strong> от {this.props.price} руб.</strong></div>
                    <br/>
                    {(this.props.adrs) && <div className= "cardAdrs">Местонахождения: {this.props.adrs} </div>} 
                    {(this.props.url) && <div className= "cardUrl">Сайт: <a href={this.props.url} target_blank>{this.props.url}</a> </div>}
                    <br/>
                    <div className="cardButton">
                        <button onClick={this.addToOrder}>Добавить в заказ</button>
                        <NavLink to={`/Order`}><button onClick={this.goOrder}>Оформить заказ</button></NavLink>
                    </div>
                </div>
                <div className ="sellerCardImg"><img src={this.props.pict}/></div>
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
  
  export default connect(mapStateToProps)(SellerCard);
//export default SellerCard;
