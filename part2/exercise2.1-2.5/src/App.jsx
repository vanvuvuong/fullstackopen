import Course from "./components/Course";

const App = () => {
    const courses = [
        {
            id: 1,
            name: "Half Stack application development",
            parts: [
                {
                    id: 1,
                    name: "Fundamentals of React",
                    exercises: 10,
                },
                {
                    id: 2,
                    name: "Using props to pass data",
                    exercises: 7,
                },
                {
                    id: 3,
                    name: "State of a component",
                    exercises: 14,
                },
            ],
        },
        {
            name: "Node.js",
            id: 2,
            parts: [
                {
                    name: "Routing",
                    exercises: 3,
                    id: 1,
                },
                {
                    name: "Middlewares",
                    exercises: 7,
                    id: 2,
                },
            ],
        },
    ];
    return courses.map((course) => (
        <div key={course.id}>
            <Course key={course.key} name={course.name} parts={course.parts} />
        </div>
    ));
};

export default App;
