// Debounce :  We want to trigger a function, but only once per use case.
// Rate Limiting


// function debounce(fn, delay) {
//     let timeout = null;

//     return (...args) => {
//       clearTimeout(timeout);

//       timeout = setTimeout(() => {
//         fn(...args);
//       }, delay);
//     }
//   }

const debounce = <F extends (...args: any[]) => void>(
    func: F,
    delay: number,
) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: Parameters<F>) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);

        }, delay)
    }
}