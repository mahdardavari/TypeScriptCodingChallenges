import { filter } from "./array-methods/filter";
import { map } from "./array-methods/map";
import { reduce } from "./array-methods/reduce";

const filtered = filter([1, 2, 3, 4, 5, 6], (item) => item < 3);
// console.log(filtered)

const students = [{ name: "Mahdar" }, { name: "Poori" }];
const studentWithId = map(students, (student) => {
    return {
        ...student,
        id: Math.floor(Math.random() * 100),
    };
});
// console.log(studentWithId)

console.log(
    reduce(
        [2, 3, 4, 5],
        (sum, item) => {
            return item + sum;
        },
        0
    ))