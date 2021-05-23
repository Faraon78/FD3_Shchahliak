import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
    }),
  };

  state = {
    info: this.props.info,
  };

  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient id="+this.props.info.id+" componentWillReceiveProps");
    this.setState({info:newProps.info});
  };
  editClient=()=> {
  // let myEvents=this.props.myEvents; 
   myEvents.emit('editEvent', this.state.info.id);
   console.log("сработало событие editEvent")
  }
  render() {

    console.log("MobileClient id="+this.state.info.id+" render");
    console.log(this.props.myEvents) ;

    
    return (
      <tr key={this.props.id} className='Client' id={this.props.id}>
        <td className='fam'> {this.state.info.fam} </td>
        <td className='im'> {this.state.info.im} </td>
        <td className='otch'> {this.state.info.otch} </td>
        <td className='balance'> {this.state.info.balance} </td>
        <td className='edit'> 
          <input type= 'button' value= 'Редактировать' id={this.state.info.id} onClick={this.editClient}/>  
        </td>
        <td className='delete'> 
          <input type= 'button' value= 'Удалить'  onClick={this.deleteProduct}/> 
        </td>       
        
      </tr>  
     
    );

  }

}

export default MobileClient;
