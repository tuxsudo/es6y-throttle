"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var throttle = exports.throttle = function throttle(fn) {
    var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;

    var timer = null;

    function throttledFn() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (!timer) {
            timer = setTimeout(function () {
                fn.apply(undefined, args);
                timer = null;
            }, time);
        }
    }

    throttledFn.cancel = function () {
        clearTimeout(timer);
        timer = null;
    };

    return throttledFn;
};

exports.default = throttle;

