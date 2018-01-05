// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
// Relative imports
import App from './App';
import store from './models/PromissStore';

ReactDOM.render(<App store={store} />, document.getElementById('root'));