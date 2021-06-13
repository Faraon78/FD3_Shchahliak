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
        console.log(this.props.sellers);

        return (
            <div>Здесь должны быть данные</div>
            
        )

}

}

export default CategoryView;