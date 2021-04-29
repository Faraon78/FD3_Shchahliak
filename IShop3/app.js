"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import ShopTable from './Components/IShop3';


    var shopName='Оптовый магазин канцтоваров';
    var productHead={nameProd:'Наименование товаров',cost:'Отпускная цена за 1 ед.', photo: 'Изображение', count: 'Остаток на складе', control: 'Удалить' };   
    var productArr=require('./products.json');

    ReactDOM.render(
      <ShopTable
        products={productArr}
        shop={shopName}
        tableHead={productHead}
      />   
      , document.getElementById('container') 
    );
