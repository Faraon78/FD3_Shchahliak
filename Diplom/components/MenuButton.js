import React from 'react';
import PropTypes from 'prop-types';

import './MenuButton.css';

class MenuButton extends React.PureComponent {

    selected = (EO) => {
        this.props.cbSelectedCategory(this.props.id);
        console.log('передаем родителю свой id' + this.props.id)
      }

    render() {    
            
        
        return (
            <input type="button" className="mainButton" key={this.props.id} value= {this.props.name} style={{backgroundColor:this.props.color}}
            onClick={this.selected}/>
               
            
            
        )

}

}

export default MenuButton;