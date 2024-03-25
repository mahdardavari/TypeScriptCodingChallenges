// Conditional types allow you to create a new type based on a condition.
// The syntax is similar to the ternary operator, 
// using the extends keyword as a type constraint

export type NonNullable<T> = T extends null | undefined ? never : T;

// Restrict parameter types using generics
const wrapper = <F extends Function>(fn: F) => {
  const ret = fn();
  return ret;
};

// OR
type isNumber<T> = T extends number ? true : false;
type T1 = isNumber<number>; // true
type T2 = isNumber<string>; // false
