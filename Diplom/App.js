"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import KidsParty from './components/KidsParty';

let category= require('./Catalog/category.json');

var ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";

//




ReactDOM.render(
  <KidsParty
    category={category}     
  />
  , document.getElementById('container') 
);

