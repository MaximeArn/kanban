"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (err, req, res, next) {
    var status = err.status, message = err.message;
    console.log(status, message);
    console.log("error handler");
    // res.set({ message });
    res.status(status || 500).json({ message: message });
    console.log(res);
    res.send();
});
