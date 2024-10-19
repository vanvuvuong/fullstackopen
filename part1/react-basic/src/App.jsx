import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Display = ({ counter }) => {
    return <>
        <div>{counter}</div>
    </>
}

const Button = ({onClick, text}) => {
    return <>
        <button onClick={onClick}> {text} </button>
    </>
}

function App() {
    const [counter, setCounter] = useState(0)
    console.log("rerender with couter value")

    const increaseByOne = () => {
        console.log("increase, value before", counter)
        setCounter(counter + 1)
    }

    const decreaseByOne = () => {
        console.log("decrease, value before", counter)
        setCounter(counter - 1)
    }

    const setToZero = () => {
        console.log("reset to 0, value before", counter)
        setCounter(0)
    }

    return (<>
        <div>
            <Display counter={counter} />
            <Button onClick={increaseByOne} text="Increase"/>
            <Button onClick={decreaseByOne} text="Decreae"/>
            <Button onClick={setToZero} text="Zero"/>
        </div>
    </>)
}

export default App
