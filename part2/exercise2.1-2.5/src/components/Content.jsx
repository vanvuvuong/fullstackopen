const Content = ({ key, parts }) => {
    let courseDetail = parts.map((part) => (
        <p key={part.id}>
            {part.name} - {part.exercises} exercises
        </p>
    ));
    return <div key={key}>{courseDetail}</div>;
};
export default Content;
