# Throttler

Throttle the execution of a function. Written as an ES6 module.


```
import throttle from 'es6y-throttle';

window.addEventListener('scroll', throttle( () => console.count(), 1000 ) );
```
