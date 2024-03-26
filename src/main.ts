
export const numbers = [1, 2, 3, 4, 5, 6];
export const students = [{ name: "Mahdar" }, { name: "POPOPOO" }];
export const people = [
    { name: 'Adam', age: 21 },
    { name: 'Brian', age: 10 },
    { name: 'Carla', age: 19 },
    { name: 'Daniel', age: 14 },
    { name: 'Ellie', age: 21 },
];


// Declaring Globals
// Don't put your types in .d.ts files !
declare global {
    type Whatever = {};
    interface Window {
        foo: () => string
    }
}
