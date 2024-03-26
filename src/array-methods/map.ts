import { students } from "../main";
// the original Array.map function takes a callback function as an argument and
// that callback function can have three arguments passed into it :

// a. current value
// b. index of the current value [optional]/
// c. array [optional]

type CallbackFunc<TList extends unknown[], TReturnValue> = (
  item: TList[number],
  index: number,
  list: TList
) => TReturnValue;

export const map = <
  TList extends unknown[],
  TCallback extends CallbackFunc<TList, ReturnType<TCallback>>
>(
  list: TList,
  callback: TCallback
) => {
  const result = [];

  for (let index = 0; index < list.length; index++) {
    result.push(callback(list[index], index, list));
  }
  return result;
};

const studentWithId = map(students, (student) => {
  return {
    ...student,
    id: Math.floor(Math.random() * 100),
  };
});

console.log(studentWithId)