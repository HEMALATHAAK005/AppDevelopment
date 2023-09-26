import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux

import App from './App'; // Your root component
import store from './Component/Redux/store';


ReactDOM.render(
  <Provider store={store}> {/* Wrap your entire app with the Provider */}
    <App />
  </Provider>,
  document.getElementById('root')
);



