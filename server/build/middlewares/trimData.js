"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var HttpError = /** @class */ (function () {
    function HttpError(status, message) {
        this.status = status;
        this.message = message;
    }
    return HttpError;
}());
exports.default = (function (_a, res, next) {
    var method = _a.method, body = _a.body, path = _a.path;
    if (method !== "GET" && method !== "DELETE") {
        var data = path.includes("/task") ? body.taskData : body;
        for (var key in data) {
            data[key] = data[key].trim();
        }
        var info = data.info, required = __rest(data, ["info"]);
        if (!Object.values(required).every(function (value) { return value === true; })) {
            // return res.status(500).send("Some required fileds were not provided");
            return next(new HttpError(503, "Some required fileds were not provided"));
        }
    }
    next();
});
