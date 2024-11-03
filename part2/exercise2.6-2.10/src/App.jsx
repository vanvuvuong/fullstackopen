import { useState } from "react";
import Phonebook from "./components/Phonebook";
import Number from "./components/Number";

const App = () => {
    const [persons, setPersons] = useState([{ id: 1, name: "Arto Hellas" }]);
    const [newName, setNewName] = useState("name");
    const handleValueChange = (event) => {
        // console.log(event.target.value);
        setNewName(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const personObject = {
            id: Math.max(persons.map((p) => p.id)) + 1,
            name: newName,
        };
        setPersons(persons.concat(personObject));
        setNewName("name");
    };
    return (
        <div>
            <Phonebook
                name={newName}
                handleValueChange={handleValueChange}
                handleSubmit={handleSubmit}
            />
            <Number persons={persons} />
        </div>
    );
};

export default App;
