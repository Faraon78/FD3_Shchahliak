"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MyBlock from './components/MyBlock';

let colorsArr = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

ReactDOM.render(
  <MyBlock 
    colors={colorsArr}
  
  />
  , document.getElementById('container') 
);

