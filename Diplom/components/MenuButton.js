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
            <button className="mainButton" key={this.props.id}  style={{backgroundColor:this.props.color}}
            onClick={this.selected}>{this.props.name}</button>
               
            
            
        )

}

}

export default MenuButton;