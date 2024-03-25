// Rate Limiting

// function throttle(fn, delay) {
//     let lastInvoke = null;

//     return (...args) => {
//       if (lastInvoke + delay < Date.now()) {
//         lastInvoke = Date.now();
//         fn(...args);
//       }
//     }
//   }

const throttle = <F extends (...args: any[]) => void>() => (
    func: F,
    delay: number,
) => {
    let lastInvoke = 0;
    return (...args: Parameters<F>) => {
        const now = Date.now();
        if (now - lastInvoke < delay) return;
        lastInvoke = now;
        func(...args);
    }
}