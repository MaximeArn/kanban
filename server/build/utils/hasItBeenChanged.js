"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (old, updated) {
    var isEqual = false;
    for (var key in updated) {
        isEqual = old[key] !== updated[key] ? true : false;
    }
    return isEqual;
});
