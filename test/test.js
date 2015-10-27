import test from 'tape';
import throttle from '../index.js';


test('It throttles correctly', t => {
	t.plan(1);

	let throttledCounter = 0,
		unthrottledCounter = 0,
		fn1 = throttle( () => ++throttledCounter, 1000),
		fn2 = ()=>unthrottledCounter++,
		clock1 = setInterval(fn1, 25),
		clock2 = setInterval(fn2, 25);

	setTimeout( () => {
		clearInterval(clock1);
		clearInterval(clock2);
		t.ok(throttledCounter>0 && throttledCounter<5, `Counter was throttled (${throttledCounter} vs ${unthrottledCounter})`);
		t.end();
	}, 1000*5);

});


test('It properly handles arguments', t => {
	t.plan(1);

	let a = 0,
		b = 0,
		c = 0,
		fn = throttle( (x, y) => {
			a = a+x;
			b = b+y;
		}, 1000),
		clock = setInterval( () => {
			var rand = Math.random();
			fn(rand, rand*-1);
			c++;
		}, 100);

	setTimeout( () => {
		clearInterval(clock);
		t.ok( a+b===0 && a < c, `both arguments handled (${a} vs ${b} vs ${c})`);
	}, 1000*5);

});
