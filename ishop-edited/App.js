"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import IShopEdited from './components/IShopEdited';

let goodsHeadArr = [
  { nameHead: 'Наименование', priceHead: 'Цена', imageHead: 'Изображение', countsHead: 'В наличии' }
];
let goodsArr=require('./goods.json');

ReactDOM.render(
  <IShopEdited
    goods={goodsArr}
    goodsHead={goodsHeadArr}
  />
  , document.getElementById('container') 
);

