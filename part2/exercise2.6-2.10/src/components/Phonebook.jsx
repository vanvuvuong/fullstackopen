const Phonebook = ({ name, handleValueChange, handleSubmit }) => {
    return (
        <>
            <h2>Phonebook</h2>
            <form onSubmit={handleSubmit}>
                Name: <input value={name} onChange={handleValueChange} />
                <button type="submit">add</button>
            </form>
        </>
    );
};

export default Phonebook;
