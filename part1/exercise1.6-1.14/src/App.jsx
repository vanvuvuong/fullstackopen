import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Button = ({ onClick, name }) => {
    return <>
        <button onClick={onClick}>{name}</button>
    </>
}

const Result = ({ name, count }) => {
    return <>
        <ul>{name}: {count}</ul>
    </>
}

function updateCount(count, func) {
    console.log(count);
    let newCount = count
    newCount += 1
    func(newCount)
}

function App() {
    const [goodCount, setGoodCount] = useState(0)
    const [neutralCount, setNeutralCount] = useState(0)
    const [badCount, setBadCount] = useState(0)
    const goodAction = () => { updateCount(goodCount, setGoodCount) }
    const neutralAction = () => { updateCount(neutralCount, setNeutralCount) }
    const badAction = () => { updateCount(badCount, setBadCount) }
    return (<>
        <h1>Give feedback</h1>
        <Button onClick={goodAction} name="Good" />
        <Button onClick={neutralAction} name="Neutral" />
        <Button onClick={badAction} name="Bad" />
        <h1>Statistics</h1>
        <Result name="Good" count={goodCount} />
        <Result name="Neutral" count={neutralCount} />
        <Result name="Bad" count={badCount} />
    </>)
}

export default App
