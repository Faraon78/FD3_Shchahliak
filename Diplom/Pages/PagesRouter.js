import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import KidsParty from '../components/KidsParty';
import MenuButton from '../components/MenuButton';
import CategoryRoot from '../components/CategoryRoot';


class PagesRouter extends React.Component {
          
  render() {
    return (
      <div>
        <KidsParty/>       
        
        
      </div>
    );
    
  }

}
//
    
export default PagesRouter;

//<Route path="/category" component={KidsParty <CategoryRoot> }/>//<Route path="/" exact component={KidsParty}/>  
//<Route path="/Category/:selectedCategoryId" render={(props) =><CategoryRoot className='CategoryView'/>} />
//          selectedCategoryName={this.state.selectedCategoryName}/>} />
//<Route path="/Category/:selectedCategoryId" render={props =><h1>сработал PagesRouter</h1>} />