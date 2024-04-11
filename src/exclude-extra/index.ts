// Extract allows you to extract typing information from a type. 
// Extract accepts two Parameters:
// first the Interface and second the type that should be extracted.

type MovieCharacters =
    | 'Harry Potter'
    | 'Tom Riddle'
    | { firstName: string; name: string };

type hpCharacters = Extract<MovieCharacters, string>;
// equal to type hpCharacters = 'Harry Potter' | 'Tom Riddle';

type Characters = Extract<MovieCharacters, { firstName: string }>;
// equal to type Characters = {firstName: string; name: string };
// it extracts all object types that contain a firstName: string type.

//__________________

// Exclude does the opposite of extract.
// It allows you to generate a new type by excluding a type

type excludeHpCharacters = Exclude<MovieCharacters, string>;
// equal to type hpCharacters = {firstName: string; name: string };

type excludeCharacters = Exclude<MovieCharacters, { firstName: string }>;
// equal to type excludeCharacters = 'Harry Potter' | 'Tom Riddle';