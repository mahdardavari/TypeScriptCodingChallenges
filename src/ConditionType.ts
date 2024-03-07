// Restrict parameter types using generics
const wrapper = <F extends Function>(fn: F) => {
    const ret = fn();
    return ret;
  };
  
  // OR
  type isNumber<T> = T extends number ? true : false;
  type T1 = isNumber<number>; // true
  type T2 = isNumber<string>; // false