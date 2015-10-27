# Throttler

Throttle the execution of a function. Written as an ES6 module.


```
import throttle from 'throttler';

window.addEventListener('scroll', throttle( () => console.count(), 1000 ) );
```
