// Type Predicate Functions are functions that return a boolean value and have a type predicate as their return type.
// A type predicate is a type assertion that checks if an object has a specific property or set of properties.
// This allows TypeScript to narrow the type of an object based on the result of the type predicate.
// They’re similar to type guards, but work on functions.

const isString = (input: unknown): input is string => {
    return typeof input === 'string';
}

const mixedArray = [1, 'Mahdar', []]

const stringOnly = mixedArray.filter(isString)