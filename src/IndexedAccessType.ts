// Like getting a value in JavaScript, we can get the type of a value in TypeScript

type Student = {
    name: string;
    id: number;
}

// string
type StudentName = Student['name']