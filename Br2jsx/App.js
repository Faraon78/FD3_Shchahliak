"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Br2jsx from './components/Br2jsx';

let text="первый<br>второй<br/>третий<br />последний";

ReactDOM.render(
  <div>
   <Br2jsx 
    text={text}/>
  
    </div>
  , document.getElementById('container') 
);

