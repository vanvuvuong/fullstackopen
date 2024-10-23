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

const StatisticLine = ({ name, count }) => {
    if (name == "Avg") {
        return (
            <tr>
                <td>{name}:</td> <td>{count}%</td>
            </tr>
        );
    }
    return (
        <tr>
            <td>{name}:</td> <td>{count}</td>
        </tr>
    );
};

const Statistics = ({ statistics }) => {
    if (statistics[statistics.length - 1].count == 0) {
        return (
            <>
                <p>No feedback given</p>
            </>
        );
    }
    const renderer = [];
    statistics.forEach((element) => {
        renderer.push(
            <StatisticLine name={element.name} count={element.count} />
        );
    });
    return (
        <>
            {renderer[0]}
            {renderer[1]}
            {renderer[2]}
            {renderer[3]}
            {renderer[4]}
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
        let newTotalCount = totalCount;
        setNeutralCount(newNeutralCount + 1);
        setTotalCount(newTotalCount + 1);
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
        newAvgCount = ((goodCount - badCount) / totalCount) * 100;
        setAvgCount(newAvgCount);
    };
    let statistics = [
        {
            name: "Good",
            count: goodCount,
        },
        { name: "Neutral", count: neutralCount },
        {
            name: "Bad",
            count: badCount,
        },
        { name: "Avg", count: avgCount },
        { name: "Total", count: totalCount },
    ];
    return (
        <>
            <h1>Give feedback</h1>
            <Button onClick={goodAction} name="Good" />
            <Button onClick={neutralAction} name="Neutral" />
            <Button onClick={badAction} name="Bad" />
            <h1>Statistics</h1>
            <Statistics statistics={statistics} />
            {/* <Result name="Good" count={goodCount} />
            <Result name="Neutral" count={neutralCount} />
            <Result name="Bad" count={badCount} />
            <Result name="Total" count={totalCount} />
            <Result name="Avg" count={avgCount} /> */}
        </>
    );
}

export default App;
