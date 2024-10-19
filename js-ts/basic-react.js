// Destructuring
const Hello = (props) => {
    const name = props.name
    const age = props.age
    const bornYear = () => new Date().getFullYear() - age
    return (
        <div>
            <p>Hello {name}, you are {age} years old</p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}
// equavilent to
const Hello2 = (props) => {
    const { name, age } = props
    const bornYear = () => new Date().getFullYear() - age
    return (
        <div>
            <p>Hello {name}, you are {age} years old</p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}
// equavilent to
const Hello3 = ({ name, age }) => {
    const bornYear = () => new Date().getFullYear() - age
    return (
        <div>
            <p>Hello {name}, you are {age} years old</p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}
// End destructuring

// Stateful component

// Event handler is a function or function reference