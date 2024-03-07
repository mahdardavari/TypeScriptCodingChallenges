
const objOne = {
    name: '1',
    age: 2,
};

//Get the variable type
type ObjectOne = typeof objOne;

// Get the key of type
// "name" | "age"
type K = keyof ObjectOne;
