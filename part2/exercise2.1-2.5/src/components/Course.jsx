import Content from "./Content";
import Header from "./Header";

const Course = ({ key, name, parts }) => {
    const total = parts.reduce((s, p) => {
        if (s.exercises == undefined && p.exercises == undefined) {
            return s + p;
        } else if (s.exercises == undefined && p.exercises != undefined) {
            return s + p.exercises;
        } else {
            return s.exercises + p.exercises;
        }
    });
    return (
        <>
            <Header name={name}></Header>
            <Content key={key} parts={parts}/>
            <div>Total of exercises: {total}</div>
        </>
    );
};

export default Course;
