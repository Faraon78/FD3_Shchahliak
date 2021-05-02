"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import ShopTable from './components/IShop3';

    var shopName='Оптовый магазин канцтоваров';
    var productHead=require('./tableHead.json');  
    var productArr=require('./products.json');

ReactDOM.render(
  <ShopTable 
    products={productArr}
    shop={shopName}
    tableHead={productHead} 
  />, 
document.getElementById('container') 
);