import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
    const friends = [
        { name: 'Peter', age: 4 },
        { name: 'Maya', age: 10 },
    ]

    return (
        <div>
            <p>{friends[0].name} {friends[0].age}</p>
            <p>{friends[1].name} {friends[1].age}</p>
        </div>
    )
}
export default App
