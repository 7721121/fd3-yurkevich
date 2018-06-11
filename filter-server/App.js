"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import FilterAndSort from './components/FilterAndSort';

let defSorted=false;
let streetsArr=require('./streets.json');

ReactDOM.render(
  <FilterAndSort
    streets={streetsArr}
    defsorted={defSorted}
  />
  , document.getElementById('container') 
);

