import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import KidsParty from '../components/KidsParty';


//import Page_About from './Page_About';
//import Page_Company from './Page_Company';
//import Page_Clients from './Page_Clients';
//import Page_Client from './Page_Client';

class PagesRouter extends React.Component {
          
  render() {
    return (
      <div>
        <Route path="/" exact component={KidsParty} />
                
      </div>
    );
    
  }

}
    
export default PagesRouter;
//    <Route path="/company" component={Page_Company} /> 
//<Route path="/clients" component={Page_Clients} />
//<Route path="/client/:clid" component={Page_Client} />