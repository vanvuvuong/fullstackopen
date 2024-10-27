import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const MostVotesAnecdote = ({ countVote, anecdotes }) => {
    let mostVote = Math.max(...countVote);

    if (mostVote == 0) {
        return <></>;
    }
    return (
        <>
            <h1>Most votes Anecdotes</h1>
            <div>{anecdotes[countVote.indexOf(mostVote)]}</div>
        </>
    );
};

const App = () => {
    const anecdotes = [
        "If it hurts, do it more often.",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
        "The only way to go fast, is to go well.",
    ];

    const [selected, setSelected] = useState(0);
    const [countVote, setCount] = useState(new Array(anecdotes.length).fill(0));
    const onClick = () => {
        let newSelected = Math.floor(Math.random() * anecdotes.length);
        setSelected(newSelected);
    };
    const vote = () => {
        let newCountVote = [...countVote];
        newCountVote[selected] += 1;
        setCount(newCountVote);
    };

    return (
        <>
            <h1>Anecdotes of the day</h1>
            <div>{anecdotes[selected]}</div>
            <button onClick={vote}>Vote</button>
            <button onClick={onClick}>Next anecdotes</button>
            <MostVotesAnecdote countVote={countVote} anecdotes={anecdotes} />
        </>
    );
};

export default App;
