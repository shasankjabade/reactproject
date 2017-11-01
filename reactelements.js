import React from 'react'
import ReactDOM from 'react-dom'

const people=[
    {name: 'Munna'},
    {name: 'Micheal'},
    {name: 'Bean'}
]

const element = <ol>
    {people.map(person =>(
        <li>{person.name}</li>
        
       
    ))}
    </ol>


ReactDOM.render(
    element,
    document.getElementById('root');
)

