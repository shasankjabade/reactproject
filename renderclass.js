import React from 'react'
import ReactDOM from 'react-dom'

class list extends React.Component{
    render()
    {

        const people = [
            {name:'micheal'},
            {name: 'munna'},
            {name: 'bean'}
        ]

        const element = <ol>
            {people.map(person =>(

                <li key={person.name}>{person.name}</li>
            ))}

        </ol>
        return element
    }
}

ReactDOM.render(
    <list/>,
    document.getElementById('root')
)