import { useState } from 'react'
import viteLogo from '/vite.svg'

const Course = (props) => {
    const courseComponent = []
    courseComponent.push(<>
        <h1>{props.course.name}</h1>
    </>)
    var sum = 0
    props.course.parts.forEach(element => {
        sum += element.exercises
        courseComponent.push(<>
            <p>{element.name} - {element.exercises} exercises</p>
        </>)
    });
    courseComponent.push(<>
        <p>Number of exercises: {sum}</p>
    </>)
    return <>{courseComponent}</>
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
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
    }
    return (
        <div>
            <Course course={course} />
        </div>
    )
}

export default App