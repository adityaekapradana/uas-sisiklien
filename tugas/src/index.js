// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // jika Anda menggunakan Redux
import store from './/store'; // sesuaikan dengan path yang benar
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* Pastikan Anda menggunakan Provider jika menggunakan Redux */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
