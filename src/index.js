import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Components/Timer/Timer.js';
import './normalize.css';

ReactDOM.render(<Timer to={new Date('10/25/2021 00:0 AM')}/>, document.getElementById('root'));
