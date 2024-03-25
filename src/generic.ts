export const arr: [string, number | boolean][] =
    [['keyOne', 1], ['keyTwo', 2], ['keyThree', true]]

function convertArrToObject<T>(array: [string, T][]) {
    const obj: {
        [index: string]: T
    } = {};

    array.forEach(([key, value]) => {
        obj[key] = value
    })

    return obj
}
const obj = convertArrToObject(arr)

//
const arrX = [1, 2, 3]
const arrY = ['a', 'b', 'c']
function getArr<ArrayType>(array: ArrayType[]) {
    return array[1]
}
const retX = getArr(arrX)
const retY = getArr(arrY)

//
type APIResponse<TData extends object> = {
    data: TData,
    isError: boolean,
}

type UserResponse = APIResponse<{ name: string, id: number, age: number, status?: number }>
type BlogResponse = APIResponse<{ name: string, }>

const userResponse: UserResponse = {
    data: { name: 'M', id: 20, age: 20 },
    isError: false
}

const blogResponse: BlogResponse = {
    data: { name: 'mahdar' },
    isError: true
}

type APIResponseWithDefaultValue<TData = { name: string }> = {
    data: TData,
    isError: boolean,
}

const defaultValue: APIResponseWithDefaultValue<{ status: number }> = {
    data: {
        status: 200
    },
    isError: false
}