import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './MenuButton.css';

class MenuButton extends React.PureComponent {

    selected = (EO) => {
        this.props.cbSelectedCategory(this.props.id, this.props.name);
        console.log('передаем родителю свой id' + this.props.id + this.props.name )
      }

    render() {    
            
        
        return (
            <div>
            {(this.props.id==0) && <NavLink to="/" exact className="PageLink" >
                <button className="mainButton"   style={{backgroundColor:this.props.color}}  id={this.props.id} 
                onClick={this.selected}>{this.props.name}</button>
            </NavLink>}

            {(this.props.id>0) && <NavLink to={`/category-${this.props.id}-1`} className="PageLink" >
                <button className="mainButton"   style={{backgroundColor:this.props.color}}  id={this.props.id} 
                onClick={this.selected}>{this.props.name}</button>
            </NavLink>}
            
            
            </div>
            
        )

}

}

export default MenuButton;
//activeClassName="ActivePageLink"