import React from 'react'
import ReactDOM from 'react-dom'

const element = React.createElement('div', null, 'Hello world');
const element_2 = React.createElement('div', null,'trial working');

console.log(element);
console.log(element_2);

ReactDOM.render(
    element,
    document.getElementById('root')
)