import { filter } from "./array-methods/filter";
import { map } from "./array-methods/map";
import { reduce } from "./array-methods/reduce";

const numbers = [1, 2, 3, 4, 5, 6];
const students = [{ name: "Mahdar" }, { name: "POPOPOO" }];

const filtered = filter(numbers, (item) => item < 3);
//
const studentWithId = map(students, (student) => {
    return {
        ...student,
        id: Math.floor(Math.random() * 100),
    };
});

//

const sum = reduce(numbers, (sum, item) => {
    return item + sum;
}, 0);
