"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function (fn) {
    var timing = arguments.length <= 1 || arguments[1] === undefined ? 200 : arguments[1];

    var timer;

    return function () {
        var _this = this;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (!timer) {
            timer = setTimeout(function (e) {
                fn.apply.apply(fn, [_this].concat(args));timer = false;
            }, timing);
        }
    };
};

module.exports = exports["default"];

