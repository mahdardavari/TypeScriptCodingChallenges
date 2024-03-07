// never in TypeScript can be used for type elimination, for example:

type Cities = {
    title: string;
    id: number;
}

type CustomExclude<T, U> = T extends U ? never : T;

type CityId = CustomExclude<keyof Cities, 'title'>