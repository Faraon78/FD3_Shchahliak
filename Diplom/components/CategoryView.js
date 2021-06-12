import React from 'react';
import PropTypes from 'prop-types';

//import './CategoryView.css';

class CategoryView extends React.PureComponent {
    static propTypes = {
        sellers: PropTypes.object.isRequired,
      };
    state = {
        sellers:this.props.sellers,
        }
    render() {
        return (
            <div>{this.props.sellers}</div>
            
        )

}

}

export default CategoryView;