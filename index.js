export const throttle = (fn, time = 50) => {
    let timer = null;

    function throttledFn(...args) {
        if(!timer) {
            timer = setTimeout( () => {
                fn(...args);
                timer = null;
            }, time )
        }
    }

    throttledFn.cancel = () => {
        clearTimeout(timer);
        timer = null;
    }

    return throttledFn;
}

export default throttle;
