import { numbers } from "../main";

// The filter() method creates a new array with all elements
// that pass the test implemented by the provided function.
// This method does not change the original array.

// 1.callback − Function to test each element of the array
//2. thisObject − Object to use as this when executing callback.

export const result = numbers.filter((item, index, array) => {
  return item > 1;
});

// unknown is the parent type of all other types. it's a regular type in the type system.
// unknown which is the type-safe counterpart of any. Anything is assignable to unknown,
// but unknown isn't assignable to anything but itself and any without a type assertion or a control flow based narrowing.
//Likewise, no operations are permitted on an unknown without first asserting or narrowing to a more specific type.

type PredicateFunc<TList extends unknown[]> = (
  item: TList[number],
  index: number,
  array: TList
) => boolean;

export const filter = <
  TList extends unknown[],
  TCallback extends PredicateFunc<TList>
>(
  list: TList,
  callback: TCallback
) => {
  const result = [];

  for (let index = 0; index < list.length; index++) {
    const hasPassed = callback(list[index], index, list);
    // console.log({ hasPassed });
    if (hasPassed) {
      result.push(list[index]);
    }
  }
  return result as TList;
};


const filtered = filter(numbers, (item) => item < 3);
console.log(filtered)