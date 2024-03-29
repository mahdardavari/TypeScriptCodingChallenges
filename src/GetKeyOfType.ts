
const objOne = {
    name: '1',
    age: 2,
};

// Get the variable type
// The typeof type guard is used to determine the type of a variable
// It checks whether a variable is of a certain primitive type
type ObjectOne = typeof objOne;

// Get the key of type
// "name" | "age"
type K = keyof ObjectOne;

// keyof Person
type Person = {
    name: string
    age: number
    isProgramer: boolean
}

const age = getValue('age', { name: 'mahdar', age: 27, isProgramer: true })

function getValue(key: keyof Person, person: Person) {
    return person[key]
}

// keyof 
const a = {
    name: 'Mahdar',
    age: 27,
    isProgramer: true
}

type A = (typeof a)[keyof typeof a]
