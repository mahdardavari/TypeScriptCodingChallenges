// Combine tuples easily using .... (Spread Support)
type Concat<T extends any[], U extends any[]> = [...T, ...U];

const result: Concat<[1, 2], [3, 4]> = [1, 2, 3, 4]