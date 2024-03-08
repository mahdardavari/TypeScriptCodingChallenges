// use generic type

function wait(duration: number): Promise<string> {
    return new Promise<string>(resolve => {
        setTimeout(() => resolve('Hi'), duration)
    })
}

wait(1000).then((value) => {
    console.log(value.length)
})

// Awaited 
type Async = Promise<string>;
type Val = Awaited<string>;

async function doSomething () {
    return 2
}

type Value = Awaited<ReturnType<typeof doSomething>>