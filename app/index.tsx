import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/Hello';
import HelloWorld from './components/HelloWorld';

ReactDOM.render(
  <div>
    <Hello compiler="TypeScript" framework="React" />
    <HelloWorld />
  </div>,
  document.getElementById('example'),
);
