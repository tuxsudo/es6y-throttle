# Throttler

Throttle the execution of a function. Written as an ES6 module.


```
import throttle from '@tuxsudo/throttle';

window.addEventListener('scroll', throttle( () => console.count(), 1000 ) );
```
