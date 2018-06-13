"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import FilterAndSort from './components/FilterAndSort';

let defaultLabelText='Сортировать A-Я ↓';
let streetsArr=require('./streets.json');

ReactDOM.render(
  <FilterAndSort
    streets={streetsArr}
    deflabeltext={defaultLabelText}
  />
  , document.getElementById('container') 
);

