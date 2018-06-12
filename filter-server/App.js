"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import FilterAndSort from './components/FilterAndSort';

let defaultSorted=false;
let defaultLabelText='Sort It!';
let streetsArr=require('./streets.json');

ReactDOM.render(
  <FilterAndSort
    streets={streetsArr}
    defsorted={defaultSorted}
    deflabeltext={defaultLabelText}
  />
  , document.getElementById('container') 
);

