﻿"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/RainbowFrame';

let colorsArr=require('./colors.json');

ReactDOM.render(
  <RainbowFrame
    colors={colorsArr}
  />
  , document.getElementById('container') 
);

