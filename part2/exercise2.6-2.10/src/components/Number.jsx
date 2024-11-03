const Number = ({ persons }) => {
    return (
        <>
            <h2>Numbers</h2>
            {persons.map((person) => (
                <li key={person.id}>{person.name}</li>
            ))}
        </>
    );
};

export default Number;
