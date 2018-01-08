// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
// Relative imports
import App from './App';
import promissStore from './models/PromissStore';
import addPromissStore from './models/AddPromissStore';

ReactDOM.render(<App store={promissStore} addPromissStore={addPromissStore}/>, document.getElementById('root'));