// the original Array.reduce function takes two arguement :
//1. A callback function as an argument and that callback function can have four arguments passed into it :
// a. accumulator
// b. current value
// c. index of the current value [optional]
// d. array [optional]

export type UnknownList = unknown[];

type Reducer<TArray extends UnknownList, TAccumulated> = (
    accumulated: TAccumulated,
    item: TArray[number],
    index: number,
    array: TArray
) => TAccumulated;

export const reduce = <TArray extends UnknownList, TInitialValue>(
    array: TArray,
    reducer: Reducer<TArray, TInitialValue>,
    initialValue: TInitialValue
) => {
    let accumulated = initialValue;

    for (let i = 0; i < array.length; i++) {
        accumulated = reducer(accumulated, array[i], i, array);
    }

    return accumulated;
}