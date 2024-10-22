import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Button = ({ onClick, name }) => {
    return (
        <>
            <button onClick={onClick}>{name}</button>
        </>
    );
};

const Result = ({ name, count }) => {
    return (
        <>
            <ul>
                {name}: {count}
            </ul>
        </>
    );
};

function App() {
    const [goodCount, setGoodCount] = useState(0);
    const [neutralCount, setNeutralCount] = useState(0);
    const [badCount, setBadCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [avgCount, setAvgCount] = useState(0);
    const goodAction = () => {
        let newGoodCount = goodCount;
        let newTotalCount = totalCount;
        setGoodCount(newGoodCount + 1);
        setTotalCount(newTotalCount + 1);
        avgAction(goodCount + 1, badCount, totalCount + 1);
    };
    const neutralAction = () => {
        let newNeutralCount = neutralCount;
        setNeutralCount(newNeutralCount + 1);
    };
    const badAction = () => {
        let newBadCount = badCount;
        let newTotalCount = totalCount;
        setBadCount(newBadCount + 1);
        setTotalCount(newTotalCount + 1);
        avgAction(goodCount, badCount + 1, totalCount + 1);
    };
    const avgAction = (goodCount, badCount, totalCount) => {
        let newAvgCount = avgCount;
        console.log("good", goodCount);
        console.log("bad", badCount);
        console.log("total", totalCount);
        newAvgCount = (goodCount - badCount) / totalCount;
        setAvgCount(newAvgCount);
    };
    return (
        <>
            <h1>Give feedback</h1>
            <Button onClick={goodAction} name="Good" />
            <Button onClick={neutralAction} name="Neutral" />
            <Button onClick={badAction} name="Bad" />
            <h1>Statistics</h1>
            <Result name="Good" count={goodCount} />
            <Result name="Neutral" count={neutralCount} />
            <Result name="Bad" count={badCount} />
            <Result name="Total" count={totalCount} />
            <Result name="Avg" count={avgCount} />
        </>
    );
}

export default App;
