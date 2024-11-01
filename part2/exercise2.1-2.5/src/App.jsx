import { useState } from "react";
import viteLogo from "/vite.svg";
import Course from "./components/Course";
import Header from "./components/Header";

const App = () => {
    const course = {
        id: 1,
        name: "Half Stack application development",
        parts: [
            {
                id: 1,
                name: "Fundamentals of React",
                exercise: 10,
            },
            {
                id: 2,
                name: "Using props to pass data",
                exercise: 7,
            },
            {
                id: 3,
                name: "State of a component",
                exercise: 14,
            },
        ],
    };
    return (
        <>
            <Header name={course.name}></Header>
            <Course key={course.id} course={course} />
        </>
    );
};

export default App;
