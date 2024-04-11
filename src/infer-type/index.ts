// The infer keyword in TypeScript allows you to declare a generic type parameter that will be inferred from a conditional type.

// Some key things about infer:

// It allows a generic type to be inferred from the true branch of a conditional type.
// The inferred type can then be referenced as the infer name.
// It is often used with extends in conditional types.


type Unpacked<T> = T extends (infer U)[] ? U : T;

type T0 = Unpacked<string[]>;
// T0 is inferred as string

type T1 = Unpacked<number[]>;
// T1 is inferred as number 

type T2 = Unpacked<string>;
// T2 is just string

