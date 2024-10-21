import { useState } from 'react'
import './App.css'

const Button = ({ onClick, text }) => {
    return <>
        <button onClick={onClick}> {text} </button>
    </>
}

const History = ({allClicks}) => {
    if (allClicks.length === 0) {
        return (
            <div>
                The app is used by pressing the buttons
            </div>
        )
    }
    return (
        <div>
            Button press history: {allClicks.join(', ')}
        </div>
    )
}

const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    const [total, setTotal] = useState(0)
    console.log("rerender with counter value")

    const handleLeftClick = () => {
        console.log("increase, value before", left)
        setAll(allClicks.concat("L"))
        let newLeft = left + 1
        setTotal(newLeft + right)
        setLeft(newLeft)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat("R"))
        console.log("increase, value before", right)
        let newRight = right + 1
        setTotal(newRight + left)
        setRight(newRight)
    }

    return (<>
        <div>
            {left}
            <Button onClick={handleLeftClick} text="Left" />
            <Button onClick={handleRightClick} text="Right" />
            {right}
            <History allClicks={allClicks}/>
            <p>Total: {total}</p>
        </div>
    </>)
}

export default App
