import { people } from "../main";

// Object.groupBy(items, callbackFn)

export function groupBy<T>(arr: T[], fn: (item: T) => any) {
    return arr.reduce<Record<string, T[]>>((prev, curr) => {
        const groupKey = fn(curr);
        const group = prev[groupKey] || [];
        group.push(curr);
        return { ...prev, [groupKey]: group };
    }, {});
}

// use
const groupByAge = groupBy(people, (p) => p.age)
console.log(groupByAge)

// group
const result = groupBy(people, (e) => {
    if (e.age < 13) return 'child';
    if (e.age < 20) return 'teenager';
    return 'adult';
});

console.log(result)