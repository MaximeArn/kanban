"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.default = new mongoose_1.Schema({
    title: String,
    info: { type: String, default: null },
    color: { type: String, default: "#fff" },
    done: { type: Boolean, default: false },
});
