import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

class Header extends React.PureComponent {
    render() {
        return (
            <div className="Header">
                <div className="HeaderName">KidsParty.by</div>
                <div className="HeaderText">Сделаем детский праздник вместе !</div>
            </div>
            
        )

}

}

export default Header;


        