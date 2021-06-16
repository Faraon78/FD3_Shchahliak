"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import PagesRouter from './pages/PagesRouter';
//import PagesLinks from './pages/PagesLinks';


//let sellers=require('./Catalog/cat3animator.json');


ReactDOM.render(
  <BrowserRouter>
    
    <PagesRouter  />
    
  </BrowserRouter>
  , document.getElementById('container') 
);

//<KidsParty
    //  category={category}    
    //  sellers={sellers} 
    //> <PagesLinks />