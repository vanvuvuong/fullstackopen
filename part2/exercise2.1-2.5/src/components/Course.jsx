const Course = ({ course }) => {
    var sum = 0;
    course.parts.forEach((element) => {
        sum += element.exercise;
    });
    let courseDetail = course.parts.map((part) => (
        <p key={part.id}>
            {part.name} - {part.exercise} exercises
        </p>
    ));

    return (
        <>
            <div>{courseDetail}</div>
            <div>Total of exercises: {sum}</div>
        </>
    );
};

export default Course;
