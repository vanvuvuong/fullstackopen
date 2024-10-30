const Course = ({ course }) => {
    const courseComponent = [];
    courseComponent.push(<h1>{course.name}</h1>);
    var sum = 0;
    course.parts.forEach((element) => {
        sum += element.exercise;
        courseComponent.push(
            <p key={element.id}>
                {element.name} - {element.exercise} exercises
            </p>
        );
    });
    courseComponent.push(<p>Number of exercises: {sum}</p>);
    let courseDetail = course.parts.map((part) => (
        <p key={part.id}>
            {part.name} - {part.exercise} exercises
        </p>
    ));

    return <div>{courseDetail}</div>;
};

export default Course;
