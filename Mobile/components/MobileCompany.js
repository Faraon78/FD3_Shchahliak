import React from 'react';
import PropTypes from 'prop-types';
import EventEmitter from 'events';

import MobileClient from './MobileClient';
import CardEdit from './CardEdit';

import './MobileCompany.css';
import './CardEdit.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
    cardMode:0,           //0 - нет карточки продукта, 1 - режим редактирования, 2 режим ввода нового товара
    selectedClientId:null,
  };

  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };
  
  setBalance = (clientId,newBalance) => {
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    newClients.forEach( (c,i) => {
      if ( c.id==clientId ) {
      //if ( c.id==clientId && c.balance!=newBalance ) {
        let newClient={...c}; // копия хэша изменившегося клиента
        newClient.balance=newBalance;
        newClients[i]=newClient;
      }
    } );
    this.setState({clients:newClients});
  };  

  componentDidMount=()=>{
    let myEvents=new EventEmitter();
    myEvents.addListener('editEvent', this.myEditEvent);
    console.log(myEvents)
  }
  myEditEvent =(id) =>{
    this.setState({cardMode:1, selectedClientId:id})
  }

  
  
 
  
  render() {

    console.log("MobileCompany render");
    console.log(this.myEvents);

    var clientsCode=this.state.clients.map( client =>
      <MobileClient key={client.id} info={client} myEvents={this.myEvents}/> 
    );

    return (
      <div className='MobileCompany'>
        <input type="button" value="=МТС" onClick={this.setName1} />
        <input type="button" value="=Velcom" onClick={this.setName2} />
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <input type="button" value="Все"/>
        <input type="button" value="Активные"/>
        <input type="button" value="Заблокированные"/>
        <table className='Table'>
          <tbody className='TableHead'> 
            <tr> 
              <th className='fam'> {this.props.tableHead.fam} </th>
              <th className='im'> {this.props.tableHead.im} </th>
              <th className='otch'> {this.props.tableHead.otch} </th>
              <th className='balance'> {this.props.tableHead.balance} </th>
              <th className='edit'> {this.props.tableHead.edit} </th>
              <th className='delete'> {this.props.tableHead.delete} </th>
            </tr>      
          </tbody>
          <tbody className='MobileCompanyClients'>{clientsCode}</tbody>      
        </table> 
        
        <input type="button" value="Добавить клиента" onClick={this.setBalance1} />
        
        {(this.state.cardMode==1) && <CardEdit className='Card' item ={itemEditProps} key={this.state.selectedClientId} 
        nameCard='Редактирование текущего товара'/>}
        {(this.state.cardMode==2) && <CardNew className='Card' 
        nameCard='Ввести новый товар'  items={this.state.items}/>}  
      </div>
    )
    ;

  }

}

export default MobileCompany;
