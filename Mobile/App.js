"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let companyName='Velcom';
let clientsArr=[ 
  {id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200}, 
  {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:250}, 
  {id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:180},
  {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:-220},
];
let tableHead={
  fam:"Фамилия", im:"Имя", otch:"Отчество", balance: 'Баланс',
  status:"Статус", edit:"Редактировать", delete:"Удалить"}


ReactDOM.render(
  <MobileCompany 
    name={companyName}
    clients={clientsArr}
    tableHead={tableHead}
  />
  , document.getElementById('container') 
);

