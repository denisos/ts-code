"use strict";
exports.__esModule = true;
exports.getName = exports.introduce = exports.fetchData = exports.format = exports.addStrings = void 0;
function addNumbers(a, b) {
    return a + b;
}
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = "hat"; }
    return str1 + str2;
};
exports.addStrings = addStrings;
var format = function (title, param) {
    return "".concat(title, " - ").concat(param);
};
exports.format = format;
var fetchData = function (url) { return Promise.resolve('Data from ${url'); };
exports.fetchData = fetchData;
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join(' '));
}
exports.introduce = introduce;
function getName(user) {
    var _a, _b;
    return "".concat((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : "defult first", " - ").concat((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : "defult first");
}
exports.getName = getName;
exports["default"] = addNumbers;
