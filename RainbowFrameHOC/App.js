"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MyBlock from './components/MyBlock';

let colorsArr = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let caption1= 'Press me';
let caption2= 'Tap me';

ReactDOM.render(
  <MyBlock 
    colors={colorsArr}
    caption1={caption1}
    caption2={caption2}
  
  />
  , document.getElementById('container') 
);

