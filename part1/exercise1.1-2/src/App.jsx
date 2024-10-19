import { useState } from 'react'
import viteLogo from '/vite.svg'

const Header = (props) => {
    return (<>
        <h1>{props.course}</h1>
    </>)
}

const Part = (props) => {
    const partComponent = []
    props.parts.forEach(element => {
        partComponent.push(<>
            <p>{element.name} - {element.exercises} exercises</p>
        </>)
    });
    return <>{partComponent}</>
}

const Total = (props) => {
    var sum = 0
    props.parts.forEach(element => {
        sum += element.exercises
    })
    return (<>
        <p>Number of exercises: {sum}</p>
    </>)
}

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    return (
        <div>
            <Header course={course} />
            <Part parts={parts} />
            <Total parts={parts} />
        </div>
    )
}

export default App